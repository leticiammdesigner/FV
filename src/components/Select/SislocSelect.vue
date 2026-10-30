<script setup>
import { computed } from 'vue'
import { VSelect } from 'vuetify/components'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: {
    default: null,
  },

  items: {
    type: Array,
    default: () => [],
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

  clearable: {
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

  itemTitle: {
    type: String,
    default: 'title',
  },

  itemValue: {
    type: String,
    default: 'value',
  },

  width: {
    type: [Number, String],
    default: 407,
  },

  menuProps: {
    type: Object,
    default: () => ({}),
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

const computedMenuProps = computed(() => ({
  contentClass: 'sisloc-select-menu',
  offset: 4,
  maxHeight: 320,
  ...props.menuProps,
}))
</script>

<template>
  <VSelect
    v-bind="$attrs"
    :model-value="modelValue"
    :items="items"
    :label="label"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :clearable="clearable"
    :error-messages="errorMessages"
    :hint="hint"
    :persistent-hint="persistentHint"
    :item-title="itemTitle"
    :item-value="itemValue"
    :menu-props="computedMenuProps"
    :style="fieldStyle"
    variant="outlined"
    density="default"
    base-color="#8A8A8A"
    color="#212121"
    bg-color="#FFFFFF"
    hide-details="auto"
    class="sisloc-select"
    @update:model-value="
      emit('update:modelValue', $event)
    "
  >
    <template #label>
      <span>{{ label }}</span>

      <span
        v-if="required"
        class="sisloc-select__required"
        aria-hidden="true"
      >
        *
      </span>
    </template>
  </VSelect>
</template>

<style scoped>
.sisloc-select {
  font-family:
    Roboto,
    Arial,
    sans-serif;
}

/*
 * Ajustamos o componente inteiro.
 * Não mexemos nas três peças internas do outline.
 */
.sisloc-select :deep(.v-field) {
  --v-input-control-height: 60px;
  border-radius: 4px;
}

/*
 * Deixa a borda default totalmente visível.
 * O Vuetify continua responsável pela geometria.
 */
.sisloc-select :deep(.v-field__outline) {
  --v-field-border-opacity: 1;
}

/*
 * Estado aberto ou focado.
 */
.sisloc-select
  :deep(.v-field--focused .v-field__outline) {
  color: #212121;
}

/*
 * Texto selecionado.
 */
.sisloc-select :deep(.v-select__selection-text) {
  color: #424242;
  font-size: 16px;
  line-height: 24px;
}

/*
 * Placeholder.
 */
.sisloc-select
  :deep(.v-field__input input::placeholder) {
  color: #9E9E9E;
  opacity: 1;
}

/*
 * Label.
 */
.sisloc-select :deep(.v-label) {
  color: #757575;
  opacity: 1;
}

.sisloc-select__required {
  margin-left: 3px;
  color: #D32F2F;
}

/*
 * Ícone do select.
 */
.sisloc-select
  :deep(.v-field__append-inner .v-icon) {
  color: #757575;
  opacity: 1;
}

/*
 * Campo aberto ou focado.
 */
.sisloc-select
  :deep(.v-field--focused .v-field__append-inner .v-icon) {
  color: #757575;
}

/*
 * Estado desabilitado.
 */
.sisloc-select
  :deep(.v-field--disabled) {
  background: #F5F5F5;
  opacity: 1;
}

.sisloc-select
  :deep(.v-field--disabled .v-field__input),
.sisloc-select
  :deep(.v-field--disabled .v-label) {
  color: #9E9E9E;
}
</style>

<style>
/*
 * O menu é renderizado fora do componente pelo overlay
 * do Vuetify. Por isso este estilo não é scoped.
 */
.sisloc-select-menu .v-overlay__content {
  border-radius: 0 0 8px 8px;
}

.sisloc-select-menu .v-list {
  padding: 8px 0;

  border-radius: 0 0 8px 8px;
  background: #FFFFFF;

  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.16),
    0 2px 4px rgba(0, 0, 0, 0.12);
}

.sisloc-select-menu .v-list-item {
  min-height: 52px;
  padding-inline: 20px;

  font-family:
    Roboto,
    Arial,
    sans-serif;

  font-size: 16px;
  line-height: 24px;
}

.sisloc-select-menu
  .v-list-item:hover {
  background: #F5F5F5;
}

.sisloc-select-menu
  .v-list-item--active {
  background: #E0E0E0;
  color: #212121;
}

.sisloc-select-menu
  .v-list-item--active
  .v-list-item__overlay {
  opacity: 0;
}
</style>