// ============================================
// SISLOC DS — FORÇA DE VENDAS
// Breadcrumb.stories.js
//
// Baseado no node 40008108-51130 (Sisloc DS | Componentes)
//
// Especificações:
//   Altura: 32px · display flex · align-items center
//   chevron_left: 32px, à esquerda, gap 24px até os itens
//   Divider: "/" · padding 0 12px · cor #79767A
//   Tipografia: 12px regular #79767A · letter-spacing 0.048px
//   Hover: mesma cor, apenas text-decoration underline
//   Sem cor ativa — discreto em toda a tela
// ============================================

import { tokens } from '../tokens/tokens.js'

const ChevronLeft = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.12 8.94667L18.3 7.13334L9.43335 16L18.3 24.8667L20.12 23.0533L13.08 16L20.12 8.94667Z" fill="#79767A"/>
</svg>`

const injectBreadcrumbStyles = () => {
  const id = 'sisloc-breadcrumb-styles'
  if (document.getElementById(id)) return
  const style = document.createElement('style')
  style.id = id
  style.textContent = `
    .sisloc-breadcrumb {
      display: flex;
      align-items: center;
      gap: 24px;
      height: 32px;
      font-family: Roboto, sans-serif;
    }

    .sisloc-breadcrumb__back {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }

    .sisloc-breadcrumb__items {
      display: flex;
      align-items: center;
    }

    .sisloc-breadcrumb__item {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.048px;
      color: #79767A;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      text-decoration: none;
    }

    .sisloc-breadcrumb__item:hover {
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-skip-ink: auto;
      text-decoration-thickness: auto;
      text-underline-offset: auto;
      text-underline-position: from-font;
      color: #79767A;
    }

    /* Último item — página atual, sem hover */
    .sisloc-breadcrumb__item--current {
      cursor: default;
    }

    .sisloc-breadcrumb__item--current:hover {
      text-decoration: none;
    }

    .sisloc-breadcrumb__divider {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 12px;
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-weight: 400;
      color: #79767A;
      user-select: none;
    }
  `
  document.head.appendChild(style)
}

export default {
  title: 'Componentes/Breadcrumb',
  parameters: {
    docs: {
      description: {
        component: `
**Breadcrumb** — navegação hierárquica discreta no header de todas as telas.

**Especificações (Figma node 40008108-51130):**
- Altura: \`32px\` · Gap entre chevron e itens: \`24px\`
- Divider: \`/\` com padding \`0 12px\`
- Tipografia: \`12px regular #79767A\` — sem cor ativa, sem destaque
- Hover: apenas \`text-decoration: underline\` — mesma cor
- \`chevron_left\` à esquerda para voltar à página anterior

**Uso no Força de Vendas:** header de todas as telas (Home / Leads / Ver Lead)
        `,
      },
    },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — 3 níveis como no Figma */
export const Default = {
  name: 'Default',
  render: () => ({
    setup() {
      injectBreadcrumbStyles()
      return { ChevronLeft }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <nav class="sisloc-breadcrumb" aria-label="Navegação">
          <button class="sisloc-breadcrumb__back" aria-label="Voltar" v-html="ChevronLeft" />
          <div class="sisloc-breadcrumb__items">
            <a class="sisloc-breadcrumb__item">Home</a>
            <span class="sisloc-breadcrumb__divider">/</span>
            <a class="sisloc-breadcrumb__item">Leads</a>
            <span class="sisloc-breadcrumb__divider">/</span>
            <span class="sisloc-breadcrumb__item sisloc-breadcrumb__item--current">Ver leads</span>
          </div>
        </nav>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Estrutura padrão: chevron_left + Home / Leads / página atual. Último item sem hover.',
      },
    },
  },
}

/** 2 níveis */
export const DoisNiveis = {
  name: '2 Níveis',
  render: () => ({
    setup() {
      injectBreadcrumbStyles()
      return { ChevronLeft }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <nav class="sisloc-breadcrumb" aria-label="Navegação">
          <button class="sisloc-breadcrumb__back" aria-label="Voltar" v-html="ChevronLeft" />
          <div class="sisloc-breadcrumb__items">
            <a class="sisloc-breadcrumb__item">Leads</a>
            <span class="sisloc-breadcrumb__divider">/</span>
            <span class="sisloc-breadcrumb__item sisloc-breadcrumb__item--current">Detalhe do Lead</span>
          </div>
        </nav>
      </div>
    `,
  }),
}

/** 4 níveis */
export const QuatroNiveis = {
  name: '4 Níveis',
  render: () => ({
    setup() {
      injectBreadcrumbStyles()
      return { ChevronLeft }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <nav class="sisloc-breadcrumb" aria-label="Navegação">
          <button class="sisloc-breadcrumb__back" aria-label="Voltar" v-html="ChevronLeft" />
          <div class="sisloc-breadcrumb__items">
            <a class="sisloc-breadcrumb__item">Home</a>
            <span class="sisloc-breadcrumb__divider">/</span>
            <a class="sisloc-breadcrumb__item">Leads</a>
            <span class="sisloc-breadcrumb__divider">/</span>
            <a class="sisloc-breadcrumb__item">Detalhe do Lead</a>
            <span class="sisloc-breadcrumb__divider">/</span>
            <span class="sisloc-breadcrumb__item sisloc-breadcrumb__item--current">Converter Lead</span>
          </div>
        </nav>
      </div>
    `,
  }),
}

/** Hover — demonstra o underline */
export const Hover = {
  name: 'Hover (underline)',
  render: () => ({
    setup() {
      injectBreadcrumbStyles()
      return { ChevronLeft }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <p style="font-size: 11px; color: #79767A; margin: 0 0 12px;">Passe o mouse nos itens para ver o underline</p>
        <nav class="sisloc-breadcrumb" aria-label="Navegação">
          <button class="sisloc-breadcrumb__back" aria-label="Voltar" v-html="ChevronLeft" />
          <div class="sisloc-breadcrumb__items">
            <a class="sisloc-breadcrumb__item">Home</a>
            <span class="sisloc-breadcrumb__divider">/</span>
            <a class="sisloc-breadcrumb__item">Leads</a>
            <span class="sisloc-breadcrumb__divider">/</span>
            <span class="sisloc-breadcrumb__item sisloc-breadcrumb__item--current">Ver leads</span>
          </div>
        </nav>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Hover aplica apenas `text-decoration: underline` — sem mudança de cor.',
      },
    },
  },
}

/** Todos os estados */
export const TodosEstados = {
  name: 'Todos os estados',
  render: () => ({
    setup() {
      injectBreadcrumbStyles()
      return { ChevronLeft }
    },
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">2 níveis</p>
          <nav class="sisloc-breadcrumb">
            <button class="sisloc-breadcrumb__back" v-html="ChevronLeft" />
            <div class="sisloc-breadcrumb__items">
              <a class="sisloc-breadcrumb__item">Leads</a>
              <span class="sisloc-breadcrumb__divider">/</span>
              <span class="sisloc-breadcrumb__item sisloc-breadcrumb__item--current">Detalhe do Lead</span>
            </div>
          </nav>
        </div>

        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">3 níveis (padrão)</p>
          <nav class="sisloc-breadcrumb">
            <button class="sisloc-breadcrumb__back" v-html="ChevronLeft" />
            <div class="sisloc-breadcrumb__items">
              <a class="sisloc-breadcrumb__item">Home</a>
              <span class="sisloc-breadcrumb__divider">/</span>
              <a class="sisloc-breadcrumb__item">Leads</a>
              <span class="sisloc-breadcrumb__divider">/</span>
              <span class="sisloc-breadcrumb__item sisloc-breadcrumb__item--current">Ver leads</span>
            </div>
          </nav>
        </div>

        <div>
          <p style="font-size: 11px; color: #79767A; margin: 0 0 8px;">4 níveis</p>
          <nav class="sisloc-breadcrumb">
            <button class="sisloc-breadcrumb__back" v-html="ChevronLeft" />
            <div class="sisloc-breadcrumb__items">
              <a class="sisloc-breadcrumb__item">Home</a>
              <span class="sisloc-breadcrumb__divider">/</span>
              <a class="sisloc-breadcrumb__item">Leads</a>
              <span class="sisloc-breadcrumb__divider">/</span>
              <a class="sisloc-breadcrumb__item">Detalhe do Lead</a>
              <span class="sisloc-breadcrumb__divider">/</span>
              <span class="sisloc-breadcrumb__item sisloc-breadcrumb__item--current">Converter Lead</span>
            </div>
          </nav>
        </div>
      </div>
    `,
  }),
}