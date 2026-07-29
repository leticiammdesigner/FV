<template>
  <div class="sisloc-view-toggle" role="group" :aria-label="ariaLabel">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="sisloc-view-toggle__btn"
      :class="{ 'sisloc-view-toggle__btn--active': modelValue === option.value }"
      :aria-pressed="modelValue === option.value"
      :aria-label="option.label"
      :title="option.label"
      @click="$emit('update:modelValue', option.value)"
    >
      <span class="sisloc-view-toggle__icon" v-html="option.icon" aria-hidden="true" />
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
  /** Opções: [{ value, label, icon (SVG string) }] */
  options: {
    type: Array,
    required: true,
  },
  ariaLabel: {
    type: String,
    default: 'Alternar visualização',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.sisloc-view-toggle {
  display: inline-flex;
  align-items: center;
  height: 40px;
  border: 0.8px solid #E6E1E6;
  border-radius: 8px;
  overflow: hidden;
  background: #FFFFFF;

  /* Não estica quando dentro de um container flex/grid */
  width: fit-content;
  flex-shrink: 0;
  align-self: flex-start;
}

.sisloc-view-toggle__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  transition: background 0.15s ease;
}

/* Divisor entre botões */
.sisloc-view-toggle__btn + .sisloc-view-toggle__btn {
  border-left: 1px solid #E6E1E6;
}

/* Ativo — fundo laranja */
.sisloc-view-toggle__btn--active {
  background: #EC6A00;
}

/* Hover no inativo */
.sisloc-view-toggle__btn:not(.sisloc-view-toggle__btn--active):hover {
  background: rgba(0, 0, 0, 0.04);
}

.sisloc-view-toggle__btn:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: -2px;
}

.sisloc-view-toggle__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  overflow: hidden;
}

.sisloc-view-toggle__icon :deep(svg) {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

/* Ícone inativo — cinza */
.sisloc-view-toggle__btn:not(.sisloc-view-toggle__btn--active) .sisloc-view-toggle__icon :deep(svg path),
.sisloc-view-toggle__btn:not(.sisloc-view-toggle__btn--active) .sisloc-view-toggle__icon :deep(path) {
  fill: #79767A;
}

/* Ícone ativo — branco */
.sisloc-view-toggle__btn--active .sisloc-view-toggle__icon :deep(svg path),
.sisloc-view-toggle__btn--active .sisloc-view-toggle__icon :deep(path) {
  fill: #FFFFFF;
}
</style>
