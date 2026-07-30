<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocSwitch.vue

  Wrapper controlado de VSwitch.

  IMPORTANTE — a classe global `.sisloc-switch` de vuetify-overrides.css
  NÃO é aplicada aqui. Medido no Storybook antes da migração, o track
  no estado Off é rgb(66,66,66) @ opacity 0.6 (padrão do Vuetify),
  enquanto a regra global forçaria #79767A @ opacity 1 — ou seja,
  aplicá-la mudaria o visual atual. O laranja do estado On vem da prop
  `color` do Vuetify, não de CSS global.

  Extraído de src/stories/Switch.stories.js sem alteração visual.
-->

<template>
  <VSwitch
    class="sisloc-switch-wrapper"
    :model-value="modelValue"
    :label="label"
    :disabled="disabled"
    :color="COLOR"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script setup>
import { VSwitch } from 'vuetify/components'
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
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

/**
 * Cor do DS encapsulada. Quando `disabled`, o Vuetify ignora `color`
 * e aplica o próprio tratamento (opacity 0.38) — preservado de propósito.
 */
const COLOR = tokens.action.primary.default
</script>
