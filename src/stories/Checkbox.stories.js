import { VCheckbox } from 'vuetify/components'
import { tokens } from '../tokens/tokens.js'

export default {
  title: 'Formulário/Checkbox',
  component: VCheckbox,
  tags: ['autodocs'],
  render: (args) => ({
    components: { VCheckbox },
    setup() {
      return { args }
    },
    template: `
      <v-checkbox
        v-bind="args"
        :color="args.color"
        :style="{ fontFamily: args.fontFamily }"
      />
    `,
  }),
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    persistentHint: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    modelValue: { control: 'boolean' },
    color: { control: 'color' },
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
    color: tokens.action.primary.default,
    fontFamily: tokens.typography.fontFamily,
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
    color: tokens.action.primary.default,
    fontFamily: tokens.typography.fontFamily,
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
    color: tokens.action.primary.default,
    fontFamily: tokens.typography.fontFamily,
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
    color: tokens.action.primary.default,
    fontFamily: tokens.typography.fontFamily,
  },
}

// DISABLED ON
export const DisabledOn = {
  name: '🚫 Disabled On',
  args: {
    label: 'Label',
    modelValue: true,
    disabled: true,
    color: tokens.disabled.text,
    fontFamily: tokens.typography.fontFamily,
  },
}

// DISABLED OFF
export const DisabledOff = {
  name: '🚫 Disabled Off',
  args: {
    label: 'Label',
    modelValue: false,
    disabled: true,
    color: tokens.disabled.text,
    fontFamily: tokens.typography.fontFamily,
  },
}