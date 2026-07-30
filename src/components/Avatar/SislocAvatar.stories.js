// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocAvatar.stories.js
//
// A implementação vive em SislocAvatar.vue.
// ============================================

import SislocAvatar from './SislocAvatar.vue'
import { tokens } from '../../tokens/tokens.js'

const SIZES_TEXT  = tokens.components.avatar.sizes
// Icon e image só existem a partir de 32px
const SIZES_MEDIA = SIZES_TEXT.filter((s) => s >= 32)

export default {
  title: 'Componentes/Avatar',
  component: SislocAvatar,
  parameters: {
    docs: {
      description: {
        component: `
**Avatar** — usa \`v-avatar\` do Vuetify 3.

**3 tipos de conteúdo:**
- \`text\` — iniciais do nome (ex: "VJ"), fundo indigo \`#304FFE\`
- \`icon\` — ícone MDI person, fundo indigo \`#304FFE\`
- \`image\` — foto circular, class rounded

**Tamanhos disponíveis:** \`16 · 24 · 32 · 48 · 64px\`

**Tipografia por tamanho:**
- 16px → 10px · letter-spacing 0.2px
- 24px → 14px · letter-spacing 0.014px
- 32 / 48 / 64px → 16px · letter-spacing 0.5px

**Uso no Força de Vendas:** cards do Kanban, linhas da tabela de leads, header de detalhe do lead.
        `,
      },
    },
  },
}

// ─── Content: Text ───────────────────────────────────────────────────────────

export const TextTodosTamanhos = {
  name: 'Text — Todos os tamanhos',
  render: () => ({
    components: { SislocAvatar },
    setup() {
      return { SIZES_TEXT }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
          <div
            v-for="s in SIZES_TEXT"
            :key="s"
            style="display: flex; flex-direction: column; align-items: center; gap: 8px;"
          >
            <SislocAvatar type="text" :size="s" text="VJ" />
            <span style="font-size: 11px; color: #79767A;">{{ s }}px</span>
          </div>
        </div>
      </div>
    `,
  }),
}

// ─── Content: Icon ───────────────────────────────────────────────────────────

export const IconTodosTamanhos = {
  name: 'Icon — Todos os tamanhos',
  render: () => ({
    components: { SislocAvatar },
    setup() {
      return { SIZES_MEDIA }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
          <div
            v-for="s in SIZES_MEDIA"
            :key="s"
            style="display: flex; flex-direction: column; align-items: center; gap: 8px;"
          >
            <SislocAvatar type="icon" :size="s" />
            <span style="font-size: 11px; color: #79767A;">{{ s }}px</span>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ícone `mdi-account` (person) centralizado. Tamanho do ícone = metade do avatar.',
      },
    },
  },
}

// ─── Content: Image ──────────────────────────────────────────────────────────

export const ImageTodosTamanhos = {
  name: 'Image — Todos os tamanhos',
  render: () => ({
    components: { SislocAvatar },
    setup() {
      // Placeholder de imagem pública para demonstração
      const img = 'https://i.pravatar.cc/150?img=12'
      return { img, SIZES_MEDIA }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
          <div
            v-for="s in SIZES_MEDIA"
            :key="s"
            style="display: flex; flex-direction: column; align-items: center; gap: 8px;"
          >
            <SislocAvatar type="image" :size="s" :src="img" />
            <span style="font-size: 11px; color: #79767A;">{{ s }}px</span>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Foto circular usando `v-img` dentro do `v-avatar`. Tamanhos disponíveis: 32 · 48 · 64px.',
      },
    },
  },
}

// ─── Todos os tipos lado a lado ───────────────────────────────────────────────

export const TodosOsTipos = {
  name: 'Todos os tipos',
  render: () => ({
    components: { SislocAvatar },
    setup() {
      const img = 'https://i.pravatar.cc/150?img=12'
      return { img, SIZES_TEXT, SIZES_MEDIA }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; gap: 48px; flex-wrap: wrap; align-items: flex-end;">

          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <span style="font-size: 11px; color: #79767A; font-weight: 500;">Text</span>
            <div style="display: flex; align-items: flex-end; gap: 12px;">
              <div
                v-for="s in SIZES_TEXT"
                :key="s"
                style="display: flex; flex-direction: column; align-items: center; gap: 6px;"
              >
                <SislocAvatar type="text" :size="s" text="VJ" />
                <span style="font-size: 10px; color: #79767A;">{{ s }}</span>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <span style="font-size: 11px; color: #79767A; font-weight: 500;">Icon</span>
            <div style="display: flex; align-items: flex-end; gap: 12px;">
              <div
                v-for="s in SIZES_MEDIA"
                :key="s"
                style="display: flex; flex-direction: column; align-items: center; gap: 6px;"
              >
                <SislocAvatar type="icon" :size="s" />
                <span style="font-size: 10px; color: #79767A;">{{ s }}</span>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <span style="font-size: 11px; color: #79767A; font-weight: 500;">Image</span>
            <div style="display: flex; align-items: flex-end; gap: 12px;">
              <div
                v-for="s in SIZES_MEDIA"
                :key="s"
                style="display: flex; flex-direction: column; align-items: center; gap: 6px;"
              >
                <SislocAvatar type="image" :size="s" :src="img" />
                <span style="font-size: 10px; color: #79767A;">{{ s }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `,
  }),
}

// ─── Uso no Kanban ────────────────────────────────────────────────────────────

export const UsoKanban = {
  name: 'Uso — Kanban (grupo de avatares)',
  render: () => ({
    components: { SislocAvatar },
    setup() {
      const img1 = 'https://i.pravatar.cc/150?img=1'
      const img2 = 'https://i.pravatar.cc/150?img=2'
      const avatar = tokens.components.avatar
      return { img1, img2, avatar }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <p style="font-size: 11px; color: #79767A; margin: 0 0 12px;">Grupo de avatares sobrepostos — cards do Kanban</p>
        <div style="display: flex; align-items: center;">
          <SislocAvatar
            type="image" :size="24" :src="img1" alt="Avatar 1"
            style="margin-right: -6px; border: 2px solid #fff; z-index: 3;"
          />
          <SislocAvatar
            type="image" :size="24" :src="img2" alt="Avatar 2"
            style="margin-right: -6px; border: 2px solid #fff; z-index: 2;"
          />
          <!--
            Contador de excedentes: combinação fora da escala padrão
            (24px com tipografia de 16px e padding 6px) — usa o slot
            para não poluir a API do componente com props de exceção.
          -->
          <SislocAvatar
            :size="24"
            :style="{ background: avatar.background, border: '2px solid #fff', zIndex: 1, padding: '6px' }"
          >
            <span style="color:#fff;font-size:10px;line-height:12px;letter-spacing:0.2px;">+3</span>
          </SislocAvatar>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Avatares 24px sobrepostos com `margin-right: -6px` e borda branca — padrão do Kanban de leads.',
      },
    },
  },
}
