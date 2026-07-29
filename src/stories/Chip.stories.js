// ============================================
// SISLOC DS — FORÇA DE VENDAS
// Chip.stories.js v2
//
// Usa tokens.chip com todas as chaves corretas.
// Sem hex fixo — apenas tokens.*
// ============================================

import { tokens } from '../tokens/tokens.js'

export default {
  title: 'Dados/Chip',
  tags: ['autodocs'],
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
      <span :style="{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0 12px',
        height: '20px',
        backgroundColor: args.bg,
        color: args.textColor,
        border: args.border ? '1px solid ' + args.border : 'none',
        borderRadius: '10px',
        fontSize: args.fontSize || '10px',
        fontWeight: args.fontWeight || '400',
        lineHeight: args.lineHeight || '20px',
        letterSpacing: args.letterSpacing || 'normal',
        fontFamily: 'Roboto, sans-serif',
        whiteSpace: 'nowrap',
      }">
        {{ args.label }}
      </span>
    `,
  }),
  argTypes: {
    label:     { control: 'text' },
    bg:        { control: 'color' },
    textColor: { control: 'color' },
    border:    { control: 'color' },
  },
}

// ─── STATUS DE LEAD ───────────────────────────────────────────────────────────

export const Desqualificado = {
  name: '🔴 Desqualificado',
  args: {
    label:     'Desqualificado',
    bg:        tokens.chip.desqualificado.bg,
    textColor: tokens.chip.desqualificado.text,
    border:    tokens.chip.desqualificado.border,
  },
}

export const Convertido = {
  name: '🟢 Convertido',
  args: {
    label:     'Convertido',
    bg:        tokens.chip.convertido.bg,
    textColor: tokens.chip.convertido.text,
    border:    tokens.chip.convertido.border,
  },
}

export const Qualificar = {
  name: '🔵 Qualificar',
  args: {
    label:     'Qualificar',
    bg:        tokens.chip.qualificar.bg,
    textColor: tokens.chip.qualificar.text,
    border:    tokens.chip.qualificar.border,
  },
}

// ─── STATUS DE PROPOSTA ───────────────────────────────────────────────────────

export const Perdido = {
  name: '🔴 Perdido',
  args: {
    label:     'Perdido',
    bg:        tokens.chip.perdido.bg,
    textColor: tokens.chip.perdido.text,
    border:    tokens.chip.perdido.border,
  },
}

export const Ganho = {
  name: '🟢 Ganho',
  args: {
    label:     'Ganho',
    bg:        tokens.chip.ganho.bg,
    textColor: tokens.chip.ganho.text,
    border:    tokens.chip.ganho.border,
  },
}

export const Elaboracao = {
  name: '🟠 Elaboração',
  args: {
    label:     'Elaboração',
    bg:        tokens.chip.elaboracao.bg,
    textColor: tokens.chip.elaboracao.text,
    border:    tokens.chip.elaboracao.border,
  },
}

export const Novo = {
  name: '🔵 Novo',
  args: {
    label:     'Novo',
    bg:        tokens.chip.novo.bg,
    textColor: tokens.chip.novo.text,
    border:    tokens.chip.novo.border,
  },
}

export const Negociacao = {
  name: '🟣 Negociação',
  args: {
    label:     'Negociação',
    bg:        tokens.chip.negociacao.bg,
    textColor: tokens.chip.negociacao.text,
    border:    tokens.chip.negociacao.border,
  },
}

// ─── TEMPERATURA ──────────────────────────────────────────────────────────────

export const Quente = {
  name: '🔥 Quente',
  args: {
    label:     'Quente',
    bg:        tokens.chip.quente.bg,
    textColor: tokens.chip.quente.text,
    border:    tokens.chip.quente.border,
  },
}

export const Morno = {
  name: '🌤️ Morno',
  args: {
    label:     'Morno',
    bg:        tokens.chip.morno.bg,
    textColor: tokens.chip.morno.text,
    border:    tokens.chip.morno.border,
  },
}

export const Frio = {
  name: '❄️ Frio',
  args: {
    label:     'Frio',
    bg:        tokens.chip.frio.bg,
    textColor: tokens.chip.frio.text,
    border:    tokens.chip.frio.border,
  },
}

// ─── OUTLINED ─────────────────────────────────────────────────────────────────

export const Outlined = {
  name: '⬜ Outlined',
  args: {
    label:     'Funil Padrão',
    bg:        tokens.chip.outlined.bg,
    textColor: tokens.chip.outlined.text,
    border:    tokens.chip.outlined.border,
  },
}

// ─── KANBAN ───────────────────────────────────────────────────────────────────

export const KanbanOrigem = {
  name: '📋 Kanban — Origem',
  args: {
    label:         'Feiras e Eventos',
    bg:            tokens.chip.outlined.bg,
    textColor:     tokens.chip.outlined.text,
    border:        tokens.chip.outlined.border,
    fontSize:      tokens.chip.kanban.fontSize,
    fontWeight:    tokens.chip.kanban.fontWeight,
    lineHeight:    tokens.chip.kanban.lineHeight,
    letterSpacing: tokens.chip.kanban.letterSpacing,
  },
}

export const KanbanQuente = {
  name: '🔥 Kanban — Quente',
  args: {
    label:         'Quente',
    bg:            tokens.chip.quente.bg,
    textColor:     tokens.chip.quente.text,
    border:        tokens.chip.quente.border,
    fontSize:      tokens.chip.kanban.fontSize,
    fontWeight:    tokens.chip.kanban.fontWeight,
    lineHeight:    tokens.chip.kanban.lineHeight,
    letterSpacing: tokens.chip.kanban.letterSpacing,
  },
}

export const KanbanMorno = {
  name: '🌤️ Kanban — Morno',
  args: {
    label:         'Morno',
    bg:            tokens.chip.morno.bg,
    textColor:     tokens.chip.morno.text,
    border:        tokens.chip.morno.border,
    fontSize:      tokens.chip.kanban.fontSize,
    fontWeight:    tokens.chip.kanban.fontWeight,
    lineHeight:    tokens.chip.kanban.lineHeight,
    letterSpacing: tokens.chip.kanban.letterSpacing,
  },
}

export const KanbanFrio = {
  name: '❄️ Kanban — Frio',
  args: {
    label:         'Frio',
    bg:            tokens.chip.frio.bg,
    textColor:     tokens.chip.frio.text,
    border:        tokens.chip.frio.border,
    fontSize:      tokens.chip.kanban.fontSize,
    fontWeight:    tokens.chip.kanban.fontWeight,
    lineHeight:    tokens.chip.kanban.lineHeight,
    letterSpacing: tokens.chip.kanban.letterSpacing,
  },
}