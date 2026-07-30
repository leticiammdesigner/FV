// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocTabs.stories.js
//
// A implementação da barra de abas vive em SislocTabs.vue.
// O que permanece aqui é conteúdo de demonstração: o grid de dados
// do lead. Os estilos .sisloc-data-* continuam injetados porque
// pertencem a esse conteúdo, não ao componente.
// ============================================

import { ref } from 'vue'
import SislocTabs from './SislocTabs.vue'
import SislocEmptyState from '../EmptyState/SislocEmptyState.vue'

// Estilos do conteúdo de demonstração — não fazem parte do componente
const injectConteudoStyles = () => {
  const id = 'sisloc-tabs-conteudo-demo'
  if (document.getElementById(id)) return
  const style = document.createElement('style')
  style.id = id
  style.textContent = `
    .sisloc-data-grid {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    .sisloc-data-cell {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 8px;
      width: 25%;
      min-height: 80px;
    }

    .sisloc-data-label {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0.048px;
      color: #000;
    }

    .sisloc-data-value {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.048px;
      color: #575757;
    }
  `
  document.head.appendChild(style)
}

// Conjuntos de abas usados pelas stories
const ABAS_COMPLETAS = [
  { value: 'detalhes',    label: 'Detalhes' },
  { value: 'tarefas',     label: 'Tarefas (7)' },
  { value: 'contatos',    label: 'Contatos (5)' },
  { value: 'observacoes', label: 'Observações (3)' },
  { value: 'propostas',   label: 'Propostas (7)' },
  { value: 'anexos',      label: 'Anexos (0)' },
]

const ABAS_CONTEUDO = [
  { value: 'detalhes', label: 'Detalhes' },
  { value: 'tarefas',  label: 'Tarefas (7)' },
  { value: 'anexos',   label: 'Anexos (0)' },
]

const ABAS_ESTADOS = [
  { value: 'detalhes',    label: 'Detalhes' },
  { value: 'tarefas',     label: 'Tarefas (7)' },
  { value: 'observacoes', label: 'Observações (3)' },
  { value: 'anexos',      label: 'Anexos (0)' },
]

// Campos do grid da aba Detalhes
const CAMPOS_DETALHES = [
  { label: 'Nome',                   valor: 'Fernando Carvalhosa' },
  { label: 'Origem',                 valor: 'Feiras e Eventos' },
  { label: 'Cargo',                  valor: 'Engenheiro de Obras' },
  { label: 'Empresa do lead',        valor: 'Construtora Alpha' },
  { label: 'Setor',                  valor: 'Construção Civil' },
  { label: 'Número de funcionários', valor: '1000' },
  { label: 'Site',                   valor: 'www.construtoraabc.com.br' },
  { label: 'CEP',                    valor: '1500-5620' },
  { label: 'Logradouro',             valor: 'Rua dos Construtores' },
  { label: 'Número',                 valor: '157' },
  { label: 'Complemento',            valor: '301' },
  { label: 'Bairro',                 valor: 'Parque Industrial' },
  { label: 'Cidade/UF',              valor: 'São Paulo/SP' },
  { label: 'Referência',             valor: 'Próximo ao terminal de cargas' },
  {
    label: 'Descrição',
    valor: 'Empresa interessada na locação de equipamentos pesados para uma obra de médio porte em Contagem/MG, com previsão de início em julho.',
    largura: '50%',
  },
]

export default {
  title: 'Componentes/Tabs',
  component: SislocTabs,
  parameters: {
    docs: {
      description: {
        component: `
**Tabs** — \`v-tabs\` + \`v-tab\` do Vuetify 3.

**Especificações:**
- Altura: \`36px\` · Padding: \`8px 12px\` · Gap: \`10px\`
- Active: borda inferior \`2px #EB7A25\` · texto \`12px bold #EC6A00\`
- Default: borda inferior \`1px #79767A\` · texto \`12px regular #79767A\`
- Tabs com \`flex: 1\` — largura igualmente dividida

**Tabs com contador:** \`"Label (n)"\` — exceto "Detalhes". Exibe \`(0)\` quando vazio.

**Estado vazio:** usa o componente \`SislocEmptyState\` — mesmo padrão da DataTable.

**Componente:** \`SislocTabs.vue\` — abas via \`items\`, conteúdo via slot \`panel\`.
        `,
      },
    },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — com contadores (padrão real do produto) */
export const Default = {
  name: 'Default (com contadores)',
  render: () => ({
    components: { SislocTabs },
    setup() {
      const tab = ref('detalhes')
      return { tab, itens: ABAS_COMPLETAS }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; width: 100%;">
        <SislocTabs v-model="tab" :items="itens" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '"Detalhes" não tem contador. Demais tabs exibem `(n)` — incluindo `(0)` quando vazio.',
      },
    },
  },
}

/** Com Conteúdo — aba Detalhes com grid de dados + aba Anexos com estado vazio */
export const ComConteudo = {
  name: 'Com Conteúdo',
  render: () => ({
    components: { SislocTabs, SislocEmptyState },
    setup() {
      injectConteudoStyles()
      const tab = ref('detalhes')
      function adicionarAnexo() {
        alert('Abrir upload de anexo')
      }
      return { tab, itens: ABAS_CONTEUDO, campos: CAMPOS_DETALHES, adicionarAnexo }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; width: 100%;">
        <SislocTabs v-model="tab" :items="itens">
          <template #panel="{ item }">

            <!-- Detalhes — grid de dados -->
            <div v-if="item.value === 'detalhes'" class="sisloc-data-grid">
              <div
                v-for="campo in campos"
                :key="campo.label"
                class="sisloc-data-cell"
                :style="campo.largura ? { width: campo.largura } : null"
              >
                <span class="sisloc-data-label">{{ campo.label }}</span>
                <span class="sisloc-data-value">{{ campo.valor }}</span>
              </div>
            </div>

            <!-- Tarefas — com itens -->
            <div v-else-if="item.value === 'tarefas'" class="sisloc-data-grid">
              <div class="sisloc-data-cell" style="width:100%;">
                <span class="sisloc-data-label">Tarefas pendentes</span>
                <span class="sisloc-data-value">7 atividades registradas para este lead.</span>
              </div>
            </div>

            <!-- Anexos — estado vazio usando SislocEmptyState -->
            <SislocEmptyState
              v-else-if="item.value === 'anexos'"
              title="Nenhum registro cadastrado"
              subtitle="Cadastre um registro para visualizar nesta página"
              action-label="Adicionar Anexo"
              @action="adicionarAnexo"
            />

          </template>
        </SislocTabs>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Aba "Detalhes" com grid de dados. Aba "Anexos" usa o componente `SislocEmptyState` — mesmo padrão da DataTable.',
      },
    },
  },
}

/** Todos os estados */
export const TodosEstados = {
  name: 'Todos os estados',
  render: () => ({
    components: { SislocTabs },
    setup() {
      const tab1 = ref('detalhes')
      const tab2 = ref('tarefas')
      const tab3 = ref('anexos')
      return { tab1, tab2, tab3, itens: ABAS_ESTADOS }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 32px; width: 100%;">
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Detalhes ativo (sem contador)</p>
          <SislocTabs v-model="tab1" :items="itens" />
        </div>
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Tab com contador ativa</p>
          <SislocTabs v-model="tab2" :items="itens" />
        </div>
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Tab zerada ativa</p>
          <SislocTabs v-model="tab3" :items="itens" />
        </div>
      </div>
    `,
  }),
}
