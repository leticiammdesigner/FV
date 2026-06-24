import { VSwitch } from 'vuetify/components'
import { tokens } from '../tokens/tokens.js'

export default {
  title: 'Formulário/Switch',
  component: VSwitch,
  tags: ['autodocs'],
  render: (args) => ({
    components: { VSwitch },
    setup() {
      return { args }
    },
    template: `
      <v-switch
        v-bind="args"
        :color="args.color"
      />
    `,
  }),
  argTypes: {
    label: { control: 'text' },
    modelValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
}

// OFF
export const Off = {
  name: '⚫ Off',
  args: {
    label: 'Label',
    modelValue: false,
    disabled: false,
    color: tokens.action.primary.default,
  },
}

// ON
export const On = {
  name: '🟠 On',
  args: {
    label: 'Label',
    modelValue: true,
    disabled: false,
    color: tokens.action.primary.default,
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
  },
}