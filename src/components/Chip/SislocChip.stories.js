// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocChip.stories.js
//
// A implementação vive em SislocChip.vue.
// As stories seguem agrupadas pelo status de negócio que
// representam — o mapeamento para a variante semântica é
// explícito em cada uma.
// ============================================

import SislocChip from './SislocChip.vue'

export default {
  title: 'Dados/Chip',
  component: SislocChip,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger', 'progress'],
      description: 'Significado do chip — define as cores via tokens',
    },
    size: {
      control: 'select',
      options: ['default', 'kanban'],
      description: 'Contexto de uso — altera apenas a tipografia',
    },
  },
}

// ─── STATUS DE LEAD ───────────────────────────────────────────────────────────

export const Desqualificado = {
  name: '🔴 Desqualificado',
  args: { label: 'Desqualificado', variant: 'danger' },
}

export const Convertido = {
  name: '🟢 Convertido',
  args: { label: 'Convertido', variant: 'success' },
}

export const Qualificar = {
  name: '🔵 Qualificar',
  args: { label: 'Qualificar', variant: 'info' },
}

// ─── STATUS DE PROPOSTA ───────────────────────────────────────────────────────

export const Perdido = {
  name: '🔴 Perdido',
  args: { label: 'Perdido', variant: 'danger' },
}

export const Ganho = {
  name: '🟢 Ganho',
  args: { label: 'Ganho', variant: 'success' },
}

export const Elaboracao = {
  name: '🟠 Elaboração',
  args: { label: 'Elaboração', variant: 'warning' },
}

export const Novo = {
  name: '🔵 Novo',
  args: { label: 'Novo', variant: 'info' },
}

export const Negociacao = {
  name: '🟣 Negociação',
  args: { label: 'Negociação', variant: 'progress' },
}

// ─── TEMPERATURA ──────────────────────────────────────────────────────────────

export const Quente = {
  name: '🔥 Quente',
  args: { label: 'Quente', variant: 'danger' },
}

export const Morno = {
  name: '🌤️ Morno',
  args: { label: 'Morno', variant: 'warning' },
}

export const Frio = {
  name: '❄️ Frio',
  args: { label: 'Frio', variant: 'info' },
}

// ─── OUTLINED ─────────────────────────────────────────────────────────────────

export const Outlined = {
  name: '⬜ Outlined',
  args: { label: 'Funil Padrão', variant: 'neutral' },
}

// ─── KANBAN ───────────────────────────────────────────────────────────────────

export const KanbanOrigem = {
  name: '📋 Kanban — Origem',
  args: { label: 'Feiras e Eventos', variant: 'neutral', size: 'kanban' },
}

export const KanbanQuente = {
  name: '🔥 Kanban — Quente',
  args: { label: 'Quente', variant: 'danger', size: 'kanban' },
}

export const KanbanMorno = {
  name: '🌤️ Kanban — Morno',
  args: { label: 'Morno', variant: 'warning', size: 'kanban' },
}

export const KanbanFrio = {
  name: '❄️ Kanban — Frio',
  args: { label: 'Frio', variant: 'info', size: 'kanban' },
}
