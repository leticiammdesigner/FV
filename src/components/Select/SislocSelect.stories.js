import { ref } from 'vue'

import SislocSelect from './SislocSelect.vue'

const ETAPAS = [
  'Captação',
  'Análise',
  'Aprovação',
  'Concluído',
]

export default {
  title: 'Componentes/Select',
  component: SislocSelect,

  parameters: {
    layout: 'padded',
  },

  argTypes: {
    modelValue: {
      control: 'select',
      options: [null, ...ETAPAS],
    },

    required: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },

    clearable: {
      control: 'boolean',
    },
  },
}

export const Playground = {
  args: {
    modelValue: 'Captação',
    items: ETAPAS,
    label: 'Etapa',
    required: true,
    disabled: false,
    clearable: false,
    width: 407,
  },

  render: args => ({
    components: {
      SislocSelect,
    },

    setup() {
      const value = ref(args.modelValue)

      return {
        args,
        value,
      }
    },

    template: `
      <SislocSelect
        v-model="value"
        :items="args.items"
        :label="args.label"
        :required="args.required"
        :disabled="args.disabled"
        :clearable="args.clearable"
        :width="args.width"
      />
    `,
  }),
}

export const Default = {
  render: () => ({
    components: {
      SislocSelect,
    },

    setup() {
      const value = ref(null)

      return {
        value,
        ETAPAS,
      }
    },

    template: `
      <SislocSelect
        v-model="value"
        label="Etapa"
        :items="ETAPAS"
        :required="true"
      />
    `,
  }),
}

export const Aberto = {
  render: () => ({
    components: {
      SislocSelect,
    },

    setup() {
      const value = ref('Captação')

      return {
        value,
        ETAPAS,
      }
    },

    template: `
      <SislocSelect
        v-model="value"
        label="Etapa"
        :items="ETAPAS"
        :required="true"
        menu
      />
    `,
  }),
}

export const ComErro = {
  render: () => ({
    components: {
      SislocSelect,
    },

    setup() {
      const value = ref(null)

      return {
        value,
        ETAPAS,
      }
    },

    template: `
      <SislocSelect
        v-model="value"
        label="Etapa"
        :items="ETAPAS"
        :required="true"
        :error-messages="[
          'Selecione uma etapa.'
        ]"
      />
    `,
  }),
}

export const Disabled = {
  render: () => ({
    components: {
      SislocSelect,
    },

    setup() {
      const value = ref('Captação')

      return {
        value,
        ETAPAS,
      }
    },

    template: `
      <SislocSelect
        v-model="value"
        label="Etapa"
        :items="ETAPAS"
        disabled
      />
    `,
  }),
}