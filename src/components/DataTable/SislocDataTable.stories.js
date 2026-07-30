// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocDataTable.stories.js
//
// Data Table composta seguindo o nível de anatomia do
// Carbon Design System: head + rows + sort + seleção +
// batch bar + pagination + empty state.
//
// Componentes:
//   SislocDataTable.vue   — orquestrador (head, rows, sort, seleção)
//   SislocPagination.vue  — navegação reutilizável
//
// Escopo definido (sem expansão de row, sem zebra stripes,
// todas as rows brancas com divider):
//   - Seleção múltipla via checkbox
//   - Sort 3 estados (unsorted/asc/desc) por coluna
//   - Batch bar com contagem + chips de contexto + limpar seleção
//   - Overflow menu (⋮) por row — Editar / Inativar / Excluir
//   - Empty state
//   - Paginação com itens por página + navegação
// ============================================

import { ref, computed } from 'vue'
import SislocDataTable from './SislocDataTable.vue'
import SislocPagination from './SislocPagination.vue'
import SislocEmptyState from '../EmptyState/SislocEmptyState.vue'

// ─── Dados de exemplo — baseados nos prints reais ────────────────────────────

const STATUS_CHIP = {
  Qualificar:     { bg: '#E3F2FD', text: '#0D47A1' },
  Convertido:     { bg: '#E8F5E9', text: '#1B5E20' },
  Desqualificado: { bg: '#FFEBEE', text: '#B71C1C' },
}

const TEMP_CHIP = {
  Quente: { bg: '#FFEBEE', text: '#B71C1C' },
  Morno:  { bg: '#FFF8E1', text: '#F57F17' },
  Frio:   { bg: '#E3F2FD', text: '#0D47A1' },
}

function statusChipHtml(status) {
  const c = STATUS_CHIP[status] || { bg: '#F1F1F1', text: '#79767A' }
  return `<span style="display:inline-flex;align-items:center;padding:2px 10px;border-radius:12px;background:${c.bg};color:${c.text};font-size:12px;font-weight:500;white-space:nowrap;">${status}</span>`
}

function tempChipHtml(temp) {
  const c = TEMP_CHIP[temp] || { bg: '#F1F1F1', text: '#79767A' }
  return `<span style="display:inline-flex;align-items:center;padding:2px 10px;border-radius:12px;background:${c.bg};color:${c.text};font-size:12px;font-weight:500;white-space:nowrap;">${temp}</span>`
}

function originChipHtml(origin) {
  return `<span style="display:inline-flex;align-items:center;padding:2px 10px;border-radius:12px;border:1px solid #79767A;color:#79767A;font-size:12px;white-space:nowrap;">${origin}</span>`
}

const LEADS_DATA = [
  { id: 1, status: 'Qualificar',     nome: 'Maria Oliveira Santos',  empresa: 'Google Brasil',        origem: 'Google',              criadoEm: '12/07/26 09:15', captador: 'Maria Oliveira Santos',  temperatura: 'Quente' },
  { id: 2, status: 'Qualificar',     nome: 'Lucas Almeida Costa',    empresa: 'RD Station',           origem: 'Integração RD Station', criadoEm: '12/07/26 10:20', captador: 'Lucas Almeida Ferreira', temperatura: 'Quente' },
  { id: 3, status: 'Qualificar',     nome: 'Ana Beatriz Ramos',      empresa: 'AQS Engenharia',       origem: 'AQS',                  criadoEm: '13/07/26 08:40', captador: 'Ana Paula Costa',        temperatura: 'Quente' },
  { id: 4, status: 'Convertido',     nome: 'Carlos Eduardo Lima',    empresa: 'Instagram Ads',        origem: 'Instagram',            criadoEm: '13/07/26 14:05', captador: 'Felipe Rodrigues Lima',  temperatura: 'Morno' },
  { id: 5, status: 'Convertido',     nome: 'Fernanda Nascimento',    empresa: 'LinkedIn Corp',        origem: 'LinkedIn',             criadoEm: '14/07/26 09:00', captador: 'Juliana Martins da Silva',temperatura: 'Morno' },
  { id: 6, status: 'Convertido',     nome: 'Ricardo Gomes da Silva', empresa: 'Twitter Inc',          origem: 'Twitter',              criadoEm: '14/07/26 11:30', captador: 'Ricardo Gomes de Souza', temperatura: 'Morno' },
  { id: 7, status: 'Convertido',     nome: 'Juliana Ferreira Martins',empresa:'Facebook Brasil',      origem: 'Facebook',             criadoEm: '15/07/26 15:45', captador: 'Camila Alves Pereira',   temperatura: 'Frio' },
  { id: 8, status: 'Desqualificado', nome: 'Thiago Rodrigues Alves', empresa: 'TikTok Ads',           origem: 'TikTok',               criadoEm: '16/07/26 08:10', captador: 'Bruno Henrique Santos',  temperatura: 'Frio' },
  { id: 9, status: 'Desqualificado', nome: 'Patrícia Vieira dos Santos', empresa: 'YouTube Creators', origem: 'YouTube',              criadoEm: '16/07/26 17:20', captador: 'Tatiane Soares de Oliveira', temperatura: 'Frio' },
]

const COLUMNS = [
  { key: 'status',      label: 'Status',      sortable: true },
  { key: 'nome',        label: 'Nome',        sortable: true },
  { key: 'empresa',     label: 'Empresa do lead', sortable: true },
  { key: 'origem',      label: 'Origem' },
  { key: 'criadoEm',    label: 'Criado em',   sortable: true },
  { key: 'captador',    label: 'Captador' },
  { key: 'temperatura', label: 'Temperatura', sortable: true },
]

// ─── Overflow menu (⋮) — componente inline usado nas stories ─────────────────

const OverflowMenu = {
  name: 'OverflowMenu',
  props: ['rowId'],
  emits: ['action'],
  data() {
    return { open: false }
  },
  methods: {
    toggle() { this.open = !this.open },
    act(action) {
      this.open = false
      this.$emit('action', { action, rowId: this.rowId })
    },
  },
  template: `
    <div style="position: relative; display: inline-block;">
      <button
        @click="toggle"
        style="
          display:flex; align-items:center; justify-content:center;
          width:32px; height:32px; border:none; background:none;
          border-radius:50%; cursor:pointer;
        "
        aria-label="Mais ações"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#79767A"/>
        </svg>
      </button>
      <div v-if="open" style="
        position:absolute; right:0; top:36px; z-index:10;
        background:#fff; border-radius:8px;
        box-shadow:0 4px 12px rgba(0,0,0,0.14);
        min-width:140px; padding:4px 0;
      ">
        <button @click="act('editar')" style="display:block;width:100%;text-align:left;padding:8px 16px;border:none;background:none;font-size:13px;font-family:Roboto,sans-serif;color:#1D1B20;cursor:pointer;">Editar</button>
        <button @click="act('inativar')" style="display:block;width:100%;text-align:left;padding:8px 16px;border:none;background:none;font-size:13px;font-family:Roboto,sans-serif;color:#1D1B20;cursor:pointer;">Inativar</button>
        <button @click="act('excluir')" style="display:block;width:100%;text-align:left;padding:8px 16px;border:none;background:none;font-size:13px;font-family:Roboto,sans-serif;color:#EA3A3D;cursor:pointer;">Excluir</button>
      </div>
    </div>
  `,
}

export default {
  title: 'Componentes/DataTable',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Data Table** — anatomia completa: head + rows + sort + seleção + batch actions + pagination.

**Componentes:**
- \`SislocDataTable.vue\` — orquestrador com slots para células e ações customizadas
- \`SislocPagination.vue\` — navegação reutilizável fora da tabela também

**Comportamentos:**
- Sort 3 estados por coluna (unsorted → asc → desc → unsorted)
- Seleção múltipla via checkbox — "select all" com estado indeterminate
- Batch bar aparece acima do head quando há seleção — contagem + chips de contexto + "Limpar seleção"
- Overflow menu (⋮) por row — Editar / Inativar / Excluir
- Empty state customizável via slot
- Rows brancas com divider — sem zebra stripe (decisão de produto)

**Props principais:**
- \`columns\` — \`[{ key, label, sortable? }]\`
- \`rows\` — array de objetos com \`id\`
- \`selectable\` — habilita checkboxes
- \`v-model:selected\` — array de IDs selecionados
- \`entityLabel\` — nome exibido na batch bar (ex: "Leads")
- \`relatedChips\` — chips extras na batch bar
        `,
      },
    },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Sem seleção — apenas visualização com overflow menu */
export const SemSelecao = {
  name: 'Sem seleção',
  render: () => ({
    components: { SislocDataTable, SislocPagination, OverflowMenu },
    setup() {
      const rows = ref(LEADS_DATA)
      const page = ref(1)
      const perPage = ref(10)
      return { rows, COLUMNS, page, perPage, statusChipHtml, tempChipHtml, originChipHtml }
    },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <SislocDataTable :columns="COLUMNS" :rows="rows">
          <template #cell-status="{ value }">
            <span v-html="statusChipHtml(value)" />
          </template>
          <template #cell-origem="{ value }">
            <span v-html="originChipHtml(value)" />
          </template>
          <template #cell-temperatura="{ value }">
            <span v-html="tempChipHtml(value)" />
          </template>
          <template #actions="{ row }">
            <OverflowMenu :row-id="row.id" @action="(e) => console.log(e)" />
          </template>
          <template #pagination>
            <SislocPagination v-model:page="page" v-model:per-page="perPage" :total="325" />
          </template>
        </SislocDataTable>
      </div>
    `,
  }),
}

/** Com seleção — batch bar ativa */
export const ComSelecao = {
  name: 'Com seleção (batch bar)',
  render: () => ({
    components: { SislocDataTable, SislocPagination, OverflowMenu },
    setup() {
      const rows = ref(LEADS_DATA)
      const selected = ref([2, 3, 4])
      const page = ref(1)
      const perPage = ref(10)
      return { rows, COLUMNS, selected, page, perPage, statusChipHtml, originChipHtml }
    },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <SislocDataTable
          :columns="COLUMNS"
          :rows="rows"
          selectable
          v-model:selected="selected"
          entity-label="Leads"
          :related-chips="[{ label: '+2 em Contas' }, { label: '+2 em Negócios' }]"
        >
          <template #cell-status="{ value }">
            <span v-html="statusChipHtml(value)" />
          </template>
          <template #cell-origem="{ value }">
            <span v-html="originChipHtml(value)" />
          </template>
          <template #actions="{ row }">
            <OverflowMenu :row-id="row.id" />
          </template>
          <template #pagination>
            <SislocPagination v-model:page="page" v-model:per-page="perPage" :total="325" />
          </template>
        </SislocDataTable>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '3 linhas pré-selecionadas — a batch bar aparece automaticamente acima do head, com contagem e chips de contexto relacionado.',
      },
    },
  },
}

/** Interativo — seleção funcional completa */
export const Interativo = {
  name: 'Interativo — seleção completa',
  render: () => ({
    components: { SislocDataTable, SislocPagination, OverflowMenu },
    setup() {
      const rows = ref(LEADS_DATA)
      const selected = ref([])
      const page = ref(1)
      const perPage = ref(10)

      function handleAction({ action, rowId }) {
        alert(`Ação "${action}" na linha ${rowId}`)
      }

      return { rows, COLUMNS, selected, page, perPage, handleAction, statusChipHtml, tempChipHtml, originChipHtml }
    },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <SislocDataTable
          :columns="COLUMNS"
          :rows="rows"
          selectable
          v-model:selected="selected"
          entity-label="Leads"
        >
          <template #cell-status="{ value }">
            <span v-html="statusChipHtml(value)" />
          </template>
          <template #cell-origem="{ value }">
            <span v-html="originChipHtml(value)" />
          </template>
          <template #cell-temperatura="{ value }">
            <span v-html="tempChipHtml(value)" />
          </template>
          <template #actions="{ row }">
            <OverflowMenu :row-id="row.id" @action="handleAction" />
          </template>
          <template #pagination>
            <SislocPagination v-model:page="page" v-model:per-page="perPage" :total="325" />
          </template>
        </SislocDataTable>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Marque checkboxes, clique nos headers para ordenar, use o overflow menu (⋮) — tudo funcional.',
      },
    },
  },
}

/** Empty state */
export const EstadoVazio = {
  name: 'Estado vazio',
  render: () => ({
    components: { SislocDataTable, SislocEmptyState },
    setup() {
      function criarLead() {
        alert('Abrir formulário de criação de lead')
      }
      return { COLUMNS, criarLead }
    },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <SislocDataTable :columns="COLUMNS" :rows="[]">
          <template #empty>
            <SislocEmptyState
              title="Nenhum registro cadastrado"
              subtitle="Cadastre um registro para visualizar nesta página"
              action-label="Criar Lead"
              @action="criarLead"
            />
          </template>
        </SislocDataTable>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Usa o componente `SislocEmptyState` — padrão reutilizável em toda a aplicação (tabelas, abas, listas). A ilustração pode ser trocada via slot `#illustration`.',
      },
    },
  },
}

/** Empty state sem ação */
export const EstadoVazioSemAcao = {
  name: 'Estado vazio — sem botão',
  render: () => ({
    components: { SislocDataTable, SislocEmptyState },
    setup() {
      return { COLUMNS }
    },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <SislocDataTable :columns="COLUMNS" :rows="[]">
          <template #empty>
            <SislocEmptyState
              title="Nenhum resultado encontrado"
              subtitle="Tente ajustar os filtros da busca"
            />
          </template>
        </SislocDataTable>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Sem `action-label` o botão não é renderizado — usar quando não há ação de criação disponível (ex: resultado de busca vazio).',
      },
    },
  },
}

/** Sort — demonstração isolada */
export const ComOrdenacao = {
  name: 'Com ordenação',
  render: () => ({
    components: { SislocDataTable },
    setup() {
      const rows = ref(LEADS_DATA)
      function onSort(e) {
        console.log('sort event:', e)
      }
      return { rows, COLUMNS, onSort, statusChipHtml }
    },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <p style="font-size:12px; color:#79767A; margin:0 0 12px; font-family:Roboto,sans-serif;">
          Clique nos headers "Status", "Nome", "Empresa do lead", "Criado em" ou "Temperatura" — 3 estados: não ordenado → crescente → decrescente.
        </p>
        <SislocDataTable :columns="COLUMNS" :rows="rows" @sort="onSort">
          <template #cell-status="{ value }">
            <span v-html="statusChipHtml(value)" />
          </template>
        </SislocDataTable>
      </div>
    `,
  }),
}
