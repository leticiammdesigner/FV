<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocIconButton.vue

  Ação secundária icon-only. API separada do SislocButton de propósito:
  dimensões fixas (40x40), sem texto, sem variantes de cor.

  Não usa v-btn — usa <button> nativo para evitar conflito com os
  estilos do Vuetify em icon buttons (decisão preservada da story original).

  Extraído de src/stories/BotaoIcone.stories.js sem alteração visual.
-->

<template>
  <button
    type="button"
    class="sisloc-btn-icon"
    :disabled="disabled"
    :style="cssVars"
  >
    <!--
      O SVG entra por v-html quando vem da prop `icon`.
      Conteúdo de v-html não recebe o atributo de escopo do Vue,
      por isso a regra de dimensionamento usa :deep() abaixo.
    -->
    <span v-if="icon" class="sisloc-btn-icon__glyph" v-html="icon" />
    <slot v-else />
  </button>
</template>

<script setup>
import { tokens } from '../../tokens/tokens.js'

defineProps({
  /** SVG do ícone como string. Alternativa ao slot padrão. */
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

/**
 * Os tokens chegam ao CSS como custom properties porque :hover e
 * :active não podem ser expressos por style inline. Sobrescrever
 * --sisloc-icon-btn-bg de fora permite simular estados em story.
 */
const IB = tokens.components.iconButton

const cssVars = {
  '--sisloc-icon-btn-size':       IB.size,
  '--sisloc-icon-btn-icon-size':  IB.iconSize,
  '--sisloc-icon-btn-padding':    IB.padding,
  '--sisloc-icon-btn-radius':     IB.borderRadius,
  '--sisloc-icon-btn-bg':         IB.background,
  '--sisloc-icon-btn-bg-hover':   IB.hoverBackground,
  '--sisloc-icon-btn-bg-active':  IB.activeBackground,
  '--sisloc-icon-btn-disabled-o': IB.disabledOpacity,
  '--sisloc-icon-btn-focus':      tokens.border.focus,
}
</script>

<style scoped>
.sisloc-btn-icon {
  display: inline-flex;
  padding: var(--sisloc-icon-btn-padding);
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--sisloc-icon-btn-radius);
  background: var(--sisloc-icon-btn-bg);
  border: none;
  cursor: pointer;
  width: var(--sisloc-icon-btn-size);
  height: var(--sisloc-icon-btn-size);
  flex-shrink: 0;
  transition: background 0.15s ease;
  outline: none;
}

.sisloc-btn-icon:hover {
  background: var(--sisloc-icon-btn-bg-hover);
}

.sisloc-btn-icon:focus-visible {
  outline: 2px solid var(--sisloc-icon-btn-focus);
  outline-offset: 2px;
}

.sisloc-btn-icon:active {
  background: var(--sisloc-icon-btn-bg-active);
}

.sisloc-btn-icon:disabled {
  opacity: var(--sisloc-icon-btn-disabled-o);
  cursor: not-allowed;
  pointer-events: none;
}

.sisloc-btn-icon__glyph {
  display: inline-flex;
}

/*
  :deep() é obrigatório aqui — o SVG vem de v-html e não carrega
  o atributo de escopo, então um seletor scoped normal não o alcançaria.
  Mantido sob a classe do componente para não vazar para outros SVGs.
*/
.sisloc-btn-icon :deep(svg) {
  width: var(--sisloc-icon-btn-icon-size);
  height: var(--sisloc-icon-btn-icon-size);
  flex-shrink: 0;
}
</style>
