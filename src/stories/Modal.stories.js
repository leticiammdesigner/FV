// ============================================
// SISLOC DS — FORÇA DE VENDAS
// Modal.stories.js v5
//
// Ícones outline (conforme sistema):
//   Confirmação  → info (outline, preto)
//   Crítico      → warning_amber (outline, #EA3A3D)
//   Erro         → warning_amber (outline, #EA3A3D)
//   Sistema      → dangerous (outline, #EA3A3D, 32px)
//
// Botões — sem laranja:
//   Confirmação  → verde CTA #4CAF50
//   Crítico      → vermelho danger #EA3A3D
//   Erro         → outlined neutro (único)
//   Sistema      → vermelho danger (único)
// ============================================

import { ref } from 'vue'
import { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn } from 'vuetify/components'
import { tokens } from '../tokens/tokens.js'

const MODAL_WIDTH = '580px'

// ─── Ícones SVG (outline, conforme arquivos do sistema) ──────────────────────

const IconInfo = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="black"/>
</svg>`

const IconWarning = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z" fill="#EA3A3D"/>
</svg>`

const IconDangerous = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.9733 4H11.0267L4 11.0267V20.9733L11.0267 28H20.9733L28 20.9733V11.0267L20.9733 4ZM25.3333 19.8667L19.8667 25.3333H12.1333L6.66667 19.8667V12.1333L12.1333 6.66667H19.8667L25.3333 12.1333V19.8667ZM19.7733 10.3467L16 14.12L12.2267 10.3467L10.3467 12.2267L14.12 16L10.3467 19.7733L12.2267 21.6533L16 17.88L19.7733 21.6533L21.6533 19.7733L17.88 16L21.6533 12.2267L19.7733 10.3467Z" fill="#EA3A3D"/>
</svg>`

// ─── Estilos ──────────────────────────────────────────────────────────────────

const injectModalStyles = () => {
  const id = 'sisloc-modal-styles-v5'
  if (document.getElementById(id)) return
  const style = document.createElement('style')
  style.id = id
  style.textContent = `
    .sisloc-modal-card {
      border-radius: 4px !important;
      box-shadow: 0 11px 15px 0 rgba(0,0,0,0.20) !important;
      overflow: hidden;
    }

    .sisloc-modal-card .v-card-title {
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      font-family: Roboto, sans-serif !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      line-height: 24px !important;
      letter-spacing: 0.08px !important;
      color: #000 !important;
      padding: 16px 16px 0 16px !important;
      white-space: normal !important;
    }

    /* Título vermelho — Erro */
    .sisloc-modal--erro .v-card-title {
      color: #EA3A3D !important;
    }

    /* Topo cinza — Sistema */
    .sisloc-modal--sistema .v-card-title {
      background: ${tokens.primitive.neutral[90]} !important;
      padding: 16px !important;
    }

    .sisloc-modal-card .v-card-text {
      font-family: Roboto, sans-serif !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      line-height: 22px !important;
      letter-spacing: 0.014px !important;
      color: rgba(0, 0, 0, 0.87) !important;
      padding: 8px 16px 16px 16px !important;
    }

    .sisloc-modal-card .v-card-text strong {
      font-size: 14px !important;
      font-weight: 700 !important;
      line-height: 20px !important;
      letter-spacing: 0.035px !important;
      color: rgba(0, 0, 0, 0.87) !important;
    }

    .sisloc-modal-card .v-card-actions {
      padding: 0 8px 8px 8px !important;
      justify-content: flex-end !important;
      gap: 8px !important;
    }

    .sisloc-modal-card .v-card-actions .v-btn {
      font-family: Roboto, sans-serif !important;
      font-size: 12px !important;
      font-weight: 500 !important;
      letter-spacing: 0.12px !important;
      text-transform: none !important;
      border-radius: 8px !important;
      height: 36px !important;
      padding: 8px 16px !important;
      box-shadow: none !important;
    }

    .sisloc-modal-btn--neutro,
    .sisloc-modal-btn--neutro.v-btn {
      background: transparent !important;
      color: #323033 !important;
      border: 2px solid #79767A !important;
    }

    .sisloc-modal-btn--confirmar,
    .sisloc-modal-btn--confirmar.v-btn {
      background: ${tokens.action.confirm.default} !important;
      color: #fff !important;
      border: none !important;
    }

    .sisloc-modal-btn--danger,
    .sisloc-modal-btn--danger.v-btn {
      background: ${tokens.action.danger.default} !important;
      color: #fff !important;
      border: none !important;
    }
  `
  document.head.appendChild(style)
}

// ─── Config ───────────────────────────────────────────────────────────────────

export default {
  title: 'Componentes/Modal',
  parameters: {
    docs: {
      description: {
        component: `
**Modal / Dialog** — \`v-dialog\` + \`v-card\` do Vuetify 3.

**Ícones outline (conforme sistema):**
- Confirmação → \`info\` preto
- Crítico / Erro → \`warning_amber\` vermelho
- Sistema → \`dangerous\` vermelho 32px

**Botões — sem laranja:**
| Variante | Primário | Cancelar |
|---|---|---|
| Confirmação | Verde CTA | Outlined neutro |
| Crítico | Vermelho danger | Outlined neutro |
| Erro | Outlined neutro (único) | — |
| Sistema | Vermelho danger (único) | — |
        `,
      },
    },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Confirmacao = {
  name: 'Confirmação',
  render: () => ({
    components: { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn },
    setup() {
      injectModalStyles()
      const dialog = ref(false)
      return { dialog, IconInfo }
    },
    template: `
      <div style="padding: 24px;">
        <v-btn variant="outlined"
          style="text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;"
          @click="dialog = true">
          Abrir Modal de Confirmação
        </v-btn>

        <v-dialog v-model="dialog" max-width="${MODAL_WIDTH}">
          <v-card class="sisloc-modal-card">
            <v-card-title>
              <span style="display:inline-flex;align-items:center;flex-shrink:0;" v-html="IconInfo" />
              Confirmar mudança de etapa
            </v-card-title>
            <v-card-text>
              Confirma alterar o lead para a etapa <strong>trabalhando</strong>?
            </v-card-text>
            <v-card-actions>
              <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="dialog = false">Cancelar</v-btn>
              <v-btn class="sisloc-modal-btn--confirmar" variant="flat" @click="dialog = false">Confirmar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ação reversível. Ícone info outline preto. Botão verde CTA.',
      },
    },
  },
}

export const Critico = {
  name: 'Crítico',
  render: () => ({
    components: { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn },
    setup() {
      injectModalStyles()
      const dialog = ref(false)
      return { dialog, IconWarning }
    },
    template: `
      <div style="padding: 24px;">
        <v-btn variant="outlined"
          style="text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;"
          @click="dialog = true">
          Abrir Modal Crítico
        </v-btn>

        <v-dialog v-model="dialog" max-width="${MODAL_WIDTH}" persistent>
          <v-card class="sisloc-modal-card">
            <v-card-title>
              <span style="display:inline-flex;align-items:center;flex-shrink:0;" v-html="IconWarning" />
              Descartar edições?
            </v-card-title>
            <v-card-text>
              Tem certeza que deseja <strong>descartar as edições?</strong><br>
              Você perderá todas as edições feitas.
            </v-card-text>
            <v-card-actions>
              <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="dialog = false">Cancelar</v-btn>
              <v-btn class="sisloc-modal-btn--danger" variant="flat" @click="dialog = false">Descartar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ação destrutiva irreversível. Ícone warning_amber outline vermelho. Botão danger vermelho. `persistent`.',
      },
    },
  },
}

export const Erro = {
  name: 'Erro',
  render: () => ({
    components: { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn },
    setup() {
      injectModalStyles()
      const dialog = ref(false)
      return { dialog, IconWarning }
    },
    template: `
      <div style="padding: 24px;">
        <v-btn variant="outlined"
          style="text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;"
          @click="dialog = true">
          Abrir Modal de Erro
        </v-btn>

        <v-dialog v-model="dialog" max-width="${MODAL_WIDTH}">
          <v-card class="sisloc-modal-card sisloc-modal--erro">
            <v-card-title>
              <span style="display:inline-flex;align-items:center;flex-shrink:0;" v-html="IconWarning" />
              Erro ao processar requisição
            </v-card-title>
            <v-card-text>
              Não foi possível completar sua solicitação.<br>
              Detalhes técnicos: <strong>[Código do erro ou mensagem vinda do backend]</strong>
            </v-card-text>
            <v-card-actions>
              <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="dialog = false">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Falha de processo. Título vermelho. Ícone warning_amber outline vermelho. Um único botão outlined neutro.',
      },
    },
  },
}

export const AvisoDoSistema = {
  name: 'Aviso do Sistema',
  render: () => ({
    components: { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn },
    setup() {
      injectModalStyles()
      const dialog = ref(false)
      return { dialog, IconDangerous }
    },
    template: `
      <div style="padding: 24px;">
        <v-btn variant="outlined"
          style="text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;"
          @click="dialog = true">
          Abrir Aviso do Sistema
        </v-btn>

        <v-dialog v-model="dialog" max-width="${MODAL_WIDTH}" persistent>
          <v-card class="sisloc-modal-card sisloc-modal--sistema">
            <v-card-title>
              <span style="display:inline-flex;align-items:center;flex-shrink:0;" v-html="IconDangerous" />
              Retorno do Sisloc: Limite de Indenização
            </v-card-title>
            <v-card-text>
              Limite de indenização excedido.<br><br>
              O Sisloc retornou a seguinte informação: <strong>O valor total de indenização dos contratos em aberto (R$ 63.594,25) ultrapassa o limite definido para este cliente (R$ 0,00).</strong><br><br>
              Para continuar, é necessário solicitar a liberação de remessa.
            </v-card-text>
            <v-card-actions>
              <v-btn class="sisloc-modal-btn--danger" variant="flat" @click="dialog = false">OK, Entendi</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Retorno externo do Sisloc. Topo neutral 90. Ícone dangerous 32px vermelho. Dado do sistema em negrito. Botão danger.',
      },
    },
  },
}

export const TodosOsModais = {
  name: 'Todos os modais',
  render: () => ({
    components: { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn },
    setup() {
      injectModalStyles()
      const d = ref({ confirmacao: false, critico: false, erro: false, sistema: false })
      return { d, IconInfo, IconWarning, IconDangerous }
    },
    template: `
      <div style="padding: 24px; display: flex; flex-wrap: wrap; gap: 12px;">

        <v-btn variant="outlined" style="text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;" @click="d.confirmacao=true">Confirmação</v-btn>
        <v-dialog v-model="d.confirmacao" max-width="${MODAL_WIDTH}">
          <v-card class="sisloc-modal-card">
            <v-card-title><span style="display:inline-flex;flex-shrink:0;" v-html="IconInfo" />Confirmar mudança de etapa</v-card-title>
            <v-card-text>Confirma alterar o lead para a etapa <strong>trabalhando</strong>?</v-card-text>
            <v-card-actions>
              <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="d.confirmacao=false">Cancelar</v-btn>
              <v-btn class="sisloc-modal-btn--confirmar" variant="flat" @click="d.confirmacao=false">Confirmar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn variant="outlined" style="text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;" @click="d.critico=true">Crítico</v-btn>
        <v-dialog v-model="d.critico" max-width="${MODAL_WIDTH}" persistent>
          <v-card class="sisloc-modal-card">
            <v-card-title><span style="display:inline-flex;flex-shrink:0;" v-html="IconWarning" />Descartar edições?</v-card-title>
            <v-card-text>Tem certeza que deseja <strong>descartar as edições?</strong><br>Você perderá todas as edições feitas.</v-card-text>
            <v-card-actions>
              <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="d.critico=false">Cancelar</v-btn>
              <v-btn class="sisloc-modal-btn--danger" variant="flat" @click="d.critico=false">Descartar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn variant="outlined" style="text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;" @click="d.erro=true">Erro</v-btn>
        <v-dialog v-model="d.erro" max-width="${MODAL_WIDTH}">
          <v-card class="sisloc-modal-card sisloc-modal--erro">
            <v-card-title><span style="display:inline-flex;flex-shrink:0;" v-html="IconWarning" />Erro ao processar requisição</v-card-title>
            <v-card-text>Não foi possível completar sua solicitação.<br>Detalhes técnicos: <strong>[Código do erro ou mensagem vinda do backend]</strong></v-card-text>
            <v-card-actions>
              <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="d.erro=false">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn variant="outlined" style="text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;" @click="d.sistema=true">Aviso do Sistema</v-btn>
        <v-dialog v-model="d.sistema" max-width="${MODAL_WIDTH}" persistent>
          <v-card class="sisloc-modal-card sisloc-modal--sistema">
            <v-card-title><span style="display:inline-flex;flex-shrink:0;" v-html="IconDangerous" />Retorno do Sisloc: Limite de Indenização</v-card-title>
            <v-card-text>Limite de indenização excedido.<br><br><strong>O valor total de indenização dos contratos em aberto (R$ 63.594,25) ultrapassa o limite definido para este cliente (R$ 0,00).</strong><br><br>Para continuar, é necessário solicitar a liberação de remessa.</v-card-text>
            <v-card-actions>
              <v-btn class="sisloc-modal-btn--danger" variant="flat" @click="d.sistema=false">OK, Entendi</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </div>
    `,
  }),
}