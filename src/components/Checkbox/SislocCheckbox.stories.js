// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocCheckbox.stories.js
//
// A implementação vive em SislocCheckbox.vue.
// A cor do DS é interna ao componente — por isso `color`
// e `fontFamily` saíram dos args.
// ============================================

import SislocCheckbox from './SislocCheckbox.vue'

export default {
  title: 'Formulário/Checkbox',
  component: SislocCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label:          { control: 'text' },
    hint:           { control: 'text' },
    persistentHint: { control: 'boolean' },
    disabled:       { control: 'boolean' },
    indeterminate:  { control: 'boolean' },
    modelValue:     { control: 'boolean' },
  },
}

// OFF — desmarcado
export const Off = {
  name: '⬜ Off',
  args: {
    label: 'Label',
    modelValue: false,
    disabled: false,
    indeterminate: false,
  },
}

// ON — marcado
export const On = {
  name: '✅ On',
  args: {
    label: 'Label',
    modelValue: true,
    disabled: false,
    indeterminate: false,
  },
}

// INDETERMINATE — estado parcial
export const Indeterminate = {
  name: '➖ Indeterminate',
  args: {
    label: 'Label',
    modelValue: false,
    indeterminate: true,
    disabled: false,
  },
}

// COM HINT TEXT
export const ComHint = {
  name: '💬 Com Hint',
  args: {
    label: 'Label',
    modelValue: true,
    hint: 'Texto de apoio',
    persistentHint: true,
    disabled: false,
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

// DISABLED OFF
export const DisabledOff = {
  name: '🚫 Disabled Off',
  args: {
    label: 'Label',
    modelValue: false,
    disabled: true,
  },
}
