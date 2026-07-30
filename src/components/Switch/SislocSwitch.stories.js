// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocSwitch.stories.js
//
// A implementação vive em SislocSwitch.vue.
// A cor do DS é interna ao componente — por isso `color` saiu dos args.
// ============================================

import SislocSwitch from './SislocSwitch.vue'

export default {
  title: 'Formulário/Switch',
  component: SislocSwitch,
  tags: ['autodocs'],
  argTypes: {
    label:      { control: 'text' },
    modelValue: { control: 'boolean' },
    disabled:   { control: 'boolean' },
  },
}

// OFF
export const Off = {
  name: '⚫ Off',
  args: {
    label: 'Label',
    modelValue: false,
    disabled: false,
  },
}

// ON
export const On = {
  name: '🟠 On',
  args: {
    label: 'Label',
    modelValue: true,
    disabled: false,
  },
}

// DISABLED OFF
export const DisabledOff = {
  name: '🚫 Disabled Off',
  args: {
    label: 'Label',
    modelValue: false,
    disabled: true,
  },
}

// DISABLED ON
export const DisabledOn = {
  name: '🚫 Disabled On',
  args: {
    label: 'Label',
    modelValue: true,
    disabled: true,
  },
}
