<template>
  <div class="sisloc-empty-state">

    <!-- Ilustração — slot permite trocar pelo asset real do Figma -->
    <div class="sisloc-empty-state__illustration">
      <slot name="illustration">
        <svg width="140" height="130" viewBox="0 0 140 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Marcas decorativas -->
          <path d="M30 18L34 14" stroke="#D6D0D6" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M26 26L21 24" stroke="#D6D0D6" stroke-width="2.5" stroke-linecap="round"/>

          <!-- Prancheta -->
          <rect x="38" y="14" width="62" height="78" rx="8" stroke="#D6D0D6" stroke-width="3" fill="#FFFFFF"/>
          <rect x="56" y="8" width="26" height="13" rx="4" stroke="#D6D0D6" stroke-width="3" fill="#FFFFFF"/>

          <!-- Itens da lista -->
          <circle cx="53" cy="40" r="4" stroke="#D6D0D6" stroke-width="3"/>
          <rect x="64" y="37" width="26" height="6" rx="3" fill="#D6D0D6"/>

          <circle cx="53" cy="57" r="4" stroke="#D6D0D6" stroke-width="3"/>
          <rect x="64" y="54" width="20" height="6" rx="3" fill="#D6D0D6"/>

          <circle cx="53" cy="74" r="4" stroke="#D6D0D6" stroke-width="3"/>
          <rect x="64" y="71" width="14" height="6" rx="3" fill="#D6D0D6"/>

          <!-- Círculo de exclamação -->
          <circle cx="99" cy="70" r="17" fill="#FFFFFF" stroke="#D6D0D6" stroke-width="3"/>
          <rect x="97" y="60" width="4" height="12" rx="2" fill="#D6D0D6"/>
          <circle cx="99" cy="78" r="2.5" fill="#D6D0D6"/>

          <!-- Sombra -->
          <ellipse cx="70" cy="103" rx="42" ry="5" fill="#E8E4E8"/>
        </svg>
      </slot>
    </div>

    <!-- Título -->
    <p class="sisloc-empty-state__title">{{ title }}</p>

    <!-- Subtítulo -->
    <p v-if="subtitle" class="sisloc-empty-state__subtitle">{{ subtitle }}</p>

    <!-- Ação — só renderiza se houver actionLabel ou slot -->
    <div v-if="actionLabel || $slots.action" class="sisloc-empty-state__action">
      <slot name="action">
        <button
          type="button"
          class="sisloc-empty-state__btn"
          @click="$emit('action')"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#EC6A00"/>
          </svg>
          {{ actionLabel }}
        </button>
      </slot>
    </div>

  </div>
</template>

<script setup>
defineProps({
  /** Título principal */
  title: {
    type: String,
    default: 'Nenhum registro cadastrado',
  },
  /** Texto de apoio abaixo do título */
  subtitle: {
    type: String,
    default: 'Cadastre um registro para visualizar nesta página',
  },
  /** Label do botão de ação — omitir para não exibir botão */
  actionLabel: {
    type: String,
    default: '',
  },
})

defineEmits(['action'])
</script>

<style scoped>
.sisloc-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 48px 16px;
  text-align: center;
  font-family: Roboto, sans-serif;
}

.sisloc-empty-state__illustration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.sisloc-empty-state__title {
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.05px;
  color: #1F1F1F;
  margin: 0;
}

.sisloc-empty-state__subtitle {
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.014px;
  color: #666666;
  margin: 0;
}

.sisloc-empty-state__action {
  margin-top: 16px;
}

.sisloc-empty-state__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 40px;
  padding: 8px 16px;
  border: 2px solid #EC6A00;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.048px;
  color: #EC6A00;
  transition: background 0.15s ease;
}

.sisloc-empty-state__btn:hover {
  background: rgba(236, 106, 0, 0.08);
}

.sisloc-empty-state__btn:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: 2px;
}
</style>
