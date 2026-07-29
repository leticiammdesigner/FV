// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocDatepicker.stories.js
//
// Campo de data seguindo o padrão de input do DS:
//   v-text-field outlined · density comfortable · 48px
//   floating label · ícone calendário à direita (append-inner)
//
// Picker:
//   Header laranja só com mês/ano + navegação (sem faixa grande)
//   Grid de dias · hoje destacado · selecionado em laranja
//   Footer: Limpar (vermelho) · Cancelar (neutro) · Confirmar (verde CTA)
//
// v-model: string DD/MM/YYYY
// ============================================

import { ref } from 'vue'
import SislocDatepicker from './SislocDatepicker.vue'

export default {
  title: 'Componentes/Datepicker',
  component: SislocDatepicker,
  parameters: {
    docs: {
      description: {
        component: `
**Datepicker** — campo de data no padrão de input do DS.

**Campo:** \`v-text-field\` outlined · density comfortable · \`48px\` · floating label · ícone \`mdi-calendar\` à direita

**Picker:**
- Header laranja — só mês/ano + botões de navegação
- Grid de dias — hoje destacado em laranja, selecionado com fundo laranja
- Footer — Limpar (outlined vermelho) · Cancelar (outlined neutro) · Confirmar (verde CTA)

**v-model:** string no formato \`DD/MM/YYYY\`

**Props:** \`label\` · \`required\` · \`disabled\` · \`errorMessages\` · \`hint\`
        `,
      },
    },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — campo vazio */
export const Default = {
  name: 'Default (vazio)',
  render: () => ({
    components: { SislocDatepicker },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="padding: 24px; max-width: 407px; font-family: Roboto, sans-serif;">
        <SislocDatepicker v-model="value" label="Data de fechamento" />
        <p style="font-size: 12px; color: #79767A; margin: 16px 0 0;">
          Valor: <strong>{{ value || '(vazio)' }}</strong>
        </p>
      </div>
    `,
  }),
}

/** Com valor pré-selecionado */
export const ComValor = {
  name: 'Com valor',
  render: () => ({
    components: { SislocDatepicker },
    setup() {
      const value = ref('24/07/2026')
      return { value }
    },
    template: `
      <div style="padding: 24px; max-width: 407px; font-family: Roboto, sans-serif;">
        <SislocDatepicker v-model="value" label="Data de fechamento" />
        <p style="font-size: 12px; color: #79767A; margin: 16px 0 0;">
          Valor: <strong>{{ value }}</strong>
        </p>
      </div>
    `,
  }),
}

/** Obrigatório */
export const Obrigatorio = {
  name: 'Obrigatório',
  render: () => ({
    components: { SislocDatepicker },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="padding: 24px; max-width: 407px; font-family: Roboto, sans-serif;">
        <SislocDatepicker
          v-model="value"
          label="Previsão de fechamento *"
          required
        />
      </div>
    `,
  }),
}

/** Com erro */
export const ComErro = {
  name: 'Com Erro',
  render: () => ({
    components: { SislocDatepicker },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="padding: 24px; max-width: 407px; font-family: Roboto, sans-serif;">
        <SislocDatepicker
          v-model="value"
          label="Previsão de fechamento *"
          required
          :error-messages="['Campo obrigatório']"
        />
      </div>
    `,
  }),
}

/** Disabled */
export const Disabled = {
  name: 'Disabled',
  render: () => ({
    components: { SislocDatepicker },
    setup() {
      const value = ref('24/07/2026')
      return { value }
    },
    template: `
      <div style="padding: 24px; max-width: 407px; font-family: Roboto, sans-serif;">
        <SislocDatepicker
          v-model="value"
          label="Data de fechamento"
          disabled
        />
      </div>
    `,
  }),
}

/** No contexto do form de Criar Negócio */
export const FormCriarNegocio = {
  name: 'Form — Criar Negócio',
  render: () => ({
    components: { SislocDatepicker },
    setup() {
      const previsao    = ref('')
      const dataInicio  = ref('')
      return { previsao, dataInicio }
    },
    template: `
      <div style="padding: 24px; max-width: 900px; font-family: Roboto, sans-serif; display: flex; gap: 16px;">
        <SislocDatepicker
          v-model="previsao"
          label="Previsão de fechamento *"
          required
          style="flex: 1;"
        />
        <SislocDatepicker
          v-model="dataInicio"
          label="Data de início"
          style="flex: 1;"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Dois datepickers lado a lado — contexto real do form de Criar Negócio.',
      },
    },
  },
}

/** Todos os estados */
export const TodosEstados = {
  name: 'Todos os estados',
  render: () => ({
    components: { SislocDatepicker },
    setup() {
      const v1 = ref('')
      const v2 = ref('24/07/2026')
      const v3 = ref('')
      const v4 = ref('24/07/2026')
      return { v1, v2, v3, v4 }
    },
    template: `
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 407px; font-family: Roboto, sans-serif;">
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Default (vazio)</p>
          <SislocDatepicker v-model="v1" label="Data" />
        </div>
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Com valor</p>
          <SislocDatepicker v-model="v2" label="Data" />
        </div>
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Com erro</p>
          <SislocDatepicker v-model="v3" label="Data *" :error-messages="['Campo obrigatório']" />
        </div>
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Disabled</p>
          <SislocDatepicker v-model="v4" label="Data" disabled />
        </div>
      </div>
    `,
  }),
}
