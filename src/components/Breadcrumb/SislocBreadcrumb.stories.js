// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocBreadcrumb.stories.js
//
// A implementação vive em SislocBreadcrumb.vue.
// ============================================

import SislocBreadcrumb from './SislocBreadcrumb.vue'

export default {
  title: 'Componentes/Breadcrumb',
  component: SislocBreadcrumb,
  parameters: {
    docs: {
      description: {
        component: `
**Breadcrumb** — navegação hierárquica discreta no header de todas as telas.

**Especificações (Figma node 40008108-51130):**
- Altura: \`32px\` · Gap entre chevron e itens: \`24px\`
- Divider: \`/\` com padding \`0 12px\`
- Tipografia: \`12px regular #79767A\` — sem cor ativa, sem destaque
- Hover: apenas \`text-decoration: underline\` — mesma cor
- \`chevron_left\` à esquerda para voltar à página anterior

**Uso no Força de Vendas:** header de todas as telas (Home / Leads / Ver Lead)
        `,
      },
    },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — 3 níveis como no Figma */
export const Default = {
  name: 'Default',
  render: (args) => ({
    components: { SislocBreadcrumb },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <SislocBreadcrumb v-bind="args" />
      </div>
    `,
  }),
  args: {
    items: [
      { label: 'Home' },
      { label: 'Leads' },
      { label: 'Ver leads' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Estrutura padrão: chevron_left + Home / Leads / página atual. Último item sem hover.',
      },
    },
  },
}

/** 2 níveis */
export const DoisNiveis = {
  name: '2 Níveis',
  render: (args) => ({
    components: { SislocBreadcrumb },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <SislocBreadcrumb v-bind="args" />
      </div>
    `,
  }),
  args: {
    items: [
      { label: 'Leads' },
      { label: 'Detalhe do Lead' },
    ],
  },
}

/** 4 níveis */
export const QuatroNiveis = {
  name: '4 Níveis',
  render: (args) => ({
    components: { SislocBreadcrumb },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <SislocBreadcrumb v-bind="args" />
      </div>
    `,
  }),
  args: {
    items: [
      { label: 'Home' },
      { label: 'Leads' },
      { label: 'Detalhe do Lead' },
      { label: 'Converter Lead' },
    ],
  },
}

/** Hover — demonstra o underline */
export const Hover = {
  name: 'Hover (underline)',
  render: (args) => ({
    components: { SislocBreadcrumb },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <p style="font-size: 11px; color: #79767A; margin: 0 0 12px;">Passe o mouse nos itens para ver o underline</p>
        <SislocBreadcrumb v-bind="args" />
      </div>
    `,
  }),
  args: {
    items: [
      { label: 'Home' },
      { label: 'Leads' },
      { label: 'Ver leads' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover aplica apenas `text-decoration: underline` — sem mudança de cor.',
      },
    },
  },
}

/** Todos os estados */
export const TodosEstados = {
  name: 'Todos os estados',
  render: () => ({
    components: { SislocBreadcrumb },
    setup() {
      const dois = [
        { label: 'Leads' },
        { label: 'Detalhe do Lead' },
      ]
      const tres = [
        { label: 'Home' },
        { label: 'Leads' },
        { label: 'Ver leads' },
      ]
      const quatro = [
        { label: 'Home' },
        { label: 'Leads' },
        { label: 'Detalhe do Lead' },
        { label: 'Converter Lead' },
      ]
      return { dois, tres, quatro }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">2 níveis</p>
          <SislocBreadcrumb :items="dois" />
        </div>

        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">3 níveis (padrão)</p>
          <SislocBreadcrumb :items="tres" />
        </div>

        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">4 níveis</p>
          <SislocBreadcrumb :items="quatro" />
        </div>
      </div>
    `,
  }),
}
