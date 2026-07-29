// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocSearchBar.stories.js v2
//
// Variantes:
//   gray  — fundo cinza (rgba 0,0,0,0.04) sem borda
//           uso: toolbar em páginas com fundo branco
//   white — fundo branco com borda #79767A
//           uso: toolbar em páginas com fundo cinza (ex: detalhe do lead)
// ============================================

import { ref } from 'vue'
import SislocSearchBar from './SislocSearchBar.vue'

export default {
  title: 'Componentes/SearchBar',
  component: SislocSearchBar,
  parameters: {
    docs: {
      description: {
        component: `
**SearchBar** — campo de busca da toolbar.

**2 variantes:**
- \`gray\` — fundo cinza \`rgba(0,0,0,0.04)\`, sem borda. Uso em páginas com **fundo branco**.
- \`white\` — fundo branco com borda \`#79767A\`. Uso em páginas com **fundo cinza** (ex: detalhe do lead).

**Props:**
- \`v-model\` — valor do campo
- \`variant\` — \`'gray'\` (default) | \`'white'\`
- \`placeholder\` — texto de placeholder
- \`disabled\` — desabilita o campo
        `,
      },
    },
  },
}

// ─── Variante Gray ────────────────────────────────────────────────────────────

export const Gray = {
  name: 'Gray (fundo branco)',
  render: () => ({
    components: { SislocSearchBar },
    setup() {
      const v1 = ref('')
      const v2 = ref('Construtora Alpha')
      return { v1, v2 }
    },
    template: `
      <div style="padding: 24px; background: #FFFFFF; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 16px;">
        <p style="font-size: 11px; color: #79767A; margin: 0;">Variante <strong>gray</strong> — fundo cinza, sem borda. Uso em páginas brancas.</p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div>
            <p style="font-size: 11px; color: #79767A; margin: 0 0 6px;">Default (vazio)</p>
            <SislocSearchBar v-model="v1" variant="gray" placeholder="Buscar lead..." />
          </div>
          <div>
            <p style="font-size: 11px; color: #79767A; margin: 0 0 6px;">Com valor</p>
            <SislocSearchBar v-model="v2" variant="gray" placeholder="Buscar lead..." />
          </div>
        </div>
      </div>
    `,
  }),
}

// ─── Variante White ───────────────────────────────────────────────────────────

export const White = {
  name: 'White (fundo cinza)',
  render: () => ({
    components: { SislocSearchBar },
    setup() {
      const v1 = ref('')
      const v2 = ref('Fernando Carvalhosa')
      return { v1, v2 }
    },
    template: `
      <div style="padding: 24px; background: #F1F1F1; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 16px;">
        <p style="font-size: 11px; color: #605D61; margin: 0;">Variante <strong>white</strong> — fundo branco com borda. Uso em páginas cinza (ex: detalhe do lead).</p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div>
            <p style="font-size: 11px; color: #605D61; margin: 0 0 6px;">Default (vazio)</p>
            <SislocSearchBar v-model="v1" variant="white" placeholder="Buscar..." />
          </div>
          <div>
            <p style="font-size: 11px; color: #605D61; margin: 0 0 6px;">Com valor</p>
            <SislocSearchBar v-model="v2" variant="white" placeholder="Buscar..." />
          </div>
        </div>
      </div>
    `,
  }),
}

// ─── Comparação lado a lado ───────────────────────────────────────────────────

export const Comparacao = {
  name: 'Comparação — Gray vs White',
  render: () => ({
    components: { SislocSearchBar },
    setup() {
      const vg = ref('')
      const vw = ref('')
      return { vg, vw }
    },
    template: `
      <div style="font-family: Roboto, sans-serif; display: flex;">
        <div style="padding: 24px; background: #FFFFFF; flex: 1; display: flex; flex-direction: column; gap: 8px;">
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px; font-weight: 500;">Página branca → usa Gray</p>
          <SislocSearchBar v-model="vg" variant="gray" placeholder="Buscar lead..." />
        </div>
        <div style="padding: 24px; background: #F1F1F1; flex: 1; display: flex; flex-direction: column; gap: 8px;">
          <p style="font-size: 11px; color: #605D61; margin: 0 0 8px; font-weight: 500;">Página cinza → usa White</p>
          <SislocSearchBar v-model="vw" variant="white" placeholder="Buscar..." />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Qual variante usar depende do fundo da página. Gray em fundo branco, White em fundo cinza.',
      },
    },
  },
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled = {
  name: 'Disabled',
  render: () => ({
    components: { SislocSearchBar },
    setup() {
      const v = ref('')
      return { v }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 12px;">
        <SislocSearchBar v-model="v" variant="gray"  placeholder="Buscar..." disabled />
        <SislocSearchBar v-model="v" variant="white" placeholder="Buscar..." disabled />
      </div>
    `,
  }),
}

// ─── Interativo ───────────────────────────────────────────────────────────────

export const Interativo = {
  name: 'Interativo',
  render: () => ({
    components: { SislocSearchBar },
    setup() {
      const value   = ref('')
      const variant = ref('gray')
      return { value, variant }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 16px;"
        :style="{ background: variant === 'white' ? '#F1F1F1' : '#FFFFFF' }">

        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #79767A;">Variante:</span>
          <button
            v-for="v in ['gray', 'white']" :key="v"
            @click="variant = v"
            :style="{
              padding: '4px 12px', borderRadius: '4px', fontSize: '11px',
              fontFamily: 'Roboto, sans-serif', cursor: 'pointer', border: '1px solid',
              borderColor: variant === v ? '#EC6A00' : '#E6E1E6',
              background:  variant === v ? '#EC6A00' : 'transparent',
              color:       variant === v ? '#fff'    : '#79767A',
            }"
          >{{ v }}</button>
        </div>

        <SislocSearchBar v-model="value" :variant="variant" placeholder="Buscar lead..." />

        <p style="font-size: 12px; color: #79767A; margin: 0;">
          Valor: <strong style="color:#1D1B20;">{{ value || '(vazio)' }}</strong>
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alterne entre as variantes para ver o comportamento em cada contexto de fundo.',
      },
    },
  },
}

// ─── Uso em toolbar ───────────────────────────────────────────────────────────

export const UsoToolbar = {
  name: 'Uso — Toolbar (contexto real)',
  render: () => ({
    components: { SislocSearchBar },
    setup() {
      const search = ref('')
      return { search }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 24px;">

        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">Listagem de Leads — fundo branco → SearchBar gray</p>
          <div style="
            display: flex; align-items: center; justify-content: space-between;
            padding: 8px 16px; background: #fff;
            border: 1px solid #E6E1E6; border-radius: 8px; width: 900px;
          ">
            <span style="font-size: 14px; font-weight: 500; color: #1D1B20;">Leads</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <SislocSearchBar v-model="search" variant="gray" placeholder="Buscar lead..." />
            </div>
          </div>
        </div>

        <div>
          <p style="font-size: 11px; color: #605D61; margin: 0 0 8px;">Detalhe do Lead — fundo cinza → SearchBar white</p>
          <div style="
            display: flex; align-items: center; justify-content: space-between;
            padding: 8px 16px; background: #F1F1F1;
            border-radius: 8px; width: 900px;
          ">
            <span style="font-size: 14px; font-weight: 500; color: #1D1B20;">Tarefas</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <SislocSearchBar v-model="search" variant="white" placeholder="Buscar tarefa..." />
            </div>
          </div>
        </div>

      </div>
    `,
  }),
}
