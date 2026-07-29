// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocToggle.stories.js
//
// Documenta os dois componentes de toggle:
//
//   SislocViewToggle      — ícones, sem stroke, 40px
//                           uso: kanban/lista na toolbar
//
//   SislocSegmentedControl — texto, com stroke laranja, 50px
//                            uso: PF/PJ/EXT em formulários
// ============================================

import { ref } from 'vue'
import SislocViewToggle from './SislocViewToggle.vue'
import SislocSegmentedControl from './SislocSegmentedControl.vue'

// ─── Ícones SVG para o ViewToggle ────────────────────────────────────────────

const IconLista = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;flex-shrink:0;">
  <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill="#79767A"/>
</svg>`

const IconKanban = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3H11V13H3V3ZM3 15H11V21H3V15ZM13 3H21V9H13V3ZM13 11H21V21H13V11Z" fill="#79767A"/>
</svg>`

// ─── Config ───────────────────────────────────────────────────────────────────

export default {
  title: 'Componentes/Toggle',
  parameters: {
    docs: {
      description: {
        component: `
Dois componentes de toggle com propósitos distintos:

**SislocViewToggle** — alterna visualização (lista/kanban)
- Tamanho: \`40×40px\` por botão · \`border-radius: 8px\`
- Sem stroke · Borda sutil \`#E6E1E6\` no container
- Ativo: fundo \`#EC6A00\` · Ícone branco
- Inativo: sem fundo · Ícone \`#79767A\`

**SislocSegmentedControl** — seleção de tipo em formulários (PF/PJ/EXT)
- Altura: \`50px\` · \`border-radius: 4px\`
- Com stroke \`#EC6A00\` em todos os botões
- Ativo: fundo \`#EC6A00\` · texto branco · \`font-weight 500\`
- Inativo: fundo branco · texto \`#EC6A00\` · \`font-weight 300\`
        `,
      },
    },
  },
}

// ─── SislocViewToggle ─────────────────────────────────────────────────────────

/** Lista ativa */
export const ViewToggleLista = {
  name: 'ViewToggle — Lista ativa',
  render: () => ({
    components: { SislocViewToggle },
    setup() {
      const view = ref('lista')
      const options = [
        { value: 'lista',  label: 'Visualização em lista',  icon: IconLista },
        { value: 'kanban', label: 'Visualização em kanban', icon: IconKanban },
      ]
      return { view, options }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 12px;">
        <SislocViewToggle v-model="view" :options="options" />
        <p style="font-size: 12px; color: #79767A; margin: 0;">
          View ativa: <strong>{{ view }}</strong>
        </p>
      </div>
    `,
  }),
}

/** Kanban ativo */
export const ViewToggleKanban = {
  name: 'ViewToggle — Kanban ativo',
  render: () => ({
    components: { SislocViewToggle },
    setup() {
      const view = ref('kanban')
      const options = [
        { value: 'lista',  label: 'Visualização em lista',  icon: IconLista },
        { value: 'kanban', label: 'Visualização em kanban', icon: IconKanban },
      ]
      return { view, options }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <SislocViewToggle v-model="view" :options="options" />
      </div>
    `,
  }),
}

/** ViewToggle interativo */
export const ViewToggleInterativo = {
  name: 'ViewToggle — Interativo',
  render: () => ({
    components: { SislocViewToggle },
    setup() {
      const view = ref('lista')
      const options = [
        { value: 'lista',  label: 'Lista',  icon: IconLista },
        { value: 'kanban', label: 'Kanban', icon: IconKanban },
      ]
      return { view, options }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 16px;">
        <div style="
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 16px; background: #fff;
          border: 1px solid #E6E1E6; border-radius: 8px; width: 600px;
        ">
          <span style="font-size: 14px; font-weight: 500; color: #1D1B20;">Leads</span>
          <SislocViewToggle v-model="view" :options="options" />
        </div>
        <p style="font-size: 12px; color: #79767A; margin: 0;">
          View ativa: <strong>{{ view }}</strong>
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Contexto real — ViewToggle na toolbar de Leads.',
      },
    },
  },
}

// ─── SislocSegmentedControl ───────────────────────────────────────────────────

/** 2 opções — Sim/Não */
export const SegmentedDuplo = {
  name: 'SegmentedControl — 2 opções (Sim/Não)',
  render: () => ({
    components: { SislocSegmentedControl },
    setup() {
      const value = ref('sim')
      const options = [
        { value: 'sim', label: 'Sim' },
        { value: 'nao', label: 'Não' },
      ]
      return { value, options }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 12px;">
        <SislocSegmentedControl v-model="value" :options="options" />
        <p style="font-size: 12px; color: #79767A; margin: 0;">
          Selecionado: <strong>{{ value }}</strong>
        </p>
      </div>
    `,
  }),
}

/** 3 opções — PF/PJ/EXT */
export const SegmentedTriplo = {
  name: 'SegmentedControl — 3 opções (PF/PJ/EXT)',
  render: () => ({
    components: { SislocSegmentedControl },
    setup() {
      const value = ref('pf')
      const options = [
        { value: 'pf',  label: 'Pessoa física (PF)' },
        { value: 'pj',  label: 'Pessoa jurídica (PJ)' },
        { value: 'ext', label: 'EXT (Exterior)' },
      ]
      return { value, options }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 12px;">
        <SislocSegmentedControl v-model="value" :options="options" />
        <p style="font-size: 12px; color: #79767A; margin: 0;">
          Selecionado: <strong>{{ value }}</strong>
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Toggle triplo — PF ativo no primeiro estado, PJ no segundo, EXT no terceiro.',
      },
    },
  },
}

/** Todos os estados do Segmented */
export const SegmentedTodosEstados = {
  name: 'SegmentedControl — Todos os estados',
  render: () => ({
    components: { SislocSegmentedControl },
    setup() {
      const v1 = ref('pf')
      const v2 = ref('pj')
      const v3 = ref('ext')
      const options = [
        { value: 'pf',  label: 'Pessoa física (PF)' },
        { value: 'pj',  label: 'Pessoa jurídica (PJ)' },
        { value: 'ext', label: 'EXT (Exterior)' },
      ]
      return { v1, v2, v3, options }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Toggle 1 — PF ativo</p>
          <SislocSegmentedControl v-model="v1" :options="options" />
        </div>
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Toggle 2 — PJ ativo</p>
          <SislocSegmentedControl v-model="v2" :options="options" />
        </div>
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Toggle 3 — EXT ativo</p>
          <SislocSegmentedControl v-model="v3" :options="options" />
        </div>
      </div>
    `,
  }),
}
