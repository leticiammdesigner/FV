<template>
  <div class="sisloc-accordion" :class="{ 'sisloc-accordion--open': isOpen }">

    <!-- Header -->
    <button
      class="sisloc-accordion__header"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <div class="sisloc-accordion__header-content">
        <span class="sisloc-accordion__title">{{ title }}</span>
        <span v-if="!isOpen && subtitle" class="sisloc-accordion__subtitle">
          {{ subtitle }}
        </span>
      </div>
      <span class="sisloc-accordion__icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            :d="isOpen
              ? 'M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z'
              : 'M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z'"
            fill="#79767A"
          />
        </svg>
      </span>
    </button>

    <!-- Content -->
    <div v-if="isOpen" class="sisloc-accordion__content">
      <slot />
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  defaultOpen: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Boolean,
    default: undefined,
  },
})

const emit = defineEmits(['update:modelValue', 'toggle'])

const internalOpen = ref(props.defaultOpen)

const isOpen = computed(() => {
  return props.modelValue !== undefined ? props.modelValue : internalOpen.value
})

function toggle() {
  const next = !isOpen.value
  internalOpen.value = next
  emit('update:modelValue', next)
  emit('toggle', next)
}
</script>

<style scoped>
.sisloc-accordion {
  background: #FFFFFF;
  border: 1px solid #E6E1E6;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}

.sisloc-accordion__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 8px;
  min-height: 56px;
  box-sizing: border-box;
}

.sisloc-accordion__header:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: -2px;
  border-radius: 8px;
}

.sisloc-accordion__header-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.sisloc-accordion__title {
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #1D1B20;
}

.sisloc-accordion__subtitle {
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #79767A;
}

.sisloc-accordion__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.sisloc-accordion__content {
  padding: 16px;
}
</style>