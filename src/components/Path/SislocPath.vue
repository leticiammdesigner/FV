<script setup>
import { computed } from 'vue'

const props = defineProps({
  /**
   * Pode receber strings:
   * ['Novo', 'Conectado']
   *
   * Ou objetos:
   * [
   *   { id: 'novo', label: 'Novo' },
   *   { id: 'conectado', label: 'Conectado', disabled: true }
   * ]
   */
  steps: {
    type: Array,
    required: true,
  },

  /**
   * Índice da etapa atual.
   */
  modelValue: {
    type: Number,
    default: 0,
  },

  /**
   * Permite clicar nas etapas.
   */
  interactive: {
    type: Boolean,
    default: false,
  },

  /**
   * Quando false, mantém a largura exata do DS.
   * Quando true, ocupa toda a largura disponível.
   */
  fluid: {
    type: Boolean,
    default: false,
  },

  /**
   * A imagem do DS utiliza aproximadamente 205px.
   */
  itemWidth: {
    type: [Number, String],
    default: 205,
  },

  /**
   * Largura mínima usada na versão fluida.
   */
  minItemWidth: {
    type: [Number, String],
    default: 160,
  },

  ariaLabel: {
    type: String,
    default: 'Etapas do processo',
  },
})

const emit = defineEmits([
  'update:modelValue',
  'change',
])

const normalizedSteps = computed(() =>
  props.steps.map((step, index) => {
    if (typeof step === 'string') {
      return {
        id: `${index}-${step}`,
        label: step,
        disabled: false,
      }
    }

    return {
      id: step.id ?? `${index}-${step.label}`,
      label: step.label,
      disabled: Boolean(step.disabled),
    }
  }),
)

const activeIndex = computed(() => {
  if (!normalizedSteps.value.length) return -1

  const value = Number.isFinite(props.modelValue)
    ? props.modelValue
    : 0

  return Math.min(
    Math.max(value, 0),
    normalizedSteps.value.length - 1,
  )
})

function toCssUnit(value) {
  return typeof value === 'number'
    ? `${value}px`
    : value
}

const pathStyle = computed(() => {
  if (props.fluid) {
    return {
      width: '100%',
      gridTemplateColumns: `repeat(
        ${normalizedSteps.value.length},
        minmax(${toCssUnit(props.minItemWidth)}, 1fr)
      )`,
    }
  }

  return {
    gridAutoColumns: toCssUnit(props.itemWidth),
  }
})

function stateFor(index) {
  if (index < activeIndex.value) return 'completed'
  if (index === activeIndex.value) return 'current'
  return 'upcoming'
}

/**
 * O formato não depende do estado.
 *
 * Todas as etapas possuem recorte à esquerda.
 * Todas, menos a última, possuem seta à direita.
 */
function shapeFor(index) {
  return index === normalizedSteps.value.length - 1
    ? 'end'
    : 'standard'
}

/**
 * ViewBox exato: 205 × 40.
 *
 * standard:
 * recorte esquerdo + seta direita
 *
 * end:
 * recorte esquerdo + lado direito reto
 */
const paths = Object.freeze({
  standard: [
    'M 0.5 0.5',
    'H 188.5',
    'L 204.5 20',
    'L 188.5 39.5',
    'H 0.5',
    'L 16.5 20',
    'Z',
  ].join(' '),

  end: [
    'M 0.5 0.5',
    'H 204.5',
    'V 39.5',
    'H 0.5',
    'L 16.5 20',
    'Z',
  ].join(' '),
})

function pathFor(shape) {
  return paths[shape]
}

function selectStep(index) {
  const step = normalizedSteps.value[index]

  if (!props.interactive || step.disabled) return

  emit('update:modelValue', index)

  emit('change', {
    index,
    step,
  })
}
</script>

<template>
  <div class="sisloc-path__viewport">
    <ol
      class="sisloc-path"
      :class="{
        'sisloc-path--fluid': fluid,
        'sisloc-path--interactive': interactive,
      }"
      :style="pathStyle"
      :aria-label="ariaLabel"
    >
      <li
        v-for="(step, index) in normalizedSteps"
        :key="step.id"
        class="sisloc-path__item"
        :class="`sisloc-path__item--${stateFor(index)}`"
      >
        <component
          :is="interactive ? 'button' : 'div'"
          class="sisloc-path__segment"
          :type="interactive ? 'button' : undefined"
          :disabled="interactive ? step.disabled : undefined"
          :aria-current="
            index === activeIndex
              ? 'step'
              : undefined
          "
          @click="selectStep(index)"
        >
          <svg
            class="sisloc-path__shape"
            viewBox="0 0 205 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              class="sisloc-path__shape-base"
              :d="pathFor(shapeFor(index))"
              vector-effect="non-scaling-stroke"
            />

            <path
              class="sisloc-path__shape-focus"
              :d="pathFor(shapeFor(index))"
              vector-effect="non-scaling-stroke"
            />
          </svg>

          <span class="sisloc-path__label">
            {{ step.label }}
          </span>
        </component>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.sisloc-path__viewport {
  max-width: 100%;
  overflow-x: auto;

  /*
   * Espaço para o focus ring não ser cortado.
   */
  padding: 3px;
  margin: -3px;
}

.sisloc-path {
  /*
   * Tokens locais com fallback.
   * Depois você pode apontá-los para os tokens oficiais do Sisloc DS.
   */
  --sisloc-path-height: 40px;
  --sisloc-path-gap: 4px;

  --sisloc-path-active-fill:
    var(--sisloc-color-primary-600, #ec6a00);

  --sisloc-path-active-stroke:
    var(--sisloc-color-primary-600, #ec6a00);

  --sisloc-path-completed-fill:
    var(--sisloc-color-surface, #ffffff);

  --sisloc-path-completed-stroke:
    var(--sisloc-color-primary-600, #ec6a00);

  --sisloc-path-upcoming-fill:
    var(--sisloc-color-surface, #ffffff);

  --sisloc-path-upcoming-stroke:
    var(--sisloc-color-blue-grey-300, #b0bec5);

  --sisloc-path-default-text:
    var(--sisloc-color-blue-grey-700, #607d8b);

  --sisloc-path-active-text:
    var(--sisloc-color-on-primary, #ffffff);

  --sisloc-path-focus:
    var(--sisloc-color-focus, #0b5cab);

  display: grid;
  grid-auto-flow: column;
  gap: var(--sisloc-path-gap);

  width: max-content;
  min-width: max-content;

  padding: 0;
  margin: 0;

  list-style: none;
}

.sisloc-path--fluid {
  min-width: 0;
}

.sisloc-path__item {
  min-width: 0;
  height: var(--sisloc-path-height);

  --sisloc-path-item-fill:
    var(--sisloc-path-upcoming-fill);

  --sisloc-path-item-stroke:
    var(--sisloc-path-upcoming-stroke);

  --sisloc-path-item-text:
    var(--sisloc-path-default-text);
}

.sisloc-path__item--completed {
  --sisloc-path-item-fill:
    var(--sisloc-path-completed-fill);

  --sisloc-path-item-stroke:
    var(--sisloc-path-completed-stroke);

  --sisloc-path-item-text:
    var(--sisloc-path-default-text);
}

.sisloc-path__item--current {
  --sisloc-path-item-fill:
    var(--sisloc-path-active-fill);

  --sisloc-path-item-stroke:
    var(--sisloc-path-active-stroke);

  --sisloc-path-item-text:
    var(--sisloc-path-active-text);
}

.sisloc-path__item--upcoming {
  --sisloc-path-item-fill:
    var(--sisloc-path-upcoming-fill);

  --sisloc-path-item-stroke:
    var(--sisloc-path-upcoming-stroke);

  --sisloc-path-item-text:
    var(--sisloc-path-default-text);
}

.sisloc-path__segment {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: var(--sisloc-path-height);

  /*
   * Pela imagem, o texto começa aproximadamente
   * 32px depois do limite esquerdo.
   */
  padding: 0 24px 0 32px;

  border: 0;
  outline: 0;
  appearance: none;
  background: transparent;

  color: var(--sisloc-path-item-text);

  font-family:
    var(--sisloc-font-family, Roboto),
    Arial,
    sans-serif;

  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.048px;

  text-align: left;
}

.sisloc-path__shape {
  position: absolute;
  inset: 0;

  display: block;

  width: 100%;
  height: 100%;

  overflow: visible;
  pointer-events: none;
}

.sisloc-path__shape-base {
  fill: var(--sisloc-path-item-fill);
  stroke: var(--sisloc-path-item-stroke);
  stroke-width: 1px;
  stroke-linejoin: miter;

  shape-rendering: geometricPrecision;

  transition:
    fill 120ms ease,
    stroke 120ms ease;
}

.sisloc-path__shape-focus {
  fill: none;
  stroke: var(--sisloc-path-focus);
  stroke-width: 3px;
  stroke-linejoin: miter;

  opacity: 0;
  pointer-events: none;
}

.sisloc-path__label {
  position: relative;
  z-index: 1;

  display: block;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
}

.sisloc-path--interactive
  .sisloc-path__segment:not(:disabled) {
  cursor: pointer;
}

.sisloc-path--interactive
  .sisloc-path__item--completed
  .sisloc-path__segment:not(:disabled):hover {
  --sisloc-path-item-fill: #fff7f0;
}

.sisloc-path--interactive
  .sisloc-path__item--upcoming
  .sisloc-path__segment:not(:disabled):hover {
  --sisloc-path-item-fill: #f7f9fa;
  --sisloc-path-item-stroke:
    var(--sisloc-color-primary-600, #ec6a00);
}

.sisloc-path--interactive
  .sisloc-path__item--current
  .sisloc-path__segment:not(:disabled):hover {
  --sisloc-path-item-fill: #d95f00;
  --sisloc-path-item-stroke: #d95f00;
}

.sisloc-path__segment:focus-visible
  .sisloc-path__shape-focus {
  opacity: 1;
}

.sisloc-path__segment:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

@media (prefers-reduced-motion: reduce) {
  .sisloc-path__shape-base {
    transition: none;
  }
}
</style>