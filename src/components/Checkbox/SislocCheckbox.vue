<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocCheckbox.vue

  Wrapper controlado de VCheckbox. A cor do DS fica encapsulada —
  o consumidor não passa hexadecimal.

  O Vuetify segue responsável por DOM interno, teclado, foco, ripple,
  associação label/for e estados internos.

  Extraído de src/stories/Checkbox.stories.js sem alteração visual.
-->

<template>
  <VCheckbox
    class="sisloc-checkbox"
    :model-value="modelValue"
    :label="label"
    :disabled="disabled"
    :indeterminate="indeterminate"
    :hint="hint"
    :persistent-hint="persistentHint"
    :color="COLOR"
    :style="{ fontFamily: FONT }"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script setup>
import { VCheckbox } from 'vuetify/components'
import { tokens } from '../../tokens/tokens.js'

defineOptions({ inheritAttrs: false })

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  /** Estado parcial — some assim que o usuário interage */
  indeterminate: {
    type: Boolean,
    default: false,
  },
  /** Texto de apoio abaixo do controle */
  hint: {
    type: String,
    default: undefined,
  },
  persistentHint: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

/**
 * Cor e fonte vêm dos tokens, não da API pública.
 * Quando `disabled`, o Vuetify sobrepõe a cor com o próprio
 * tratamento (opacity 0.38) — comportamento preservado de propósito.
 */
const COLOR = tokens.action.primary.default
const FONT  = tokens.typography.fontFamily
</script>
