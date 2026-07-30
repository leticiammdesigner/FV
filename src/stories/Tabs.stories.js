// ============================================
// SISLOC DS — FORÇA DE VENDAS
// Tabs.stories.js v4
//
// Mudança em relação à v3:
//   O estado vazio hardcoded foi substituído pelo
//   componente reutilizável SislocEmptyState.
//   Nada mais foi alterado.
//
// Tab ativa:   border-bottom 2px #EB7A25 · texto 12px bold #EC6A00
// Tab inativa: border-bottom 1px #79767A · texto 12px regular #79767A
// ============================================

import { ref } from 'vue'
import { VTabs, VTab, VTabsWindow, VTabsWindowItem } from 'vuetify/components'
import { tokens } from '../tokens/tokens.js'
import SislocEmptyState from '../components/EmptyState/SislocEmptyState.vue'

const injectTabsStyles = () => {
  const id = 'sisloc-tabs-styles-v4'
  if (document.getElementById(id)) return
  const style = document.createElement('style')
  style.id = id
  style.textContent = `
    .sisloc-tabs.v-tabs {
      height: 36px !important;
      min-height: 36px !important;
      align-items: flex-start !important;
    }

    .sisloc-tabs .v-tab {
      flex: 1 !important;
      flex-shrink: 0 !important;
      height: 36px !important;
      min-height: 36px !important;
      min-width: 0 !important;
      padding: 8px 12px !important;
      justify-content: center !important;
      align-items: center !important;
      gap: 10px !important;
      font-family: Roboto, sans-serif !important;
      font-size: 12px !important;
      font-weight: 400 !important;
      line-height: 20px !important;
      letter-spacing: 0.048px !important;
      text-transform: none !important;
      text-align: center !important;
      color: #79767A !important;
      border-bottom: 1px solid #79767A !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      opacity: 1 !important;
    }

    .sisloc-tabs .v-tab--selected {
      font-weight: 700 !important;
      color: #EC6A00 !important;
      border-bottom: 2px solid #EB7A25 !important;
    }

    .sisloc-tabs .v-tabs-slider-wrapper,
    .sisloc-tabs .v-slide-group__prev,
    .sisloc-tabs .v-slide-group__next {
      display: none !important;
    }

    .sisloc-tabs .v-tab:hover:not(.v-tab--selected) {
      color: #323033 !important;
      background: rgba(0,0,0,0.04) !important;
    }

    .sisloc-tabs .v-tab .v-ripple__container {
      display: none !important;
    }

    /* Conteúdo de dados — grid de campos label + valor */
    .sisloc-tab-content {
      padding: 16px;
      background: #fff;
      border: 1px solid #D6D6D6;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }

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

export default {
  title: 'Componentes/Tabs',
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

**Classe obrigatória:** \`class="sisloc-tabs"\`
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
    components: { VTabs, VTab },
    setup() {
      injectTabsStyles()
      const tab = ref('detalhes')
      return { tab }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; width: 100%;">
        <v-tabs v-model="tab" class="sisloc-tabs">
          <v-tab value="detalhes">Detalhes</v-tab>
          <v-tab value="tarefas">Tarefas (7)</v-tab>
          <v-tab value="contatos">Contatos (5)</v-tab>
          <v-tab value="observacoes">Observações (3)</v-tab>
          <v-tab value="propostas">Propostas (7)</v-tab>
          <v-tab value="anexos">Anexos (0)</v-tab>
        </v-tabs>
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
    components: { VTabs, VTab, VTabsWindow, VTabsWindowItem, SislocEmptyState },
    setup() {
      injectTabsStyles()
      const tab = ref('detalhes')
      function adicionarAnexo() {
        alert('Abrir upload de anexo')
      }
      return { tab, adicionarAnexo }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; width: 100%;">
        <v-tabs v-model="tab" class="sisloc-tabs">
          <v-tab value="detalhes">Detalhes</v-tab>
          <v-tab value="tarefas">Tarefas (7)</v-tab>
          <v-tab value="anexos">Anexos (0)</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">

          <!-- Detalhes — grid de dados -->
          <v-tabs-window-item value="detalhes">
            <div class="sisloc-tab-content">
              <div class="sisloc-data-grid">
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Nome</span>
                  <span class="sisloc-data-value">Fernando Carvalhosa</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Origem</span>
                  <span class="sisloc-data-value">Feiras e Eventos</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Cargo</span>
                  <span class="sisloc-data-value">Engenheiro de Obras</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Empresa do lead</span>
                  <span class="sisloc-data-value">Construtora Alpha</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Setor</span>
                  <span class="sisloc-data-value">Construção Civil</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Número de funcionários</span>
                  <span class="sisloc-data-value">1000</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Site</span>
                  <span class="sisloc-data-value">www.construtoraabc.com.br</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">CEP</span>
                  <span class="sisloc-data-value">1500-5620</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Logradouro</span>
                  <span class="sisloc-data-value">Rua dos Construtores</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Número</span>
                  <span class="sisloc-data-value">157</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Complemento</span>
                  <span class="sisloc-data-value">301</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Bairro</span>
                  <span class="sisloc-data-value">Parque Industrial</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Cidade/UF</span>
                  <span class="sisloc-data-value">São Paulo/SP</span>
                </div>
                <div class="sisloc-data-cell">
                  <span class="sisloc-data-label">Referência</span>
                  <span class="sisloc-data-value">Próximo ao terminal de cargas</span>
                </div>
                <div class="sisloc-data-cell" style="width:50%;">
                  <span class="sisloc-data-label">Descrição</span>
                  <span class="sisloc-data-value">Empresa interessada na locação de equipamentos pesados para uma obra de médio porte em Contagem/MG, com previsão de início em julho.</span>
                </div>
              </div>
            </div>
          </v-tabs-window-item>

          <!-- Tarefas — com itens -->
          <v-tabs-window-item value="tarefas">
            <div class="sisloc-tab-content">
              <div class="sisloc-data-grid">
                <div class="sisloc-data-cell" style="width:100%;">
                  <span class="sisloc-data-label">Tarefas pendentes</span>
                  <span class="sisloc-data-value">7 atividades registradas para este lead.</span>
                </div>
              </div>
            </div>
          </v-tabs-window-item>

          <!-- Anexos — estado vazio usando SislocEmptyState -->
          <v-tabs-window-item value="anexos">
            <div class="sisloc-tab-content">
              <SislocEmptyState
                title="Nenhum registro cadastrado"
                subtitle="Cadastre um registro para visualizar nesta página"
                action-label="Adicionar Anexo"
                @action="adicionarAnexo"
              />
            </div>
          </v-tabs-window-item>

        </v-tabs-window>
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
    components: { VTabs, VTab },
    setup() {
      injectTabsStyles()
      const tab1 = ref('detalhes')
      const tab2 = ref('tarefas')
      const tab3 = ref('anexos')
      return { tab1, tab2, tab3 }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 32px; width: 100%;">
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Detalhes ativo (sem contador)</p>
          <v-tabs v-model="tab1" class="sisloc-tabs">
            <v-tab value="detalhes">Detalhes</v-tab>
            <v-tab value="tarefas">Tarefas (7)</v-tab>
            <v-tab value="observacoes">Observações (3)</v-tab>
            <v-tab value="anexos">Anexos (0)</v-tab>
          </v-tabs>
        </div>
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Tab com contador ativa</p>
          <v-tabs v-model="tab2" class="sisloc-tabs">
            <v-tab value="detalhes">Detalhes</v-tab>
            <v-tab value="tarefas">Tarefas (7)</v-tab>
            <v-tab value="observacoes">Observações (3)</v-tab>
            <v-tab value="anexos">Anexos (0)</v-tab>
          </v-tabs>
        </div>
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Tab zerada ativa</p>
          <v-tabs v-model="tab3" class="sisloc-tabs">
            <v-tab value="detalhes">Detalhes</v-tab>
            <v-tab value="tarefas">Tarefas (7)</v-tab>
            <v-tab value="observacoes">Observações (3)</v-tab>
            <v-tab value="anexos">Anexos (0)</v-tab>
          </v-tabs>
        </div>
      </div>
    `,
  }),
}