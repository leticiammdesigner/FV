<template>
  <div
    class="sisloc-searchbar"
    :class="[
      `sisloc-searchbar--${variant}`,
      { 'sisloc-searchbar--disabled': disabled }
    ]"
  >
    <!-- Overlay sutil — só na variante cinza -->
    <div v-if="variant === 'gray'" class="sisloc-searchbar__overlay" aria-hidden="true" />

    <!-- Ícone search -->
    <span class="sisloc-searchbar__icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#79767A"/>
      </svg>
    </span>

    <!-- Input -->
    <input
      ref="inputRef"
      class="sisloc-searchbar__input"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-label="ariaLabel || placeholder"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown.escape="onClear"
    />

    <!-- Botão clear — só quando tem valor -->
    <button
      v-if="modelValue"
      class="sisloc-searchbar__clear"
      type="button"
      aria-label="Limpar busca"
      @click="onClear"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#79767A"/>
      </svg>
    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  /**
   * Variante visual:
   *   'gray'  — fundo cinza (rgba 0,0,0,0.04) sem borda — uso em páginas brancas
   *   'white' — fundo branco puro sem borda — uso em páginas cinza
   */
  variant: {
    type: String,
    default: 'gray',
    validator: (v) => ['gray', 'white'].includes(v),
  },
  placeholder: {
    type: String,
    default: 'Buscar',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'search', 'clear', 'focus', 'blur'])

const inputRef = ref(null)

function onInput(e) { emit('update:modelValue', e.target.value) }
function onClear() {
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}
function onFocus(e) { emit('focus', e) }
function onBlur(e)  { emit('blur', e) }
function focus()    { inputRef.value?.focus() }

defineExpose({ focus })
</script>

<style scoped>
.sisloc-searchbar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 352px;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
}

/* ── Gray — fundo cinza, sem borda ── */
.sisloc-searchbar--gray {
  background: #FFFFFF;
}

.sisloc-searchbar__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  pointer-events: none;
  transition: background 0.15s ease;
}

/* ── White — fundo branco puro, sem borda ── */
.sisloc-searchbar--white {
  background: #FFFFFF;
}

/* ── Disabled ── */
.sisloc-searchbar--disabled {
  opacity: 0.38;
  pointer-events: none;
}

/* ── Ícone ── */
.sisloc-searchbar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1;
}

/* ── Input ── */
.sisloc-searchbar__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.08px;
  color: rgba(0, 0, 0, 0.87);
  position: relative;
  z-index: 1;
  min-width: 0;
}

.sisloc-searchbar__input::placeholder {
  color: #545155;
  opacity: 0.6;
}

/* ── Botão clear ── */
.sisloc-searchbar__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 1;
  border-radius: 50%;
  transition: background 0.15s ease;
}

.sisloc-searchbar__clear:hover {
  background: rgba(0, 0, 0, 0.08);
}

.sisloc-searchbar__clear:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: 2px;
}
</style>
