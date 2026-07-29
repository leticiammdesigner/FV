// ============================================
// SISLOC DS — FORÇA DE VENDAS
// Tabs.stories.js v3
//
// Baseado nos nodes:
//   40008105-1333 — Tab Item specs
//   40008105-1716 — Exemplo com conteúdo (Detalhes)
//   40008107-2074 — Exemplo estado vazio
//
// Tab ativa:   border-bottom 2px #EB7A25 · texto 12px bold #EC6A00
// Tab inativa: border-bottom 1px #79767A · texto 12px regular #79767A
// Conteúdo com dados: label 12px bold preto + valor 12px regular #575757
// Estado vazio: ilustração + título 20px + subtítulo 14px + botão outlined
// ============================================

import { ref } from 'vue'
import { VTabs, VTab, VTabsWindow, VTabsWindowItem } from 'vuetify/components'
import { tokens } from '../tokens/tokens.js'

const injectTabsStyles = () => {
  const id = 'sisloc-tabs-styles-v3'
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

    /* Estado vazio */
    .sisloc-empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 48px 16px;
      text-align: center;
    }

    .sisloc-empty-state__title {
      font-family: Roboto, sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: 0.05px;
      color: #1F1F1F;
    }

    .sisloc-empty-state__subtitle {
      font-family: Roboto, sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0.014px;
      color: #666;
    }

    .sisloc-empty-state__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      height: 40px;
      padding: 8px 16px;
      border: 2px solid #EC6A00;
      border-radius: 8px;
      background: transparent;
      cursor: pointer;
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.048px;
      color: #EC6A00;
      margin-top: 8px;
    }
  `
  document.head.appendChild(style)
}

// Ícone add para o botão do estado vazio
const IconAdd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#EC6A00"/>
</svg>`

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

/** Com Conteúdo — aba Detalhes com grid de dados (node 40008105-1716) */
export const ComConteudo = {
  name: 'Com Conteúdo',
  render: () => ({
    components: { VTabs, VTab, VTabsWindow, VTabsWindowItem },
    setup() {
      injectTabsStyles()
      const tab = ref('detalhes')
      return { tab, IconAdd }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; width: 100%;">
        <v-tabs v-model="tab" class="sisloc-tabs">
          <v-tab value="detalhes">Detalhes</v-tab>
          <v-tab value="tarefas">Tarefas (7)</v-tab>
          <v-tab value="anexos">Anexos (0)</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">

          <!-- Detalhes — grid de dados conforme Figma node 40008105-1716 -->
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

          <!-- Tarefas — estado com itens -->
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

          <!-- Anexos — estado vazio (node 40008107-2074) -->
          <v-tabs-window-item value="anexos">
            <div class="sisloc-tab-content">
              <div class="sisloc-empty-state">
                <svg width="140" height="149" viewBox="0 0 140 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="20" width="120" height="110" rx="8" fill="#F5F5F5" stroke="#E0E0E0" stroke-width="2"/>
                  <rect x="30" y="45" width="80" height="8" rx="4" fill="#E0E0E0"/>
                  <rect x="30" y="63" width="60" height="8" rx="4" fill="#E0E0E0"/>
                  <rect x="30" y="81" width="70" height="8" rx="4" fill="#E0E0E0"/>
                  <circle cx="70" cy="130" r="12" fill="#BDBDBD"/>
                  <path d="M70 124V136M64 130H76" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <p class="sisloc-empty-state__title">Nenhum registro cadastrado</p>
                <p class="sisloc-empty-state__subtitle">Cadastre um registro para visualizar nesta página</p>
                <button class="sisloc-empty-state__btn">
                  <span v-html="IconAdd" style="display:inline-flex;align-items:center;" />
                  Adicionar Anexo
                </button>
              </div>
            </div>
          </v-tabs-window-item>

        </v-tabs-window>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Aba "Detalhes" com grid de dados (label bold preto + valor regular #575757). Aba "Anexos" com estado vazio — ilustração + título + botão outlined laranja.',
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
      return { tab1, tab2, tab3, tokens }
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