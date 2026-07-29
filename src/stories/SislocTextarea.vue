<script setup>
import { computed } from 'vue'
import { VTextarea } from 'vuetify/components'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },

  label: {
    type: String,
    default: '',
  },

  placeholder: {
    type: String,
    default: '',
  },

  required: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  readonly: {
    type: Boolean,
    default: false,
  },

  errorMessages: {
    type: [String, Array],
    default: () => [],
  },

  hint: {
    type: String,
    default: '',
  },

  persistentHint: {
    type: Boolean,
    default: false,
  },

  counter: {
    type: [Boolean, Number, String],
    default: false,
  },

  maxlength: {
    type: [Number, String],
    default: undefined,
  },

  rows: {
    type: [Number, String],
    default: 5,
  },

  autoGrow: {
    type: Boolean,
    default: false,
  },

  noResize: {
    type: Boolean,
    default: false,
  },

  width: {
    type: [Number, String],
    default: 407,
  },
})

const emit = defineEmits([
  'update:modelValue',
])

const fieldStyle = computed(() => ({
  width:
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width,
}))
</script>

<template>
  <VTextarea
    v-bind="$attrs"
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :error-messages="errorMessages"
    :hint="hint"
    :persistent-hint="persistentHint"
    :counter="counter"
    :maxlength="maxlength"
    :rows="rows"
    :auto-grow="autoGrow"
    :no-resize="noResize"
    :style="fieldStyle"
    variant="outlined"
    density="default"
    base-color="#8A8A8A"
    color="#212121"
    bg-color="#FFFFFF"
    hide-details="auto"
    class="sisloc-textarea"
    @update:model-value="
      emit('update:modelValue', $event)
    "
  >
    <template #label>
      <span>{{ label }}</span>

      <span
        v-if="required"
        class="sisloc-textarea__required"
        aria-hidden="true"
      >
        *
      </span>
    </template>
  </VTextarea>
</template>

<style scoped>
.sisloc-textarea {
  font-family:
    Roboto,
    Arial,
    sans-serif;
}

.sisloc-textarea :deep(.v-field) {
  border-radius: 4px;
  background: #FFFFFF;
}

/*
 * Somente controla cor e opacidade.
 * A estrutura da borda continua sendo do Vuetify.
 */
.sisloc-textarea :deep(.v-field__outline) {
  --v-field-border-opacity: 1;
}

/*
 * Estado focado.
 */
.sisloc-textarea
  :deep(.v-field--focused .v-field__outline) {
  color: #212121;
}

/*
 * Área digitável.
 */
.sisloc-textarea :deep(textarea) {
  color: #424242;

  font-size: 16px;
  line-height: 24px;
}

/*
 * Placeholder.
 */
.sisloc-textarea
  :deep(textarea::placeholder) {
  color: #9E9E9E;
  opacity: 1;
}

/*
 * Label.
 */
.sisloc-textarea :deep(.v-label) {
  color: #757575;
  opacity: 1;
}

.sisloc-textarea__required {
  margin-left: 3px;
  color: #D32F2F;
}

/*
 * Disabled.
 */
.sisloc-textarea
  :deep(.v-field--disabled) {
  background: #F5F5F5;
  opacity: 1;
}

.sisloc-textarea
  :deep(.v-field--disabled textarea),
.sisloc-textarea
  :deep(.v-field--disabled .v-label) {
  color: #9E9E9E;
}
</style>