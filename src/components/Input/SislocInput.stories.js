// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocInput.stories.js
//
// A implementação vive em SislocInput.vue.
// `variant="outlined"` e `density="comfortable"` passaram para o
// componente; o `max-width: 360px` continua aqui por ser um limite
// de demonstração, não uma regra do componente.
// ============================================

import { ref, watch } from 'vue'
import SislocInput from './SislocInput.vue'

export default {
  title: 'Formulário/Input de Texto',
  component: SislocInput,
  tags: ['autodocs'],
  /*
   * `v-bind="args"` passava modelValue como prop sem escutar
   * `update:modelValue`, deixando a ligação unidirecional: o input
   * nativo exibia a digitação, mas o estado Vue da story nunca mudava.
   * Ref local ligado por v-model resolve; o watch mantém o painel
   * Controls sincronizado sem mutar args.
   */
  render: (args) => ({
    components: { SislocInput },
    setup() {
      const value = ref(args.modelValue)
      watch(() => args.modelValue, (novoValor) => { value.value = novoValor })
      return { args, value }
    },
    template: `
      <SislocInput
        v-model="value"
        :label="args.label"
        :placeholder="args.placeholder"
        :hint="args.hint"
        :persistent-hint="args.persistentHint"
        :counter="args.counter"
        :disabled="args.disabled"
        :readonly="args.readonly"
        :error="args.error"
        :error-messages="args.errorMessages"
        :required="args.required"
        :prepend-inner-icon="args.prependInnerIcon"
        :append-inner-icon="args.appendInnerIcon"
        style="max-width: 360px;"
      />
    `,
  }),
  argTypes: {
    modelValue: { control: 'text' },
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
