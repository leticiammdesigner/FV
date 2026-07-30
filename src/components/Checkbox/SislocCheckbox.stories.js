// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocCheckbox.stories.js
//
// A implementação vive em SislocCheckbox.vue.
// A cor do DS é interna ao componente — por isso `color`
// e `fontFamily` saíram dos args.
// ============================================

import { ref, watch } from 'vue'
import SislocCheckbox from './SislocCheckbox.vue'

export default {
  title: 'Formulário/Checkbox',
  component: SislocCheckbox,
  tags: ['autodocs'],
  /*
   * O render padrão do Storybook liga os args como props mas não anexa
   * listener de `update:modelValue` — o componente emitia e ninguém
   * escutava, deixando o controle congelado no Canvas. Um ref local
   * resolve, e o watch mantém o painel Controls sincronizado.
   */
  render: (args) => ({
    components: { SislocCheckbox },
    setup() {
      const value = ref(args.modelValue)
      watch(() => args.modelValue, (novo) => { value.value = novo })
      return { args, value }
    },
    template: `
      <SislocCheckbox
        v-model="value"
        :label="args.label"
        :disabled="args.disabled"
        :indeterminate="args.indeterminate"
        :hint="args.hint"
        :persistent-hint="args.persistentHint"
      />
    `,
  }),
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
