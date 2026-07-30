<template>
  <div class="sisloc-pagination">

    <!-- Itens por página -->
    <div class="sisloc-pagination__perpage">
      <span class="sisloc-pagination__label">Itens por página:</span>
      <select
        class="sisloc-pagination__select"
        :value="perPage"
        @change="$emit('update:perPage', Number($event.target.value))"
      >
        <option v-for="opt in perPageOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>

    <!-- Range atual -->
    <span class="sisloc-pagination__range">
      {{ rangeStart }}-{{ rangeEnd }} de {{ total }}
    </span>

    <!-- Navegação -->
    <div class="sisloc-pagination__nav">
      <button
        class="sisloc-pagination__btn"
        :disabled="page === 1"
        aria-label="Primeira página"
        @click="$emit('update:page', 1)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18.41 7.41L17 6L11 12L17 18L18.41 16.59L13.83 12L18.41 7.41ZM6 6H8V18H6V6Z" fill="currentColor"/></svg>
      </button>
      <button
        class="sisloc-pagination__btn"
        :disabled="page === 1"
        aria-label="Página anterior"
        @click="$emit('update:page', page - 1)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="currentColor"/></svg>
      </button>
      <button
        class="sisloc-pagination__btn"
        :disabled="page === totalPages"
        aria-label="Próxima página"
        @click="$emit('update:page', page + 1)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor"/></svg>
      </button>
      <button
        class="sisloc-pagination__btn"
        :disabled="page === totalPages"
        aria-label="Última página"
        @click="$emit('update:page', totalPages)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5.59 7.41L10.17 12L5.59 16.59L7 18L13 12L7 6L5.59 7.41ZM16 6H18V18H16V6Z" fill="currentColor"/></svg>
      </button>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  page: { type: Number, required: true },
  perPage: { type: Number, required: true },
  total: { type: Number, required: true },
  perPageOptions: { type: Array, default: () => [10, 25, 50, 100] },
})

defineEmits(['update:page', 'update:perPage'])

const totalPages = computed(() => Math.max(1, Math.ceil(props.total / props.perPage)))
const rangeStart  = computed(() => props.total === 0 ? 0 : (props.page - 1) * props.perPage + 1)
const rangeEnd    = computed(() => Math.min(props.page * props.perPage, props.total))
</script>

<style scoped>
.sisloc-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  padding: 12px 16px;
  font-family: Roboto, sans-serif;
}

.sisloc-pagination__perpage {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sisloc-pagination__label {
  font-size: 13px;
  color: #1D1B20;
}

.sisloc-pagination__select {
  height: 32px;
  padding: 0 8px;
  border: 1px solid #79767A;
  border-radius: 4px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  color: #1D1B20;
  background: #fff;
  cursor: pointer;
}

.sisloc-pagination__range {
  font-size: 13px;
  color: #1D1B20;
  white-space: nowrap;
}

.sisloc-pagination__nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.sisloc-pagination__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  color: #1D1B20;
  transition: background 0.15s ease;
}

.sisloc-pagination__btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.06);
}

.sisloc-pagination__btn:disabled {
  color: #CAC5CA;
  cursor: not-allowed;
}

.sisloc-pagination__btn:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: 2px;
}
</style>
