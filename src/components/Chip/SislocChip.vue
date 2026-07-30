<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocChip.vue

  API semântica em dois eixos ortogonais:
    variant — a cor comunica o significado (danger, success, info…)
    size    — 'default' na tabela · 'kanban' no card (tipografia menor)

  Extraído de src/stories/Chip.stories.js sem alteração visual.
  As famílias de cor de tokens.chip são repetidas entre status
  (desqualificado = perdido = quente), por isso 11 status colapsam
  em 6 variantes reutilizáveis.
-->

<template>
  <span class="sisloc-chip" :style="chipStyle">
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { tokens } from '../../tokens/tokens.js'

/**
 * Cada variante aponta para um status de tokens.chip que representa
 * a família de cor. Status com hex idêntico compartilham a variante.
 *
 *   danger   → desqualificado · perdido · quente
 *   success  → convertido · ganho
 *   info     → qualificar · novo · frio
 *   warning  → elaboração · morno
 *   progress → negociação
 *   neutral  → outlined (funil, origem)
 */
const VARIANTS = {
  danger:   tokens.chip.desqualificado,
  success:  tokens.chip.convertido,
  info:     tokens.chip.qualificar,
  warning:  tokens.chip.elaboracao,
  progress: tokens.chip.negociacao,
  neutral:  tokens.chip.outlined,
}

const CHIP = tokens.components.chip

/** Tipografia por contexto de uso */
const SIZES = {
  default: {
    fontSize:      CHIP.fontSize,
    fontWeight:    CHIP.fontWeight,
    lineHeight:    CHIP.lineHeight,
    letterSpacing: CHIP.letterSpacing,
  },
  kanban: {
    fontSize:      tokens.chip.kanban.fontSize,
    fontWeight:    tokens.chip.kanban.fontWeight,
    lineHeight:    tokens.chip.kanban.lineHeight,
    letterSpacing: tokens.chip.kanban.letterSpacing,
  },
}

const props = defineProps({
  /**
   * Significado do chip — define as cores via tokens.
   * As listas são literais porque defineProps() não enxerga
   * bindings declarados no mesmo <script setup>.
   */
  variant: {
    type: String,
    default: 'neutral',
    validator: (v) => ['danger', 'success', 'info', 'warning', 'progress', 'neutral'].includes(v),
  },
  /** Contexto de uso — altera apenas a tipografia */
  size: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'kanban'].includes(v),
  },
  /** Texto do chip. Ignorado quando o slot padrão é usado. */
  label: {
    type: String,
    default: '',
  },
})

const chipStyle = computed(() => {
  const palette = VARIANTS[props.variant] ?? VARIANTS.neutral
  const typo    = SIZES[props.size] ?? SIZES.default

  return {
    backgroundColor: palette.bg,
    color:           palette.text,
    border:          palette.border ? `1px solid ${palette.border}` : 'none',
    fontSize:        typo.fontSize,
    fontWeight:      typo.fontWeight,
    lineHeight:      typo.lineHeight,
    letterSpacing:   typo.letterSpacing,
    // Medidas estruturais vêm do token para não duplicar o valor no CSS
    padding:         CHIP.padding,
    height:          CHIP.height,
    borderRadius:    CHIP.borderRadius,
    fontFamily:      tokens.typography.fontFamily,
  }
})
</script>

<style scoped>
.sisloc-chip {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}
</style>
