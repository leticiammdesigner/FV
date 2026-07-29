// ============================================
// SISLOC DS — FORÇA DE VENDAS
// TEMPLATE DE STORY — copie este arquivo para
// criar novos componentes.
//
// Checklist antes de publicar:
//   [ ] Sem hex fixo — apenas tokens.*
//   [ ] Classe .sisloc-field (ou equivalente) aplicada
//   [ ] Story "Focus" documentada
//   [ ] Story "Disabled" documentada
//   [ ] Story "Erro" documentada
//   [ ] parameters.a11y preenchido
//   [ ] Nenhum injectStyles() — usar vuetify-overrides.css
// ============================================

import { tokens } from '../tokens/tokens.js'

// ─── Metadados do Storybook ───────────────────────────────────────────────────

export default {
  title: 'Componentes/NomeDoComponente',

  // Parâmetros globais da story
  parameters: {
    docs: {
      description: {
        component: `
**NomeDoComponente** — descrição de uma linha.

**Tokens usados:** \`tokens.components.nomeDoComponente\`

**Classe obrigatória:** \`class="sisloc-field"\` (ou variante do componente)

**Estados:** Default · Focus · Preenchido · Disabled · Erro
        `,
      },
    },

    // Acessibilidade — configura o addon @storybook/addon-a11y
    a11y: {
      config: {
        rules: [
          // Garante contraste mínimo 4.5:1
          { id: 'color-contrast', enabled: true },
          // Garante que label está associado ao campo
          { id: 'label', enabled: true },
          // Garante focus ring visível
          { id: 'focus-order-semantics', enabled: true },
        ],
      },
    },
  },
}

// ─── Stories ─────────────────────────────────────────────────────────────────
// Ordem padrão: Default → Focus → Preenchido → Erro → Disabled → variantes

/** Estado default — vazio, sem interação */
export const Default = {
  name: 'Default',
  render: () => ({
    setup() {
      // Sem mais injectStyles() aqui.
      // Os estilos vêm de vuetify-overrides.css importado no preview.js
      const { ref } = window.Vue
      const value = ref(null)
      return { value, tokens }
    },
    template: `
      <div style="padding: 24px; font-family: ${tokens.typography.fontFamily};">
        <!--
          DICA: use sempre a classe sisloc-field (v-text-field, v-select, v-textarea)
          ou a classe específica do componente definida em vuetify-overrides.css
        -->
        <!-- <v-text-field
          v-model="value"
          label="Label"
          variant="outlined"
          density="comfortable"
          class="sisloc-field"
          style="width: 407px;"
        /> -->
      </div>
    `,
  }),
}

/** Focus — mostra o estado de foco com borda laranja */
export const Focus = {
  name: 'Focus',
  render: () => ({
    setup() {
      const { ref } = window.Vue
      const value = ref(null)
      return { value, tokens }
    },
    template: `
      <div style="padding: 24px; font-family: ${tokens.typography.fontFamily};">
        <!-- Adicionar autofocus para demonstrar o estado -->
        <!-- <v-text-field
          v-model="value"
          label="Label"
          variant="outlined"
          density="comfortable"
          class="sisloc-field"
          autofocus
          style="width: 407px;"
        /> -->
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Borda laranja `tokens.border.focus` (#EC6A00) e label com a mesma cor. Focus ring visível para acessibilidade.',
      },
    },
  },
}

/** Preenchido — com valor */
export const Preenchido = {
  name: 'Preenchido',
  render: () => ({
    setup() {
      const { ref } = window.Vue
      const value = ref('Valor de exemplo')
      return { value, tokens }
    },
    template: `
      <div style="padding: 24px; font-family: ${tokens.typography.fontFamily};">
        <!-- <v-text-field
          v-model="value"
          label="Label"
          variant="outlined"
          density="comfortable"
          class="sisloc-field"
          style="width: 407px;"
        /> -->
      </div>
    `,
  }),
}

/** Erro — com mensagem de validação */
export const ComErro = {
  name: 'Com Erro',
  render: () => ({
    setup() {
      const { ref } = window.Vue
      const value = ref(null)
      return { value, tokens }
    },
    template: `
      <div style="padding: 24px; font-family: ${tokens.typography.fontFamily};">
        <!-- <v-text-field
          v-model="value"
          label="Label *"
          variant="outlined"
          density="comfortable"
          class="sisloc-field"
          :error-messages="['Mensagem de erro específica.']"
          style="width: 407px;"
        /> -->
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Borda vermelha `tokens.border.error` (#EA3A3D). Mensagem abaixo do campo, nunca no topo.',
      },
    },
  },
}

/** Disabled — campo desabilitado */
export const Disabled = {
  name: 'Disabled',
  render: () => ({
    setup() {
      const { ref } = window.Vue
      const value = ref('Valor desabilitado')
      return { value, tokens }
    },
    template: `
      <div style="padding: 24px; font-family: ${tokens.typography.fontFamily};">
        <!-- <v-text-field
          v-model="value"
          label="Label"
          variant="outlined"
          density="comfortable"
          class="sisloc-field"
          disabled
          style="width: 407px;"
        /> -->
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Background `tokens.disabled.background`, texto `tokens.disabled.text`. Cursor not-allowed.',
      },
    },
    a11y: {
      config: {
        rules: [
          // Desabilitados têm contraste menor — exceção documentada
          { id: 'color-contrast', enabled: false },
        ],
      },
    },
  },
}

/** Todos os estados lado a lado — para visão geral no DS */
export const TodosEstados = {
  name: 'Todos os estados',
  render: () => ({
    setup() {
      const { ref } = window.Vue
      return { tokens }
    },
    template: `
      <div style="
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        align-items: flex-start;
        font-family: ${tokens.typography.fontFamily};
      ">
        <!-- Renderizar cada estado com label descritivo abaixo -->
      </div>
    `,
  }),
}