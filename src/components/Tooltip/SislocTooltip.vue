<template>
  <span
    class="sisloc-tooltip-wrapper"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <slot />

    <span
      v-if="text"
      class="sisloc-tooltip"
      :class="[`sisloc-tooltip--${location}`, { 'sisloc-tooltip--visible': visible }]"
      role="tooltip"
      aria-hidden="true"
    >
      {{ text }}
    </span>
  </span>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  /** Texto do tooltip. Vazio não renderiza. */
  text: {
    type: String,
    default: '',
  },
  /** Posição do tooltip em relação ao elemento */
  location: {
    type: String,
    default: 'bottom',
    validator: (v) => ['top', 'bottom', 'left', 'right'].includes(v),
  },
  /** Atraso em ms antes de exibir */
  openDelay: {
    type: Number,
    default: 200,
  },
})

const visible = ref(false)
let timer = null

function show() {
  clearTimeout(timer)
  timer = setTimeout(() => { visible.value = true }, props.openDelay)
}

function hide() {
  clearTimeout(timer)
  visible.value = false
}
</script>

<style scoped>
.sisloc-tooltip-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.sisloc-tooltip {
  position: absolute;
  z-index: 600; /* tokens.zIndex.tooltip */
  display: inline-flex;
  align-items: center;
  padding: 5px 16px;
  border-radius: 4px;
  background: rgba(97, 97, 97, 0.9);
  color: #FFFFFF;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.035px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease;
}

.sisloc-tooltip--visible {
  opacity: 1;
}

/* ── Posições ── */
.sisloc-tooltip--bottom {
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
}

.sisloc-tooltip--top {
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
}

.sisloc-tooltip--right {
  left: calc(100% + 6px);
  top: 50%;
  transform: translateY(-50%);
}

.sisloc-tooltip--left {
  right: calc(100% + 6px);
  top: 50%;
  transform: translateY(-50%);
}
</style>
