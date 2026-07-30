// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocSwitch.stories.js
//
// A implementação vive em SislocSwitch.vue.
// A cor do DS é interna ao componente — por isso `color` saiu dos args.
// ============================================

import { ref, watch } from 'vue'
import SislocSwitch from './SislocSwitch.vue'

export default {
  title: 'Formulário/Switch',
  component: SislocSwitch,
  tags: ['autodocs'],
  /*
   * Sem render próprio, o Storybook liga os args como props sem
   * escutar `update:modelValue` — o switch não alternava no Canvas.
   * Ref local para a interação, watch para o painel Controls.
   */
  render: (args) => ({
    components: { SislocSwitch },
    setup() {
      const value = ref(args.modelValue)
      watch(() => args.modelValue, (novo) => { value.value = novo })
      return { args, value }
    },
    template: `
      <SislocSwitch
        v-model="value"
        :label="args.label"
        :disabled="args.disabled"
      />
    `,
  }),
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
