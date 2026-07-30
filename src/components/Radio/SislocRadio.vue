<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocRadio.vue

  Encapsula VRadioGroup + VRadio. A auditoria das stories mostrou que
  o rádio nunca é usado isolado — sempre em grupo — por isso este é o
  único componente, sem um SislocRadioGroup.vue separado.

  O VRadioGroup cuida do `name` compartilhado, que é o que garante
  seleção única por grupo, além de teclado e foco.

  Extraído de src/stories/Radio.stories.js sem alteração visual.
-->

<template>
  <VRadioGroup
    class="sisloc-radio"
    :model-value="modelValue"
    :label="label"
    :disabled="disabled"
    :inline="inline"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <VRadio
      v-for="item in items"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
      :color="COLOR"
    />
  </VRadioGroup>
</template>

<script setup>
import { VRadio, VRadioGroup } from 'vuetify/components'
import { tokens } from '../../tokens/tokens.js'

defineOptions({ inheritAttrs: false })

defineProps({
  /** Valor selecionado no grupo */
  modelValue: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  /** Opções: [{ label, value, disabled? }] */
  items: {
    type: Array,
    default: () => [],
  },
  /** Rótulo do grupo — omitido não renderiza nada */
  label: {
    type: String,
    default: undefined,
  },
  /** Desabilita o grupo inteiro */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** Dispõe as opções em linha em vez de coluna */
  inline: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

/** Cor do DS encapsulada — não faz parte da API pública */
const COLOR = tokens.action.primary.default
</script>
