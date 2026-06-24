import { VRadio, VRadioGroup } from 'vuetify/components'
import { tokens } from '../tokens/tokens.js'

export default {
  title: 'Formulário/Radio',
  component: VRadio,
  tags: ['autodocs'],
  render: (args) => ({
    components: { VRadio, VRadioGroup },
    setup() {
      return { args }
    },
    template: `
      <v-radio-group v-model="args.modelValue" :disabled="args.disabled">
        <v-radio
          label="Opção 1"
          value="1"
          :color="args.color"
        />
        <v-radio
          label="Opção 2"
          value="2"
          :color="args.color"
        />
      </v-radio-group>
    `,
  }),
  argTypes: {
    modelValue: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
}

// OFF — nenhum selecionado
export const Off = {
  name: '⚪ Off',
  args: {
    modelValue: null,
    disabled: false,
    color: tokens.action.primary.default,
  },
}

// ON — selecionado
export const On = {
  name: '🟠 On',
  args: {
    modelValue: '1',
    disabled: false,
    color: tokens.action.primary.default,
  },
}

// DISABLED
export const Disabled = {
  name: '🚫 Disabled',
  args: {
    modelValue: '1',
    disabled: true,
    color: tokens.disabled.text,
  },
}