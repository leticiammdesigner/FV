<template>
  <div class="sisloc-segmented" role="group" :aria-label="ariaLabel">
    <button
      v-for="(option, i) in options"
      :key="option.value"
      type="button"
      class="sisloc-segmented__btn"
      :class="{
        'sisloc-segmented__btn--active':  modelValue === option.value,
        'sisloc-segmented__btn--first':   i === 0,
        'sisloc-segmented__btn--last':    i === options.length - 1,
        'sisloc-segmented__btn--disabled': option.disabled,
      }"
      :disabled="option.disabled"
      :aria-pressed="modelValue === option.value"
      @click="!option.disabled && $emit('update:modelValue', option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  /** Valor ativo — v-model */
  modelValue: {
    type: String,
    required: true,
  },
  /**
   * Opções: [{ value, label, disabled? }]
   * Suporta 2 ou 3 opções
   */
  options: {
    type: Array,
    required: true,
  },
  ariaLabel: {
    type: String,
    default: 'Selecionar opção',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.sisloc-segmented {
  display: inline-flex;
  align-items: center;
  height: 50px;
}

.sisloc-segmented__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 16px;
  background: #FFFFFF;
  border: 1px solid #EC6A00;
  border-left: none;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0.08px;
  color: #EC6A00;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease;
}

/* Primeiro botão — borda esquerda + radius esquerdo */
.sisloc-segmented__btn--first {
  border-left: 1px solid #EC6A00;
  border-radius: 4px 0 0 4px;
}

/* Último botão — radius direito */
.sisloc-segmented__btn--last {
  border-radius: 0 4px 4px 0;
}

/* Ativo — fundo laranja, texto branco, peso médio */
.sisloc-segmented__btn--active {
  background: #EC6A00;
  color: #FFFFFF;
  font-weight: 500;
}

/* Hover no inativo */
.sisloc-segmented__btn:not(.sisloc-segmented__btn--active):not(.sisloc-segmented__btn--disabled):hover {
  background: rgba(236, 106, 0, 0.08);
}

/* Disabled */
.sisloc-segmented__btn--disabled {
  opacity: 0.38;
  cursor: not-allowed;
}

.sisloc-segmented__btn:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: -2px;
  z-index: 1;
  position: relative;
}
</style>
