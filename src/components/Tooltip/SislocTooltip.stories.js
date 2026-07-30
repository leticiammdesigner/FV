// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocTooltip.stories.js
//
// Baseado no node 40008004:1416 (v-tooltip)
//
// Specs do Figma:
//   Background: rgba(97, 97, 97, 0.9)  → #616161 a 90%
//   Border-radius: 4px
//   Padding: 5px 16px
//   Texto: 14px Roboto Regular · branco · lh 22px · ls 0.25%
//
// Mesmo padrão visual do v-tooltip do Vuetify.
// ============================================

import SislocTooltip from './SislocTooltip.vue'

export default {
  title: 'Componentes/Tooltip',
  component: SislocTooltip,
  parameters: {
    docs: {
      description: {
        component: `
**Tooltip** — texto de apoio exibido no hover ou foco.

**Especificações (Figma node 40008004:1416):**
- Background: \`rgba(97, 97, 97, 0.9)\`
- Border-radius: \`4px\` · Padding: \`5px 16px\`
- Texto: 14px Roboto Regular · \`#FFFFFF\` · lh 22px

**Props:**
- \`text\` — conteúdo do tooltip (vazio não renderiza)
- \`location\` — \`'top'\` | \`'bottom'\` (default) | \`'left'\` | \`'right'\`
- \`openDelay\` — atraso em ms antes de exibir (default: 200)

**Acessibilidade:** dispara no \`hover\` e no \`focus\`, com \`role="tooltip"\`.
        `,
      },
    },
  },
  argTypes: {
    text:      { control: 'text' },
    location:  { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    openDelay: { control: 'number' },
  },
}

export const Default = {
  name: 'Default',
  args: { text: 'Criado em 20/06/24', location: 'bottom' },
  render: (args) => ({
    components: { SislocTooltip },
    setup() { return { args } },
    template: `
      <div style="padding: 80px; font-family: Roboto, sans-serif;">
        <SislocTooltip v-bind="args">
          <button style="
            padding: 8px 16px; border: 1px solid #79767A; border-radius: 8px;
            background: #fff; font-family: Roboto, sans-serif; font-size: 12px; cursor: pointer;
          ">Passe o mouse aqui</button>
        </SislocTooltip>
      </div>
    `,
  }),
}

export const Posicoes = {
  name: 'Posições',
  render: () => ({
    components: { SislocTooltip },
    template: `
      <div style="
        padding: 100px; font-family: Roboto, sans-serif;
        display: flex; gap: 60px; align-items: center; justify-content: center;
      ">
        <SislocTooltip text="Tooltip acima" location="top">
          <button style="padding:8px 16px;border:1px solid #79767A;border-radius:8px;background:#fff;font-size:12px;cursor:pointer;">Top</button>
        </SislocTooltip>

        <SislocTooltip text="Tooltip abaixo" location="bottom">
          <button style="padding:8px 16px;border:1px solid #79767A;border-radius:8px;background:#fff;font-size:12px;cursor:pointer;">Bottom</button>
        </SislocTooltip>

        <SislocTooltip text="Tooltip à esquerda" location="left">
          <button style="padding:8px 16px;border:1px solid #79767A;border-radius:8px;background:#fff;font-size:12px;cursor:pointer;">Left</button>
        </SislocTooltip>

        <SislocTooltip text="Tooltip à direita" location="right">
          <button style="padding:8px 16px;border:1px solid #79767A;border-radius:8px;background:#fff;font-size:12px;cursor:pointer;">Right</button>
        </SislocTooltip>
      </div>
    `,
  }),
}

export const EmIcones = {
  name: 'Em ícones',
  render: () => ({
    components: { SislocTooltip },
    template: `
      <div style="padding: 80px; font-family: Roboto, sans-serif; display: flex; gap: 24px; align-items: center;">
        <SislocTooltip text="Criado em 20/06/24">
          <span style="display:inline-flex;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" fill="#79767A"/>
            </svg>
          </span>
        </SislocTooltip>

        <SislocTooltip text="Vicente James">
          <span style="
            display:inline-flex;align-items:center;justify-content:center;
            width:24px;height:24px;border-radius:50%;background:#304FFE;
            color:#fff;font-size:10px;font-family:Roboto,sans-serif;
          ">VJ</span>
        </SislocTooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Uso real no Card Kanban — tooltip no ícone de calendário e no avatar do responsável.',
      },
    },
  },
}
