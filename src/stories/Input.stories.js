import { VTextField } from 'vuetify/components'

export default {
  title: 'Formulário/Input de Texto',
  component: VTextField,
  tags: ['autodocs'],
  render: (args) => ({
    components: { VTextField },
    setup() {
      return { args }
    },
    template: `
      <v-text-field
        v-bind="args"
        variant="outlined"
        style="max-width: 360px;"
      />
    `,
  }),
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    persistentHint: { control: 'boolean' },
    counter: { control: 'number' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessages: { control: 'text' },
    required: { control: 'boolean' },
    prependInnerIcon: { control: 'text' },
    appendInnerIcon: { control: 'text' },
  },
}

// DEFAULT — Campo simples
export const Default = {
  name: '📝 Default',
  args: {
    label: 'Situação',
    disabled: false,
    error: false,
    required: false,
  },
}

// OBRIGATÓRIO — Com asterisco
export const Obrigatorio = {
  name: '* Obrigatório',
  args: {
    label: 'Situação',
    required: true,
    disabled: false,
    error: false,
  },
}

// COM HELP TEXT — Texto de apoio abaixo
export const ComHelpText = {
  name: '💬 Com Help Text',
  args: {
    label: 'Situação',
    hint: 'Texto de apoio para o usuário',
    persistentHint: true,
    disabled: false,
    error: false,
  },
}

// COM CONTADOR — Limite de caracteres
export const ComContador = {
  name: '🔢 Com Contador',
  args: {
    label: 'Descrição',
    counter: 60,
    disabled: false,
    error: false,
  },
}

// COM ÍCONE — Ícone de busca
export const ComIconeBusca = {
  name: '🔍 Com Ícone Busca',
  args: {
    label: 'Etapa',
    appendInnerIcon: 'mdi-magnify',
    disabled: false,
    error: false,
  },
}

// ERRO — Estado de validação
export const Erro = {
  name: '🔴 Erro',
  args: {
    label: 'Situação',
    required: true,
    error: true,
    errorMessages: 'Campo obrigatório',
  },
}

// DESABILITADO
export const Desabilitado = {
  name: '🚫 Desabilitado',
  args: {
    label: 'Situação',
    disabled: true,
  },
}