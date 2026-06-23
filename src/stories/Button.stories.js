import { VBtn } from 'vuetify/components'

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
          borderRadius: '8px',
          textTransform: 'none',
          boxShadow: 'none',
          letterSpacing: 'normal',
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

// PRIMARY — Ação principal da marca
export const Primary = {
  name: '🟠 Primary',
  args: {
    label: 'Criar Lead',
    disabled: false,
    size: 'default',
    bgColor: '#EC6A00',
    textColor: '#FFFFFF',
    borderColor: 'transparent',
  },
}

// SECONDARY OUTLINE — Ação secundária
export const SecondaryOutline = {
  name: '🔶 Secondary Outline',
  args: {
    label: 'Editar',
    disabled: false,
    size: 'default',
    bgColor: 'transparent',
    textColor: '#EC6A00',
    borderColor: '#EC6A00',
  },
}

// CANCEL — Cancelamento e saída
export const Cancel = {
  name: '⬜ Cancel / Close',
  args: {
    label: 'Cancelar',
    disabled: false,
    size: 'default',
    bgColor: 'transparent',
    textColor: '#1D1B20',
    borderColor: '#79767A',
  },
}

// CTA GREEN — Confirmação e conclusão
export const CtaGreen = {
  name: '🟢 CTA Green',
  args: {
    label: 'Salvar',
    disabled: false,
    size: 'default',
    bgColor: '#4CAF50',
    textColor: '#FFFFFF',
    borderColor: 'transparent',
  },
}

// DANGER — Ação destrutiva
export const Danger = {
  name: '🔴 Danger',
  args: {
    label: 'Sim, excluir',
    disabled: false,
    size: 'default',
    bgColor: '#EA3A3D',
    textColor: '#FFFFFF',
    borderColor: 'transparent',
  },
}

// TEXT — Ação terciária
export const Text = {
  name: '📝 Text',
  args: {
    label: 'Ver mais',
    disabled: false,
    size: 'default',
    bgColor: 'transparent',
    textColor: '#EC6A00',
    borderColor: 'transparent',
  },
}

// DISABLED — Estado desabilitado (todos os tipos)
export const Disabled = {
  name: '🚫 Disabled',
  args: {
    label: 'Botão',
    disabled: true,
    size: 'default',
    bgColor: '#E6E1E6',
    textColor: '#CAC5CA',
    borderColor: 'transparent',
  },
}