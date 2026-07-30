// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocButton.stories.js
//
// A implementação vive em SislocButton.vue.
// Esta story apenas demonstra as variantes semânticas.
// ============================================

import SislocButton from './SislocButton.vue'

export default {
  title: 'Ação/Botão',
  component: SislocButton,
  tags: ['autodocs'],
  argTypes: {
    label:    { control: 'text' },
    disabled: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'cancel', 'success', 'danger', 'tertiary'],
      description: 'Intenção da ação — define as cores via tokens',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'SM=32px · MD=40px · LG=48px',
    },
  },
}

// PRIMARY — action.primary
export const Primary = {
  name: '🟠 Primary',
  args: {
    label: 'Criar Lead',
    variant: 'primary',
    disabled: false,
    size: 'default',
  },
}

// SECONDARY OUTLINE — action.secondary
export const SecondaryOutline = {
  name: '🔶 Secondary Outline',
  args: {
    label: 'Editar',
    variant: 'secondary',
    disabled: false,
    size: 'default',
  },
}

// CANCEL — action.cancel
export const Cancel = {
  name: '⬜ Cancel / Close',
  args: {
    label: 'Cancelar',
    variant: 'cancel',
    disabled: false,
    size: 'default',
  },
}

// CTA GREEN — action.confirm
export const CtaGreen = {
  name: '🟢 CTA Green',
  args: {
    label: 'Salvar',
    variant: 'success',
    disabled: false,
    size: 'default',
  },
}

// DANGER — action.danger
export const Danger = {
  name: '🔴 Danger',
  args: {
    label: 'Sim, excluir',
    variant: 'danger',
    disabled: false,
    size: 'default',
  },
}

// TEXT — action.tertiary
export const Text = {
  name: '📝 Text',
  args: {
    label: 'Ver mais',
    variant: 'tertiary',
    disabled: false,
    size: 'default',
  },
}

// DISABLED — disabled
export const Disabled = {
  name: '🚫 Disabled',
  args: {
    label: 'Botão',
    variant: 'primary',
    disabled: true,
    size: 'default',
  },
}
