// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocRadio.stories.js
//
// A implementação vive em SislocRadio.vue, que encapsula
// VRadioGroup + VRadio. As opções chegam pela prop `items`.
// ============================================

import { ref, watch } from 'vue'
import SislocRadio from './SislocRadio.vue'

// As mesmas duas opções que a story original renderizava fixas
const OPCOES = [
  { label: 'Opção 1', value: '1' },
  { label: 'Opção 2', value: '2' },
]

export default {
  title: 'Formulário/Radio',
  component: SislocRadio,
  tags: ['autodocs'],
  /*
   * Sem render próprio, o Storybook liga os args como props sem
   * escutar `update:modelValue` — não dava para trocar de opção no
   * Canvas. Ref local para a interação, watch para o painel Controls.
   */
  render: (args) => ({
    components: { SislocRadio },
    setup() {
      const value = ref(args.modelValue)
      watch(() => args.modelValue, (novo) => { value.value = novo })
      return { args, value }
    },
    template: `
      <SislocRadio
        v-model="value"
        :items="args.items"
        :label="args.label"
        :disabled="args.disabled"
      />
    `,
  }),
  argTypes: {
    modelValue: { control: 'text' },
    disabled:   { control: 'boolean' },
  },
  args: {
    items: OPCOES,
  },
}

// OFF — nenhum selecionado
export const Off = {
  name: '⚪ Off',
  args: {
    modelValue: null,
    disabled: false,
  },
}

// ON — selecionado
export const On = {
  name: '🟠 On',
  args: {
    modelValue: '1',
    disabled: false,
  },
}

// DISABLED
export const Disabled = {
  name: '🚫 Disabled',
  args: {
    modelValue: '1',
    disabled: true,
  },
}
