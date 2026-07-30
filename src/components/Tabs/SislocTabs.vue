<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocTabs.vue

  Wrapper de VTabs/VTab + VTabsWindow. As abas chegam por `items`;
  o conteúdo de cada painel vem do slot `panel`, para que nenhum
  conteúdo de negócio fique acoplado ao componente.

  Quando o slot `panel` não é usado, o VTabsWindow não é renderizado —
  é o caso das stories que exibem apenas a barra de abas.

  CSS — o injectStyles() original tinha dois grupos distintos:
    · estilos da barra de abas  → migrados para cá
    · estilos do grid de dados  → são conteúdo de demonstração,
      permaneceram na story

  Os `!important` foram preservados: fazem parte da disputa de
  especificidade com as regras do Vuetify. Removê-los mudaria o visual.

  Extraído de src/stories/Tabs.stories.js sem alteração visual.
-->

<template>
  <div class="sisloc-tabs-root" :style="cssVars">
    <VTabs
      class="sisloc-tabs"
      :model-value="modelValue"
      v-bind="$attrs"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <VTab
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
      >{{ item.label }}</VTab>
    </VTabs>

    <VTabsWindow
      v-if="$slots.panel"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <VTabsWindowItem
        v-for="item in items"
        :key="item.value"
        :value="item.value"
      >
        <div class="sisloc-tab-content">
          <slot name="panel" :item="item" />
        </div>
      </VTabsWindowItem>
    </VTabsWindow>
  </div>
</template>

<script setup>
import { VTabs, VTab, VTabsWindow, VTabsWindowItem } from 'vuetify/components'
import { tokens } from '../../tokens/tokens.js'

defineOptions({ inheritAttrs: false })

defineProps({
  /** Aba ativa — corresponde ao `value` de um item */
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  /** Abas: [{ value, label, disabled? }] */
  items: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

/**
 * Só os dois valores que já possuem token equivalente são injetados
 * por custom property. Os demais (#EB7A25, #323033, #D6D6D6, #575757)
 * não têm token correspondente e seguem literais no CSS abaixo —
 * ver relatório do Lote 4A.
 */
const cssVars = {
  '--sisloc-tabs-inactive': tokens.text.secondary,      // #79767A
  '--sisloc-tabs-active':   tokens.action.primary.default, // #EC6A00
}
</script>

<style scoped>
.sisloc-tabs.v-tabs {
  height: 36px !important;
  min-height: 36px !important;
  align-items: flex-start !important;
}

/*
  :deep() é necessário daqui para baixo — .v-tab e os elementos
  internos do slide-group são renderizados pelo Vuetify e não
  carregam o atributo de escopo. Tudo permanece sob .sisloc-tabs
  para não vazar para outras instâncias de v-tabs na página.
*/
.sisloc-tabs :deep(.v-tab) {
  flex: 1 !important;
  flex-shrink: 0 !important;
  height: 36px !important;
  min-height: 36px !important;
  min-width: 0 !important;
  padding: 8px 12px !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 10px !important;
  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  letter-spacing: 0.048px !important;
  text-transform: none !important;
  text-align: center !important;
  color: var(--sisloc-tabs-inactive) !important;
  border-bottom: 1px solid var(--sisloc-tabs-inactive) !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  opacity: 1 !important;
}

.sisloc-tabs :deep(.v-tab--selected) {
  font-weight: 700 !important;
  color: var(--sisloc-tabs-active) !important;
  border-bottom: 2px solid #EB7A25 !important;   /* sem token */
}

.sisloc-tabs :deep(.v-tabs-slider-wrapper),
.sisloc-tabs :deep(.v-slide-group__prev),
.sisloc-tabs :deep(.v-slide-group__next) {
  display: none !important;
}

.sisloc-tabs :deep(.v-tab:hover:not(.v-tab--selected)) {
  color: #323033 !important;                     /* sem token */
  background: rgba(0, 0, 0, 0.04) !important;
}

.sisloc-tabs :deep(.v-tab .v-ripple__container) {
  display: none !important;
}

/* Painel — encaixa visualmente sob a barra de abas */
.sisloc-tab-content {
  padding: 16px;
  background: #fff;
  border: 1px solid #D6D6D6;                     /* sem token */
  border-top: none;
  border-radius: 0 0 8px 8px;
}
</style>
