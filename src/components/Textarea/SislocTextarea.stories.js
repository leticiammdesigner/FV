import { ref } from 'vue'

import SislocTextarea from './SislocTextarea.vue'

export default {
  title: 'Componentes/Textarea',
  component: SislocTextarea,

  parameters: {
    layout: 'padded',
  },

  argTypes: {
    required: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },

    autoGrow: {
      control: 'boolean',
    },

    noResize: {
      control: 'boolean',
    },
  },
}

export const Playground = {
  args: {
    modelValue: '',
    label: 'Descrição',
    required: false,
    disabled: false,
    autoGrow: false,
    noResize: false,
    rows: 4,
    width: 407,
  },

  render: args => ({
    components: {
      SislocTextarea,
    },

    setup() {
      const value = ref(args.modelValue)

      return {
        value,
        args,
      }
    },

    template: `
      <SislocTextarea
        v-model="value"
        :label="args.label"
        :required="args.required"
        :disabled="args.disabled"
        :auto-grow="args.autoGrow"
        :no-resize="args.noResize"
        :rows="args.rows"
        :width="args.width"
      />
    `,
  }),
}

export const Default = {
  render: () => ({
    components: {
      SislocTextarea,
    },

    setup() {
      const value = ref('')

      return {
        value,
      }
    },

    template: `
      <SislocTextarea
        v-model="value"
        label="Descrição"
      />
    `,
  }),
}

export const Obrigatorio = {
  render: () => ({
    components: {
      SislocTextarea,
    },

    setup() {
      const value = ref('')

      return {
        value,
      }
    },

    template: `
      <SislocTextarea
        v-model="value"
        label="Descrição"
        required
      />
    `,
  }),
}

export const Preenchido = {
  render: () => ({
    components: {
      SislocTextarea,
    },

    setup() {
      const value = ref(
        'Lead captado por indicação. ' +
        'Cliente interessado em locação.'
      )

      return {
        value,
      }
    },

    template: `
      <SislocTextarea
        v-model="value"
        label="Descrição"
      />
    `,
  }),
}

export const ComContador = {
  render: () => ({
    components: {
      SislocTextarea,
    },

    setup() {
      const value = ref('')

      return {
        value,
      }
    },

    template: `
      <SislocTextarea
        v-model="value"
        label="Descrição"
        :counter="300"
        :maxlength="300"
      />
    `,
  }),
}

export const ComErro = {
  render: () => ({
    components: {
      SislocTextarea,
    },

    setup() {
      const value = ref('')

      return {
        value,
      }
    },

    template: `
      <SislocTextarea
        v-model="value"
        label="Descrição"
        required
        :error-messages="[
          'Campo obrigatório.'
        ]"
      />
    `,
  }),
}

export const Disabled = {
  render: () => ({
    components: {
      SislocTextarea,
    },

    setup() {
      const value = ref(
        'Conteúdo somente leitura.'
      )

      return {
        value,
      }
    },

    template: `
      <SislocTextarea
        v-model="value"
        label="Descrição"
        disabled
      />
    `,
  }),
}

export const AutoGrow = {
  render: () => ({
    components: {
      SislocTextarea,
    },

    setup() {
      const value = ref('')

      return {
        value,
      }
    },

    template: `
      <SislocTextarea
        v-model="value"
        label="Descrição"
        auto-grow
        :rows="3"
      />
    `,
  }),
}