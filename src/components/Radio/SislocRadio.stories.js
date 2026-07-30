// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocRadio.stories.js
//
// A implementação vive em SislocRadio.vue, que encapsula
// VRadioGroup + VRadio. As opções chegam pela prop `items`.
// ============================================

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
