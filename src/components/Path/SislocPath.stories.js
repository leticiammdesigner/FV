import { ref } from 'vue'

import SislocPath from './SislocPath.vue'

const ETAPAS = [
  'Novo',
  'Conectado',
  'Trabalhando',
  'Fechamento',
  'Convertido',
]

export default {
  title: 'Componentes/Navegação/Stepper Path',
  component: SislocPath,

  parameters: {
    layout: 'padded',
  },

  argTypes: {
    modelValue: {
      name: 'Etapa ativa',
      control: {
        type: 'range',
        min: 0,
        max: ETAPAS.length - 1,
        step: 1,
      },
    },

    interactive: {
      control: 'boolean',
    },

    fluid: {
      control: 'boolean',
    },

    itemWidth: {
      control: 'number',
    },

    minItemWidth: {
      control: 'number',
    },
  },
}

export const Playground = {
  args: {
    steps: ETAPAS,
    modelValue: 1,
    interactive: true,
    fluid: false,
    itemWidth: 205,
    minItemWidth: 160,
  },

  render: args => ({
    components: {
      SislocPath,
    },

    setup() {
      const active = ref(args.modelValue)

      return {
        args,
        active,
      }
    },

    template: `
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: 20px;
        "
      >
        <SislocPath
          v-model="active"
          :steps="args.steps"
          :interactive="args.interactive"
          :fluid="args.fluid"
          :item-width="args.itemWidth"
          :min-item-width="args.minItemWidth"
        />

        <p
          style="
            margin: 0;
            font: 400 12px/20px Roboto, sans-serif;
            color: #607d8b;
          "
        >
          Etapa atual:
          <strong>{{ ETAPAS[active] }}</strong>
        </p>
      </div>
    `,
  }),
}

export const Etapa1Novo = {
  args: {
    steps: ETAPAS,
    modelValue: 0,
    itemWidth: 205,
  },
}

export const Etapa2Conectado = {
  args: {
    steps: ETAPAS,
    modelValue: 1,
    itemWidth: 205,
  },
}

export const Etapa3Trabalhando = {
  args: {
    steps: ETAPAS,
    modelValue: 2,
    itemWidth: 205,
  },
}

export const Etapa4Fechamento = {
  args: {
    steps: ETAPAS,
    modelValue: 3,
    itemWidth: 205,
  },
}

export const Etapa5Convertido = {
  args: {
    steps: ETAPAS,
    modelValue: 4,
    itemWidth: 205,
  },
}

export const TodosOsEstados = {
  render: () => ({
    components: {
      SislocPath,
    },

    setup() {
      return {
        ETAPAS,
      }
    },

    template: `
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: 28px;
        "
      >
        <section
          v-for="(_, activeIndex) in ETAPAS"
          :key="activeIndex"
        >
          <p
            style="
              margin: 0 0 8px;
              font: 400 11px/16px Roboto, sans-serif;
              color: #79767a;
            "
          >
            Etapa {{ activeIndex + 1 }} ativa —
            {{ ETAPAS[activeIndex] }}
          </p>

          <SislocPath
            :steps="ETAPAS"
            :model-value="activeIndex"
            :item-width="205"
          />
        </section>
      </div>
    `,
  }),
}

export const ResponsivoFluido = {
  args: {
    steps: ETAPAS,
    modelValue: 1,
    interactive: true,
    fluid: true,
    minItemWidth: 160,
  },

  decorators: [
    () => ({
      template: `
        <div style="width: 100%; max-width: 1041px;">
          <story />
        </div>
      `,
    }),
  ],
}

export const TesteSobreFundoColorido = {
  args: {
    steps: ETAPAS,
    modelValue: 1,
    interactive: true,
    itemWidth: 205,
  },

  decorators: [
    () => ({
      template: `
        <div
          style="
            padding: 32px;
            background: #eef2f6;
          "
        >
          <story />
        </div>
      `,
    }),
  ],
}