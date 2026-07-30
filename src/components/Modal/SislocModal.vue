<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocModal.vue

  Wrapper de VDialog + VCard. O Vuetify segue responsável por overlay,
  scrim, Escape, clique externo, trap de foco, retorno de foco,
  transições e empilhamento.

  TELEPORTE — o VDialog renderiza em .v-overlay-container, fora da
  árvore do componente. Isso divide o CSS em dois blocos:

    <style scoped>  → card, título, texto e ações. São elementos do
                      próprio template, então carregam o atributo de
                      escopo, que viaja junto com o teleporte.

    <style>         → .sisloc-modal-btn--*. Esses botões vêm do slot
                      `actions`, ou seja, pertencem ao componente PAI.
                      Conteúdo de slot nunca recebe o atributo de
                      escopo daqui, então um bloco scoped não os
                      alcançaria. Mantido sob namespace exclusivo.

  CLASSE .sisloc-modal — deliberadamente NÃO aplicada. Medido antes da
  migração, o overlay não possui essa classe e usa z-index 2400 (padrão
  do Vuetify). A regra global `.v-overlay.sisloc-modal` forçaria
  z-index 400 (--sisloc-z-modal), o que rebaixaria o modal para baixo
  de menus e tooltips do Vuetify. Aplicá-la seria regressão, não
  preservação. Ver relatório do Lote 4B.

  Extraído de src/stories/Modal.stories.js sem alteração visual.
-->

<template>
  <VDialog
    :model-value="modelValue"
    :max-width="maxWidth"
    :persistent="persistent"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <VCard :class="['sisloc-modal-card', variantClass]" :style="cssVars">
      <VCardTitle v-if="$slots.title">
        <span
          v-if="icon"
          class="sisloc-modal-card__icon"
          v-html="icon"
        />
        <slot name="title" />
      </VCardTitle>

      <VCardText>
        <slot />
      </VCardText>

      <VCardActions v-if="$slots.actions">
        <slot name="actions" />
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import { computed } from 'vue'
import { VDialog, VCard, VCardTitle, VCardText, VCardActions } from 'vuetify/components'
import { tokens } from '../../tokens/tokens.js'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  /** Abertura do modal — v-model */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * Tipo do modal. Altera apenas o tratamento do título:
   *   erro    → título vermelho
   *   sistema → faixa cinza no topo
   */
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'erro', 'sistema'].includes(v),
  },
  /** SVG do ícone exibido antes do título */
  icon: {
    type: String,
    default: '',
  },
  maxWidth: {
    type: [String, Number],
    default: '580px',
  },
  /** Impede fechar por Escape e clique no scrim */
  persistent: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const variantClass = computed(() =>
  props.variant === 'default' ? null : `sisloc-modal--${props.variant}`,
)

/*
 * Os três valores que já possuem token equivalente entram por custom
 * property no card. Como custom properties herdam pela árvore, elas
 * também chegam ao conteúdo do slot `actions` — que é o que permite ao
 * bloco não scoped abaixo consumir tokens.
 */
const cssVars = {
  '--sisloc-modal-sistema-bg': tokens.primitive.neutral[90],   // #E6E1E6
  '--sisloc-modal-confirm':    tokens.action.confirm.default,  // #4CAF50
  '--sisloc-modal-danger':     tokens.action.danger.default,   // #EA3A3D
}
</script>

<style scoped>
/*
  Estes elementos são renderizados por este componente, então carregam
  o atributo de escopo mesmo depois de teletransportados.
*/
.sisloc-modal-card {
  border-radius: 4px !important;
  box-shadow: 0 11px 15px 0 rgba(0, 0, 0, 0.20) !important;
  overflow: hidden;
}

.sisloc-modal-card__icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.sisloc-modal-card :deep(.v-card-title) {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  font-family: Roboto, sans-serif !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 24px !important;
  letter-spacing: 0.08px !important;
  color: #000 !important;
  padding: 16px 16px 0 16px !important;
  white-space: normal !important;
}

/* Título vermelho — Erro */
.sisloc-modal--erro :deep(.v-card-title) {
  color: #EA3A3D !important;
}

/* Topo cinza — Sistema */
.sisloc-modal--sistema :deep(.v-card-title) {
  background: var(--sisloc-modal-sistema-bg) !important;
  padding: 16px !important;
}

.sisloc-modal-card :deep(.v-card-text) {
  font-family: Roboto, sans-serif !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 22px !important;
  letter-spacing: 0.014px !important;
  color: rgba(0, 0, 0, 0.87) !important;
  padding: 8px 16px 16px 16px !important;
}

.sisloc-modal-card :deep(.v-card-text strong) {
  font-size: 14px !important;
  font-weight: 700 !important;
  line-height: 20px !important;
  letter-spacing: 0.035px !important;
  color: rgba(0, 0, 0, 0.87) !important;
}

.sisloc-modal-card :deep(.v-card-actions) {
  padding: 0 8px 8px 8px !important;
  justify-content: flex-end !important;
  gap: 8px !important;
}

.sisloc-modal-card :deep(.v-card-actions .v-btn) {
  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  letter-spacing: 0.12px !important;
  text-transform: none !important;
  border-radius: 8px !important;
  height: 36px !important;
  padding: 8px 16px !important;
  box-shadow: none !important;
}
</style>

<style>
/*
  BLOCO NÃO SCOPED — necessário e restrito.

  Os botões de ação chegam pelo slot `actions`, portanto são criados
  pelo componente pai e não recebem o atributo de escopo deste arquivo.
  Um bloco scoped não os alcançaria, mesmo com :deep().

  Namespace exclusivo .sisloc-modal-btn--* — nenhum seletor genérico
  para .v-btn, .v-overlay ou .v-dialog.
*/
.sisloc-modal-btn--neutro,
.sisloc-modal-btn--neutro.v-btn {
  background: transparent !important;
  color: #323033 !important;
  border: 2px solid #79767A !important;
}

.sisloc-modal-btn--confirmar,
.sisloc-modal-btn--confirmar.v-btn {
  /* fallback cobre uso fora de um SislocModal, onde a var não existe */
  background: var(--sisloc-modal-confirm, #4CAF50) !important;
  color: #fff !important;
  border: none !important;
}

.sisloc-modal-btn--danger,
.sisloc-modal-btn--danger.v-btn {
  background: var(--sisloc-modal-danger, #EA3A3D) !important;
  color: #fff !important;
  border: none !important;
}
</style>
