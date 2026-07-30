<template>
  <article
    class="sisloc-card-kanban"
    :class="{ 'sisloc-card-kanban--clickable': clickable }"
    :tabindex="clickable ? 0 : undefined"
    :role="clickable ? 'button' : undefined"
    @click="clickable && $emit('click')"
    @keydown.enter="clickable && $emit('click')"
  >

    <!-- Linha 1 — status + menu -->
    <header class="sisloc-card-kanban__header">
      <span class="sisloc-card-kanban__status">
        <span
          class="sisloc-card-kanban__status-dot"
          :style="{ background: resolvedStatusColor }"
          aria-hidden="true"
        />
        <span class="sisloc-card-kanban__status-label">{{ status }}</span>
      </span>

      <div class="sisloc-card-kanban__menu-wrap">
        <button
          class="sisloc-card-kanban__menu"
          type="button"
          aria-label="Mais ações"
          :aria-expanded="menuOpen"
          @click.stop="menuOpen = !menuOpen"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#79767A"/>
          </svg>
        </button>

        <!-- Menu de ações -->
        <div v-if="menuOpen" class="sisloc-card-kanban__menu-list" role="menu">
          <button
            v-for="item in menuItems"
            :key="item.action"
            class="sisloc-card-kanban__menu-item"
            :class="{ 'sisloc-card-kanban__menu-item--danger': item.danger }"
            type="button"
            role="menuitem"
            @click.stop="onMenuAction(item.action)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </header>

    <!-- Linha 2 — nome do lead -->
    <h3 class="sisloc-card-kanban__name" :title="name">{{ name }}</h3>

    <!-- Linha 3 — empresa -->
    <p class="sisloc-card-kanban__company" :title="company">{{ company }}</p>

    <!-- Linha 4 — chips -->
    <div class="sisloc-card-kanban__tags">
      <span
        v-if="origin"
        class="sisloc-card-kanban__chip sisloc-card-kanban__chip--outlined"
        :title="origin"
      >
        {{ origin }}
      </span>
      <span
        v-if="temperature"
        class="sisloc-card-kanban__chip"
        :style="temperatureStyle"
      >
        {{ temperature }}
      </span>
    </div>

    <!-- Linha 5 — botão de tarefa (3 estados) -->
    <button
      class="sisloc-card-kanban__task"
      :class="`sisloc-card-kanban__task--${taskState}`"
      type="button"
      @click.stop="$emit('task')"
    >
      <svg
        v-if="taskState === 'empty'"
        width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      >
        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
      </svg>
      {{ task || 'Criar Tarefa' }}
    </button>

    <!-- Linha 6 — footer -->
    <footer class="sisloc-card-kanban__footer">
      <SislocTooltip :text="createdAt ? `Criado em ${createdAt}` : ''">
        <span class="sisloc-card-kanban__footer-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" fill="#79767A"/>
          </svg>
        </span>
      </SislocTooltip>

      <SislocTooltip v-if="assignee" :text="assigneeName">
        <span
          class="sisloc-card-kanban__avatar"
          :style="{ background: assigneeColor }"
        >
          {{ assignee }}
        </span>
      </SislocTooltip>
    </footer>

  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import SislocTooltip from '../Tooltip/SislocTooltip.vue'

const props = defineProps({
  /** Status do lead — ex: 'Qualificar', 'Convertido' */
  status: { type: String, default: '' },
  /** Cor do indicador. Omitida usa o mapa de cores conhecidas. */
  statusColor: { type: String, default: '' },
  /** Nome do lead — trunca com ellipsis */
  name: { type: String, required: true },
  /** Empresa do lead */
  company: { type: String, default: '' },
  /** Chip de origem (outlined) */
  origin: { type: String, default: '' },
  /** Temperatura — 'Quente' | 'Morno' | 'Frio' */
  temperature: { type: String, default: '' },
  /** Label da tarefa. Vazio renderiza "Criar Tarefa" em laranja. */
  task: { type: String, default: '' },
  /** Marca a tarefa como atrasada — botão fica vermelho claro */
  taskOverdue: { type: Boolean, default: false },
  /** Data de criação — exibida no tooltip do ícone de calendário */
  createdAt: { type: String, default: '' },
  /** Iniciais do responsável — ex: 'VJ' */
  assignee: { type: String, default: '' },
  /** Nome completo do responsável — exibido no tooltip do avatar */
  assigneeName: { type: String, default: '' },
  /** Cor de fundo do avatar */
  assigneeColor: { type: String, default: '#304FFE' },
  /** Itens do menu de ações */
  menuItems: {
    type: Array,
    default: () => ([
      { label: 'Editar',  action: 'edit' },
      { label: 'Excluir', action: 'delete', danger: true },
    ]),
  },
  /** Torna o card clicável */
  clickable: { type: Boolean, default: true },
})

const emit = defineEmits(['click', 'menu-action', 'task'])

const menuOpen = ref(false)

function onMenuAction(action) {
  menuOpen.value = false
  emit('menu-action', action)
}

/**
 * Estado do botão de tarefa:
 *   'empty'     — sem tarefa → laranja primário + ícone "+"
 *   'overdue'   — tarefa atrasada → vermelho claro
 *   'scheduled' — tarefa agendada → cinza
 */
const taskState = computed(() => {
  if (!props.task) return 'empty'
  return props.taskOverdue ? 'overdue' : 'scheduled'
})

// Cores de status — paleta Vuetify. Override via prop statusColor.
const statusColors = {
  'Qualificar':     '#2962FF', // blue accent-4
  'Convertido':     '#00E676', // green accent-3
  'Desqualificado': '#B71C1C', // red darken-4
}

const resolvedStatusColor = computed(() =>
  props.statusColor || statusColors[props.status] || '#79767A'
)

// Cores dos chips de temperatura — do Figma
const temperatureColors = {
  Quente: { bg: '#FFEBEE', text: '#B71C1C' },
  Morno:  { bg: '#FFF3E0', text: '#BF360C' },
  Frio:   { bg: '#E3F2FD', text: '#0D47A1' },
}

const temperatureStyle = computed(() => {
  const c = temperatureColors[props.temperature] || { bg: '#F1F1F1', text: '#79767A' }
  return { background: c.bg, color: c.text }
})
</script>

<style scoped>
.sisloc-card-kanban {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 153px;
  padding: 9px 10px 6px 9px;
  background: #FFFFFF;
  border: 1px solid #E6E8EC;
  border-radius: 12px;
  font-family: Roboto, sans-serif;
}

.sisloc-card-kanban--clickable {
  cursor: pointer;
  transition: box-shadow 0.15s ease, border-color 0.15s ease;
}

.sisloc-card-kanban--clickable:hover {
  border-color: #D6D0D6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.sisloc-card-kanban--clickable:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: 2px;
}

/* ── Header ── */
.sisloc-card-kanban__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 14px;
  flex-shrink: 0;
}

.sisloc-card-kanban__status {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
}

.sisloc-card-kanban__status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.sisloc-card-kanban__status-label {
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0.2px;
  color: #000000;
  white-space: nowrap;
}

/* ── Menu ── */
.sisloc-card-kanban__menu-wrap {
  position: relative;
  flex-shrink: 0;
}

.sisloc-card-kanban__menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.sisloc-card-kanban__menu:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: 2px;
  border-radius: 2px;
}

.sisloc-card-kanban__menu-list {
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 100; /* tokens.zIndex.dropdown */
  min-width: 130px;
  padding: 8px 0;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
}

.sisloc-card-kanban__menu-item {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  text-align: left;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #1D1B20;
  cursor: pointer;
  white-space: nowrap;
}

.sisloc-card-kanban__menu-item:hover {
  background: rgba(0, 0, 0, 0.04);
}

.sisloc-card-kanban__menu-item--danger {
  color: #EA3A3D;
}

/* ── Nome ── */
.sisloc-card-kanban__name {
  margin: 5px 0 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.8px;
  color: #605D61;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
}

/* ── Empresa ── */
.sisloc-card-kanban__company {
  margin: 2px 0 0;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0.2px;
  color: #212429;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
}

/* ── Chips ── */
.sisloc-card-kanban__tags {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  height: 12px;
  flex-shrink: 0;
  overflow: hidden;
}

.sisloc-card-kanban__chip {
  display: inline-flex;
  align-items: center;
  height: 12px;
  padding: 0 12px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
}

.sisloc-card-kanban__chip--outlined {
  border: 1px solid #E6E1E6;
  background: transparent;
  color: #322F33;
}

/* ── Botão de tarefa — 3 estados ── */
.sisloc-card-kanban__task {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: 19px;
  margin-top: 13px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.048px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  transition: background 0.15s ease;
}

/* Tarefa agendada — cinza */
.sisloc-card-kanban__task--scheduled {
  background: #F5EFF4;
  color: #000000;
}

.sisloc-card-kanban__task--scheduled:hover {
  background: #EDE5EC;
}

/* Tarefa atrasada — vermelho claro (red lighten-4) */
.sisloc-card-kanban__task--overdue {
  background: #FFCDD2;
  color: #000000;
}

.sisloc-card-kanban__task--overdue:hover {
  background: #FFB8BF;
}

/* Sem tarefa — laranja primário */
.sisloc-card-kanban__task--empty {
  background: #EC6A00;
  color: #FFFFFF;
}

.sisloc-card-kanban__task--empty:hover {
  background: #C35700;
}

.sisloc-card-kanban__task:focus-visible {
  outline: 2px solid #EC6A00;
  outline-offset: 1px;
}

/* ── Footer ── */
.sisloc-card-kanban__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  margin-top: 13px;
  padding-top: 4px;
  border-top: 1px solid #E6E8EC;
  flex-shrink: 0;
}

.sisloc-card-kanban__footer-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}

.sisloc-card-kanban__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  flex-shrink: 0;
}
</style>
