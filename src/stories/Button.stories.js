import { VBtn } from 'vuetify/components'
import { tokens } from '../tokens/tokens.js'

export default {
  title: 'Ação/Botão',
  component: VBtn,
  tags: ['autodocs'],
  render: (args) => ({
    components: { VBtn },
    setup() {
      return { args }
    },
    template: `
      <v-btn
        v-bind="args"
        variant="flat"
        :style="{
          backgroundColor: args.bgColor,
          color: args.textColor,
          border: args.borderColor !== 'transparent' ? '1px solid ' + args.borderColor : 'none',
          borderRadius: args.borderRadius,
          textTransform: args.textTransform,
          boxShadow: args.elevation,
          letterSpacing: args.letterSpacing,
          fontFamily: args.fontFamily,
          fontSize: args.fontSize,
          fontWeight: args.fontWeight,
        }"
      >
        {{ args.label }}
      </v-btn>
    `,
  }),
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'SM=32px · MD=40px · LG=48px',
    },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
}

// PRIMARY — action.primary
export const Primary = {
  name: '🟠 Primary',
  args: {
    label: 'Criar Lead',
    disabled: false,
    size: 'default',
    bgColor:      tokens.action.primary.default,
    textColor:    tokens.text.onDark,
    borderColor:  'transparent',
    borderRadius: tokens.radius.field,
    elevation:    tokens.elevation.none,
    textTransform: tokens.typography.button.textTransform,
    letterSpacing: tokens.typography.button.letterSpacing,
    fontFamily:    tokens.typography.fontFamily,
    fontSize:      tokens.typography.button.size,
    fontWeight:    tokens.typography.button.weight,
  },
}

// SECONDARY OUTLINE — action.secondary
export const SecondaryOutline = {
  name: '🔶 Secondary Outline',
  args: {
    label: 'Editar',
    disabled: false,
    size: 'default',
    bgColor:      tokens.action.secondary.default,
    textColor:    tokens.action.secondary.text,
    borderColor:  tokens.action.secondary.border,
    borderRadius: tokens.radius.field,
    elevation:    tokens.elevation.none,
    textTransform: tokens.typography.button.textTransform,
    letterSpacing: tokens.typography.button.letterSpacing,
    fontFamily:    tokens.typography.fontFamily,
    fontSize:      tokens.typography.button.size,
    fontWeight:    tokens.typography.button.weight,
  },
}

// CANCEL — action.cancel
export const Cancel = {
  name: '⬜ Cancel / Close',
  args: {
    label: 'Cancelar',
    disabled: false,
    size: 'default',
    bgColor:      tokens.action.cancel.default,
    textColor:    tokens.action.cancel.text,
    borderColor:  tokens.action.cancel.border,
    borderRadius: tokens.radius.field,
    elevation:    tokens.elevation.none,
    textTransform: tokens.typography.button.textTransform,
    letterSpacing: tokens.typography.button.letterSpacing,
    fontFamily:    tokens.typography.fontFamily,
    fontSize:      tokens.typography.button.size,
    fontWeight:    tokens.typography.button.weight,
  },
}

// CTA GREEN — action.confirm
export const CtaGreen = {
  name: '🟢 CTA Green',
  args: {
    label: 'Salvar',
    disabled: false,
    size: 'default',
    bgColor:      tokens.action.confirm.default,
    textColor:    tokens.text.onDark,
    borderColor:  'transparent',
    borderRadius: tokens.radius.field,
    elevation:    tokens.elevation.none,
    textTransform: tokens.typography.button.textTransform,
    letterSpacing: tokens.typography.button.letterSpacing,
    fontFamily:    tokens.typography.fontFamily,
    fontSize:      tokens.typography.button.size,
    fontWeight:    tokens.typography.button.weight,
  },
}

// DANGER — action.danger
export const Danger = {
  name: '🔴 Danger',
  args: {
    label: 'Sim, excluir',
    disabled: false,
    size: 'default',
    bgColor:      tokens.action.danger.default,
    textColor:    tokens.text.onDark,
    borderColor:  'transparent',
    borderRadius: tokens.radius.field,
    elevation:    tokens.elevation.none,
    textTransform: tokens.typography.button.textTransform,
    letterSpacing: tokens.typography.button.letterSpacing,
    fontFamily:    tokens.typography.fontFamily,
    fontSize:      tokens.typography.button.size,
    fontWeight:    tokens.typography.button.weight,
  },
}

// TEXT — action.tertiary
export const Text = {
  name: '📝 Text',
  args: {
    label: 'Ver mais',
    disabled: false,
    size: 'default',
    bgColor:      tokens.action.tertiary.default,
    textColor:    tokens.action.tertiary.text,
    borderColor:  'transparent',
    borderRadius: tokens.radius.field,
    elevation:    tokens.elevation.none,
    textTransform: tokens.typography.button.textTransform,
    letterSpacing: tokens.typography.button.letterSpacing,
    fontFamily:    tokens.typography.fontFamily,
    fontSize:      tokens.typography.button.size,
    fontWeight:    tokens.typography.button.weight,
  },
}

// DISABLED — disabled
export const Disabled = {
  name: '🚫 Disabled',
  args: {
    label: 'Botão',
    disabled: true,
    size: 'default',
    bgColor:      tokens.disabled.background,
    textColor:    tokens.disabled.text,
    borderColor:  'transparent',
    borderRadius: tokens.radius.field,
    elevation:    tokens.elevation.none,
    textTransform: tokens.typography.button.textTransform,
    letterSpacing: tokens.typography.button.letterSpacing,
    fontFamily:    tokens.typography.fontFamily,
    fontSize:      tokens.typography.button.size,
    fontWeight:    tokens.typography.button.weight,
  },
}