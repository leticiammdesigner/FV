<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocBreadcrumb.vue

  Navegação hierárquica discreta. O último item é sempre a página
  atual — sem hover, sem cursor de link.

  Extraído de src/stories/Breadcrumb.stories.js sem alteração visual.
  Todos os seletores do injectStyles original eram locais (nenhum
  overlay, teleport ou classe global), então o bloco inteiro coube
  em <style scoped>.
-->

<template>
  <nav class="sisloc-breadcrumb" :aria-label="ariaLabel">
    <button
      v-if="showBack"
      type="button"
      class="sisloc-breadcrumb__back"
      aria-label="Voltar"
      @click="emit('back')"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.12 8.94667L18.3 7.13334L9.43335 16L18.3 24.8667L20.12 23.0533L13.08 16L20.12 8.94667Z"
          fill="#79767A"
        />
      </svg>
    </button>

    <div class="sisloc-breadcrumb__items">
      <template v-for="(item, i) in items" :key="i">
        <span
          v-if="i === items.length - 1"
          class="sisloc-breadcrumb__item sisloc-breadcrumb__item--current"
          aria-current="page"
        >{{ item.label }}</span>

        <a
          v-else
          class="sisloc-breadcrumb__item"
          :href="item.href"
          @click="emit('item-click', item, i)"
        >{{ item.label }}</a>

        <span
          v-if="i < items.length - 1"
          class="sisloc-breadcrumb__divider"
        >{{ divider }}</span>
      </template>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  /** Níveis da navegação. O último é tratado como página atual. */
  items: {
    type: Array,
    default: () => [],
  },
  /** Exibe o chevron_left de voltar à esquerda */
  showBack: {
    type: Boolean,
    default: true,
  },
  divider: {
    type: String,
    default: '/',
  },
  ariaLabel: {
    type: String,
    default: 'Navegação',
  },
})

const emit = defineEmits(['back', 'item-click'])
</script>

<style scoped>
.sisloc-breadcrumb {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 32px;
  font-family: Roboto, sans-serif;
}

.sisloc-breadcrumb__back {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.sisloc-breadcrumb__items {
  display: flex;
  align-items: center;
}

.sisloc-breadcrumb__item {
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.048px;
  color: #79767A;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  text-decoration: none;
}

.sisloc-breadcrumb__item:hover {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  color: #79767A;
}

/* Último item — página atual, sem hover */
.sisloc-breadcrumb__item--current {
  cursor: default;
}

.sisloc-breadcrumb__item--current:hover {
  text-decoration: none;
}

.sisloc-breadcrumb__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #79767A;
  user-select: none;
}
</style>
