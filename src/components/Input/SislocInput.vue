<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocInput.vue

  Wrapper controlado de VTextField.

  DECISÃO SOBRE CSS — a classe global `.sisloc-field` de
  vuetify-overrides.css NÃO é aplicada aqui. Medido no Storybook antes
  da migração, aplicá-la mudaria 4 propriedades já no estado default:

    border-radius   4px            → 8px
    borda           preto @0.38    → #79767A
    label           preto          → #79767A
    texto do input  preto          → #1D1B20

  e mais nos estados de foco (preto → #EC6A00) e disabled
  (transparente → #E6E1E6). Por isso o namespace exclusivo
  `.sisloc-input`, hoje sem regras — existe como ponto de ancoragem
  para estilos futuros do DS.

  As cores atuais vêm do tema `sislocLight` (.storybook/preview.js),
  não de tokens. `tokens.components.input` existe mas diverge do
  visual real em 6 de 9 valores — usá-lo mudaria a aparência, então
  foi deixado de fora deste lote.

  O Vuetify segue responsável por outline, notch da label, foco,
  input nativo, mensagens, contador, ícones e acessibilidade.

  Extraído de src/stories/Input.stories.js sem alteração visual.
-->

<template>
  <VTextField
    class="sisloc-input"
    variant="outlined"
    density="comfortable"
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder"
    :hint="hint"
    :persistent-hint="persistentHint"
    :counter="counter"
    :disabled="disabled"
    :readonly="readonly"
    :error="error"
    :error-messages="errorMessages"
    :required="required"
    :prepend-inner-icon="prependInnerIcon"
    :append-inner-icon="appendInnerIcon"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script setup>
import { VTextField } from 'vuetify/components'

defineOptions({ inheritAttrs: false })

defineProps({
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  label: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: undefined,
  },
  /** Texto de apoio abaixo do campo */
  hint: {
    type: String,
    default: undefined,
  },
  /** Mantém o hint visível mesmo sem foco */
  persistentHint: {
    type: Boolean,
    default: false,
  },
  /** Limite de caracteres — exibe "0 / N" */
  counter: {
    type: [Number, String],
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  /** Estado de erro sem mensagem associada */
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: [String, Array],
    default: undefined,
  },
  /**
   * Encaminhado ao input nativo como atributo `required`.
   * A versão atual do Vuetify não renderiza asterisco — comportamento
   * preservado de propósito, ver relatório do Lote 3.
   */
  required: {
    type: Boolean,
    default: false,
  },
  prependInnerIcon: {
    type: String,
    default: undefined,
  },
  appendInnerIcon: {
    type: String,
    default: undefined,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>
