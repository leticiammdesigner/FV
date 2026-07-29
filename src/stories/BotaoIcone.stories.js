// ============================================
// SISLOC DS — FORÇA DE VENDAS
// BotaoIcone.stories.js
//
// Baseado no node 40008113-312 (Sisloc DS | Componentes)
//
// Especificações:
//   Tamanho: 40x40px (padding 8px + ícone 24px)
//   Border-radius: 360px (circular)
//   Base:  background #F1F1F1
//   Hover: background #E6E1E6 (neutral 90)
//   Ícone: 24x24px, cor #79767A
//   Sem borda, sem sombra, sem texto
//
// Não usa v-btn — usa <button> nativo para evitar
// conflito com estilos do Vuetify em icon buttons
// ============================================

import { tokens } from '../tokens/tokens.js'

// ─── Ícones SVG (outline, cor #79767A) ───────────────────────────────────────

const icons = {
  filter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 19.88C15.04 20.18 14.94 20.5 14.71 20.71C14.32 21.1 13.69 21.1 13.3 20.71L9.29 16.7C9.06 16.47 8.96 16.16 9 15.87V10.75L4.21 4.62C3.87 4.19 3.95 3.56 4.38 3.22C4.57 3.08 4.78 3 5 3H19C19.22 3 19.43 3.08 19.62 3.22C20.05 3.56 20.13 4.19 19.79 4.62L15 10.75V19.88ZM7.04 5L11 10.06V15.58L13 17.58V10.05L16.96 5H7.04Z" fill="#79767A"/>
  </svg>`,

  sort: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z" fill="#79767A"/>
  </svg>`,

  search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#79767A"/>
  </svg>`,

  more_vert: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#79767A"/>
  </svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#79767A"/>
  </svg>`,

  edit: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="#79767A"/>
  </svg>`,

  delete: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#79767A"/>
  </svg>`,
}

const injectBtnIconStyles = () => {
  const id = 'sisloc-btn-icon-styles'
  if (document.getElementById(id)) return
  const style = document.createElement('style')
  style.id = id
  style.textContent = `
    .sisloc-btn-icon {
      display: inline-flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 360px;
      background: #F1F1F1;
      border: none;
      cursor: pointer;
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      transition: background 0.15s ease;
      outline: none;
    }

    .sisloc-btn-icon:hover {
      background: #E6E1E6;
    }

    .sisloc-btn-icon:focus-visible {
      outline: 2px solid ${tokens.border.focus};
      outline-offset: 2px;
    }

    .sisloc-btn-icon:active {
      background: #D6D0D6;
    }

    .sisloc-btn-icon:disabled {
      opacity: 0.38;
      cursor: not-allowed;
      pointer-events: none;
    }

    .sisloc-btn-icon svg {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
  `
  document.head.appendChild(style)
}

export default {
  title: 'Componentes/Botão Ícone',
  parameters: {
    docs: {
      description: {
        component: `
**Botão Ícone** — ação secundária icon-only, sem texto.

**Especificações (Figma node 40008113-312):**
- Tamanho: \`40x40px\` (padding \`8px\` + ícone \`24px\`)
- Border-radius: \`360px\` (circular)
- Base: background \`#F1F1F1\`
- Hover: background \`#E6E1E6\` (neutral 90)
- Ícone: \`24x24px\`, cor \`#79767A\`
- Sem borda · Sem sombra · Sem texto

**Uso no Força de Vendas:** toolbar de todas as telas (Filter, Sort, Search, More)

**Classe:** \`class="sisloc-btn-icon"\`
        `,
      },
    },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Filter — ícone principal da toolbar */
export const Filter = {
  name: 'Filter',
  render: () => ({
    setup() {
      injectBtnIconStyles()
      return { icons }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Filtrar" v-html="icons.filter" />
            <span style="font-size: 11px; color: #79767A;">Base</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Filtrar"
              style="background: #E6E1E6;" v-html="icons.filter" />
            <span style="font-size: 11px; color: #79767A;">Hover</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Filtrar" disabled v-html="icons.filter" />
            <span style="font-size: 11px; color: #79767A;">Disabled</span>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ícone filter outline — abre painel de filtros avançados na toolbar.',
      },
    },
  },
}

/** Sort — ordenação da lista */
export const Sort = {
  name: 'Sort',
  render: () => ({
    setup() {
      injectBtnIconStyles()
      return { icons }
    },
    template: `
      <div style="padding: 24px; display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <button class="sisloc-btn-icon" aria-label="Ordenar" v-html="icons.sort" />
          <span style="font-size: 11px; color: #79767A;">Base</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <button class="sisloc-btn-icon" aria-label="Ordenar"
            style="background: #E6E1E6;" v-html="icons.sort" />
          <span style="font-size: 11px; color: #79767A;">Hover</span>
        </div>
      </div>
    `,
  }),
}

/** Todos os ícones da toolbar */
export const ToolbarIcones = {
  name: 'Toolbar — ícones disponíveis',
  render: () => ({
    setup() {
      injectBtnIconStyles()
      return { icons }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Filtrar" v-html="icons.filter" />
            <span style="font-size: 10px; color: #79767A;">filter</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Ordenar" v-html="icons.sort" />
            <span style="font-size: 10px; color: #79767A;">sort</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Buscar" v-html="icons.search" />
            <span style="font-size: 10px; color: #79767A;">search</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Mais opções" v-html="icons.more_vert" />
            <span style="font-size: 10px; color: #79767A;">more_vert</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Editar" v-html="icons.edit" />
            <span style="font-size: 10px; color: #79767A;">edit</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Excluir" v-html="icons.delete" />
            <span style="font-size: 10px; color: #79767A;">delete</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Fechar" v-html="icons.close" />
            <span style="font-size: 10px; color: #79767A;">close</span>
          </div>

        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Todos os ícones disponíveis para uso na toolbar. Troque o SVG interno para usar qualquer ícone do sistema.',
      },
    },
  },
}

/** Todos os estados */
export const TodosEstados = {
  name: 'Todos os estados',
  render: () => ({
    setup() {
      injectBtnIconStyles()
      return { icons }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 24px;">

        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 12px; font-weight: 500;">Base — background #F1F1F1</p>
          <div style="display: flex; gap: 8px;">
            <button class="sisloc-btn-icon" aria-label="Filtrar" v-html="icons.filter" />
            <button class="sisloc-btn-icon" aria-label="Ordenar" v-html="icons.sort" />
            <button class="sisloc-btn-icon" aria-label="Buscar" v-html="icons.search" />
            <button class="sisloc-btn-icon" aria-label="Mais" v-html="icons.more_vert" />
          </div>
        </div>

        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 12px; font-weight: 500;">Hover — background #E6E1E6</p>
          <div style="display: flex; gap: 8px;">
            <button class="sisloc-btn-icon" style="background:#E6E1E6;" aria-label="Filtrar" v-html="icons.filter" />
            <button class="sisloc-btn-icon" style="background:#E6E1E6;" aria-label="Ordenar" v-html="icons.sort" />
            <button class="sisloc-btn-icon" style="background:#E6E1E6;" aria-label="Buscar" v-html="icons.search" />
            <button class="sisloc-btn-icon" style="background:#E6E1E6;" aria-label="Mais" v-html="icons.more_vert" />
          </div>
        </div>

        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 12px; font-weight: 500;">Disabled — opacity 38%</p>
          <div style="display: flex; gap: 8px;">
            <button class="sisloc-btn-icon" disabled aria-label="Filtrar" v-html="icons.filter" />
            <button class="sisloc-btn-icon" disabled aria-label="Ordenar" v-html="icons.sort" />
            <button class="sisloc-btn-icon" disabled aria-label="Buscar" v-html="icons.search" />
            <button class="sisloc-btn-icon" disabled aria-label="Mais" v-html="icons.more_vert" />
          </div>
        </div>

      </div>
    `,
  }),
}

/** Uso em toolbar — contexto real */
export const UsoToolbar = {
  name: 'Uso — Toolbar (contexto real)',
  render: () => ({
    setup() {
      injectBtnIconStyles()
      return { icons, tokens }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <div style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 16px;
          background: #fff;
          border: 1px solid #E6E1E6;
          border-radius: 8px;
          width: 600px;
        ">
          <span style="font-size: 14px; font-weight: 500; color: #1D1B20;">Leads</span>
          <div style="display: flex; align-items: center; gap: 4px;">
            <button class="sisloc-btn-icon" aria-label="Buscar" v-html="icons.search" />
            <button class="sisloc-btn-icon" aria-label="Filtrar" v-html="icons.filter" />
            <button class="sisloc-btn-icon" aria-label="Ordenar" v-html="icons.sort" />
            <button class="sisloc-btn-icon" aria-label="Mais opções" v-html="icons.more_vert" />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Contexto real de uso — toolbar da tela de listagem de Leads.',
      },
    },
  },
}