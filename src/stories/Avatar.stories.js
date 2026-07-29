// ============================================
// SISLOC DS — FORÇA DE VENDAS
// Avatar.stories.js
//
// Baseado no node 40008110-152 (Sisloc DS | Componentes)
//
// 3 content types:
//   text  — iniciais do nome, fundo #304FFE
//   icon  — mdi-account (Material Icons), fundo #304FFE
//   image — foto circular, class=rounded
//
// Tamanhos: 16 · 24 · 32 · 48 · 64px
//
// Tipografia por tamanho:
//   16px → 10px regular · letter-spacing 0.2px · line-height 12px
//   24px → 14px regular · letter-spacing 0.014px · line-height 22px
//   32 / 48 / 64px → 16px regular · letter-spacing 0.5px · line-height 24px
//
// Usa v-avatar do Vuetify 3
// ============================================

import { VAvatar, VIcon, VImg } from 'vuetify/components'
import { tokens } from '../tokens/tokens.js'

// Tipografia por tamanho — conforme Figma
const typoBySize = {
  16: { fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' },
  24: { fontSize: '14px', lineHeight: '22px', letterSpacing: '0.014px' },
  32: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' },
  48: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' },
  64: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' },
}

const AVATAR_BG = '#304FFE'
const AVATAR_TEXT_COLOR = '#FFFFFF'

export default {
  title: 'Componentes/Avatar',
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
    components: { VAvatar },
    setup() {
      return { typoBySize, AVATAR_BG, AVATAR_TEXT_COLOR }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="16" :style="{ background: AVATAR_BG, padding: '10px' }">
              <span :style="{
                color: AVATAR_TEXT_COLOR,
                fontSize: typoBySize[16].fontSize,
                lineHeight: typoBySize[16].lineHeight,
                letterSpacing: typoBySize[16].letterSpacing,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }">VJ</span>
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">16px</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="24" :style="{ background: AVATAR_BG, padding: '10px' }">
              <span :style="{
                color: AVATAR_TEXT_COLOR,
                fontSize: typoBySize[24].fontSize,
                lineHeight: typoBySize[24].lineHeight,
                letterSpacing: typoBySize[24].letterSpacing,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }">VJ</span>
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">24px</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="32" :style="{ background: AVATAR_BG, padding: '10px' }">
              <span :style="{
                color: AVATAR_TEXT_COLOR,
                fontSize: typoBySize[32].fontSize,
                lineHeight: typoBySize[32].lineHeight,
                letterSpacing: typoBySize[32].letterSpacing,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }">VJ</span>
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">32px</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="48" :style="{ background: AVATAR_BG, padding: '10px' }">
              <span :style="{
                color: AVATAR_TEXT_COLOR,
                fontSize: typoBySize[48].fontSize,
                lineHeight: typoBySize[48].lineHeight,
                letterSpacing: typoBySize[48].letterSpacing,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }">VJ</span>
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">48px</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="64" :style="{ background: AVATAR_BG, padding: '10px' }">
              <span :style="{
                color: AVATAR_TEXT_COLOR,
                fontSize: typoBySize[64].fontSize,
                lineHeight: typoBySize[64].lineHeight,
                letterSpacing: typoBySize[64].letterSpacing,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }">VJ</span>
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">64px</span>
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
    components: { VAvatar, VIcon },
    setup() {
      return { AVATAR_BG }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="32" :style="{ background: AVATAR_BG }">
              <v-icon color="white" size="16">mdi-account</v-icon>
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">32px</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="48" :style="{ background: AVATAR_BG }">
              <v-icon color="white" size="24">mdi-account</v-icon>
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">48px</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="64" :style="{ background: AVATAR_BG }">
              <v-icon color="white" size="32">mdi-account</v-icon>
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">64px</span>
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
    components: { VAvatar, VImg },
    setup() {
      // Placeholder de imagem pública para demonstração
      const img = 'https://i.pravatar.cc/150?img=12'
      return { img }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="32" rounded="50">
              <v-img :src="img" alt="Avatar" />
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">32px</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="48" rounded="50">
              <v-img :src="img" alt="Avatar" />
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">48px</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <v-avatar :size="64" rounded="50">
              <v-img :src="img" alt="Avatar" />
            </v-avatar>
            <span style="font-size: 11px; color: #79767A;">64px</span>
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
    components: { VAvatar, VIcon, VImg },
    setup() {
      const img = 'https://i.pravatar.cc/150?img=12'
      return { AVATAR_BG, img }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; gap: 48px; flex-wrap: wrap; align-items: flex-end;">

          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <span style="font-size: 11px; color: #79767A; font-weight: 500;">Text</span>
            <div style="display: flex; align-items: flex-end; gap: 12px;">
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="16" :style="{ background: AVATAR_BG, padding: '10px' }">
                  <span style="color:#fff;font-size:10px;line-height:12px;letter-spacing:0.2px;font-family:Roboto,sans-serif;">VJ</span>
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">16</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="24" :style="{ background: AVATAR_BG, padding: '10px' }">
                  <span style="color:#fff;font-size:14px;line-height:22px;letter-spacing:0.014px;font-family:Roboto,sans-serif;">VJ</span>
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">24</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="32" :style="{ background: AVATAR_BG, padding: '10px' }">
                  <span style="color:#fff;font-size:16px;line-height:24px;letter-spacing:0.5px;font-family:Roboto,sans-serif;">VJ</span>
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">32</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="48" :style="{ background: AVATAR_BG, padding: '10px' }">
                  <span style="color:#fff;font-size:16px;line-height:24px;letter-spacing:0.5px;font-family:Roboto,sans-serif;">VJ</span>
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">48</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="64" :style="{ background: AVATAR_BG, padding: '10px' }">
                  <span style="color:#fff;font-size:16px;line-height:24px;letter-spacing:0.5px;font-family:Roboto,sans-serif;">VJ</span>
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">64</span>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <span style="font-size: 11px; color: #79767A; font-weight: 500;">Icon</span>
            <div style="display: flex; align-items: flex-end; gap: 12px;">
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="32" :style="{ background: AVATAR_BG }">
                  <v-icon color="white" size="16">mdi-account</v-icon>
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">32</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="48" :style="{ background: AVATAR_BG }">
                  <v-icon color="white" size="24">mdi-account</v-icon>
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">48</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="64" :style="{ background: AVATAR_BG }">
                  <v-icon color="white" size="32">mdi-account</v-icon>
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">64</span>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <span style="font-size: 11px; color: #79767A; font-weight: 500;">Image</span>
            <div style="display: flex; align-items: flex-end; gap: 12px;">
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="32" rounded="50">
                  <v-img :src="img" alt="Avatar" />
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">32</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="48" rounded="50">
                  <v-img :src="img" alt="Avatar" />
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">48</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                <v-avatar :size="64" rounded="50">
                  <v-img :src="img" alt="Avatar" />
                </v-avatar>
                <span style="font-size: 10px; color: #79767A;">64</span>
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
    components: { VAvatar, VImg },
    setup() {
      const img1 = 'https://i.pravatar.cc/150?img=1'
      const img2 = 'https://i.pravatar.cc/150?img=2'
      return { AVATAR_BG, img1, img2 }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <p style="font-size: 11px; color: #79767A; margin: 0 0 12px;">Grupo de avatares sobrepostos — cards do Kanban</p>
        <div style="display: flex; align-items: center;">
          <v-avatar :size="24" rounded="50"
            style="margin-right: -6px; border: 2px solid #fff; z-index: 3;">
            <v-img :src="img1" alt="Avatar 1" />
          </v-avatar>
          <v-avatar :size="24" rounded="50"
            style="margin-right: -6px; border: 2px solid #fff; z-index: 2;">
            <v-img :src="img2" alt="Avatar 2" />
          </v-avatar>
          <v-avatar :size="24"
            :style="{ background: AVATAR_BG, border: '2px solid #fff', zIndex: 1, padding: '6px' }">
            <span style="color:#fff;font-size:10px;line-height:12px;letter-spacing:0.2px;">+3</span>
          </v-avatar>
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