<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocButton.vue

  Wrapper de v-btn. A API é semântica: `variant` expressa a intenção
  da ação, nunca a cor. Todo o mapeamento para tokens fica aqui dentro.

  Extraído de src/stories/Button.stories.js sem alteração visual —
  os estilos inline que a story aplicava foram movidos para cá.
-->

<template>
  <VBtn
    variant="flat"
    :size="size"
    :disabled="disabled"
    class="sisloc-button"
    :style="buttonStyle"
  >
    <slot>{{ label }}</slot>
  </VBtn>
</template>

<script setup>
import { computed } from 'vue'
import { VBtn } from 'vuetify/components'
import { tokens } from '../../tokens/tokens.js'

/**
 * Variantes semânticas — cada uma referencia a camada `action` dos tokens.
 * Não expor cores cruas: a intenção é a API.
 */
const VARIANTS = {
  primary: {
    bg:     tokens.action.primary.default,
    text:   tokens.text.onDark,
    border: 'transparent',
  },
  secondary: {
    bg:     tokens.action.secondary.default,
    text:   tokens.action.secondary.text,
    border: tokens.action.secondary.border,
  },
  cancel: {
    bg:     tokens.action.cancel.default,
    text:   tokens.action.cancel.text,
    border: tokens.action.cancel.border,
  },
  success: {
    bg:     tokens.action.confirm.default,
    text:   tokens.text.onDark,
    border: 'transparent',
  },
  danger: {
    bg:     tokens.action.danger.default,
    text:   tokens.text.onDark,
    border: 'transparent',
  },
  tertiary: {
    bg:     tokens.action.tertiary.default,
    text:   tokens.action.tertiary.text,
    border: 'transparent',
  },
}

const props = defineProps({
  /**
   * Intenção da ação — define as cores via tokens.
   * A lista é literal porque defineProps() não enxerga
   * bindings declarados no mesmo <script setup>.
   */
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'cancel', 'success', 'danger', 'tertiary'].includes(v),
  },
  /** Texto do botão. Ignorado quando o slot padrão é usado. */
  label: {
    type: String,
    default: '',
  },
  /** SM=32px · MD=40px · LG=48px */
  size: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

/**
 * Disabled sobrepõe a variante — o token `disabled` é compartilhado
 * por todos os componentes, então o botão fica igual em qualquer variante.
 */
const palette = computed(() =>
  props.disabled
    ? { bg: tokens.disabled.background, text: tokens.disabled.text, border: 'transparent' }
    : VARIANTS[props.variant] ?? VARIANTS.primary,
)

const buttonStyle = computed(() => {
  const { bg, text, border } = palette.value
  return {
    backgroundColor: bg,
    color:           text,
    border:          border !== 'transparent' ? `1px solid ${border}` : 'none',
    borderRadius:    tokens.radius.field,
    textTransform:   tokens.typography.button.textTransform,
    boxShadow:       tokens.elevation.none,
    letterSpacing:   tokens.typography.button.letterSpacing,
    fontFamily:      tokens.typography.fontFamily,
    fontSize:        tokens.typography.button.size,
    fontWeight:      tokens.typography.button.weight,
  }
})
</script>
