// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocModal.stories.js
//
// A implementação vive em SislocModal.vue.
// Os botões ativadores continuam aqui porque as stories nunca usaram
// o slot `activator` do Vuetify — o botão é irmão do dialog, com
// @click próprio. Esse padrão foi preservado.
// ============================================

import { ref } from 'vue'
import { VBtn } from 'vuetify/components'
import SislocModal from './SislocModal.vue'

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

// Estilo do botão que abre cada modal — composição da story
const ATIVADOR = 'text-transform:none;border-radius:8px;border-color:#79767A;color:#323033;font-size:12px;box-shadow:none;'

export default {
  title: 'Componentes/Modal',
  component: SislocModal,
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
    components: { SislocModal, VBtn },
    setup() {
      const dialog = ref(false)
      return { dialog, IconInfo, ATIVADOR }
    },
    template: `
      <div style="padding: 24px;">
        <v-btn variant="outlined" :style="ATIVADOR" @click="dialog = true">
          Abrir Modal de Confirmação
        </v-btn>

        <SislocModal v-model="dialog" :icon="IconInfo">
          <template #title>Confirmar mudança de etapa</template>

          Confirma alterar o lead para a etapa <strong>trabalhando</strong>?

          <template #actions>
            <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="dialog = false">Cancelar</v-btn>
            <v-btn class="sisloc-modal-btn--confirmar" variant="flat" @click="dialog = false">Confirmar</v-btn>
          </template>
        </SislocModal>
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
    components: { SislocModal, VBtn },
    setup() {
      const dialog = ref(false)
      return { dialog, IconWarning, ATIVADOR }
    },
    template: `
      <div style="padding: 24px;">
        <v-btn variant="outlined" :style="ATIVADOR" @click="dialog = true">
          Abrir Modal Crítico
        </v-btn>

        <SislocModal v-model="dialog" :icon="IconWarning" persistent>
          <template #title>Descartar edições?</template>

          Tem certeza que deseja <strong>descartar as edições?</strong><br>
          Você perderá todas as edições feitas.

          <template #actions>
            <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="dialog = false">Cancelar</v-btn>
            <v-btn class="sisloc-modal-btn--danger" variant="flat" @click="dialog = false">Descartar</v-btn>
          </template>
        </SislocModal>
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
    components: { SislocModal, VBtn },
    setup() {
      const dialog = ref(false)
      return { dialog, IconWarning, ATIVADOR }
    },
    template: `
      <div style="padding: 24px;">
        <v-btn variant="outlined" :style="ATIVADOR" @click="dialog = true">
          Abrir Modal de Erro
        </v-btn>

        <SislocModal v-model="dialog" :icon="IconWarning" variant="erro">
          <template #title>Erro ao processar requisição</template>

          Não foi possível completar sua solicitação.<br>
          Detalhes técnicos: <strong>[Código do erro ou mensagem vinda do backend]</strong>

          <template #actions>
            <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="dialog = false">Fechar</v-btn>
          </template>
        </SislocModal>
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
    components: { SislocModal, VBtn },
    setup() {
      const dialog = ref(false)
      return { dialog, IconDangerous, ATIVADOR }
    },
    template: `
      <div style="padding: 24px;">
        <v-btn variant="outlined" :style="ATIVADOR" @click="dialog = true">
          Abrir Aviso do Sistema
        </v-btn>

        <SislocModal v-model="dialog" :icon="IconDangerous" variant="sistema" persistent>
          <template #title>Retorno do Sisloc: Limite de Indenização</template>

          Limite de indenização excedido.<br><br>
          O Sisloc retornou a seguinte informação: <strong>O valor total de indenização dos contratos em aberto (R$ 63.594,25) ultrapassa o limite definido para este cliente (R$ 0,00).</strong><br><br>
          Para continuar, é necessário solicitar a liberação de remessa.

          <template #actions>
            <v-btn class="sisloc-modal-btn--danger" variant="flat" @click="dialog = false">OK, Entendi</v-btn>
          </template>
        </SislocModal>
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
    components: { SislocModal, VBtn },
    setup() {
      const d = ref({ confirmacao: false, critico: false, erro: false, sistema: false })
      return { d, IconInfo, IconWarning, IconDangerous, ATIVADOR }
    },
    template: `
      <div style="padding: 24px; display: flex; flex-wrap: wrap; gap: 12px;">

        <v-btn variant="outlined" :style="ATIVADOR" @click="d.confirmacao=true">Confirmação</v-btn>
        <SislocModal v-model="d.confirmacao" :icon="IconInfo">
          <template #title>Confirmar mudança de etapa</template>
          Confirma alterar o lead para a etapa <strong>trabalhando</strong>?
          <template #actions>
            <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="d.confirmacao=false">Cancelar</v-btn>
            <v-btn class="sisloc-modal-btn--confirmar" variant="flat" @click="d.confirmacao=false">Confirmar</v-btn>
          </template>
        </SislocModal>

        <v-btn variant="outlined" :style="ATIVADOR" @click="d.critico=true">Crítico</v-btn>
        <SislocModal v-model="d.critico" :icon="IconWarning" persistent>
          <template #title>Descartar edições?</template>
          Tem certeza que deseja <strong>descartar as edições?</strong><br>Você perderá todas as edições feitas.
          <template #actions>
            <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="d.critico=false">Cancelar</v-btn>
            <v-btn class="sisloc-modal-btn--danger" variant="flat" @click="d.critico=false">Descartar</v-btn>
          </template>
        </SislocModal>

        <v-btn variant="outlined" :style="ATIVADOR" @click="d.erro=true">Erro</v-btn>
        <SislocModal v-model="d.erro" :icon="IconWarning" variant="erro">
          <template #title>Erro ao processar requisição</template>
          Não foi possível completar sua solicitação.<br>Detalhes técnicos: <strong>[Código do erro ou mensagem vinda do backend]</strong>
          <template #actions>
            <v-btn class="sisloc-modal-btn--neutro" variant="outlined" @click="d.erro=false">Fechar</v-btn>
          </template>
        </SislocModal>

        <v-btn variant="outlined" :style="ATIVADOR" @click="d.sistema=true">Aviso do Sistema</v-btn>
        <SislocModal v-model="d.sistema" :icon="IconDangerous" variant="sistema" persistent>
          <template #title>Retorno do Sisloc: Limite de Indenização</template>
          Limite de indenização excedido.<br><br><strong>O valor total de indenização dos contratos em aberto (R$ 63.594,25) ultrapassa o limite definido para este cliente (R$ 0,00).</strong><br><br>Para continuar, é necessário solicitar a liberação de remessa.
          <template #actions>
            <v-btn class="sisloc-modal-btn--danger" variant="flat" @click="d.sistema=false">OK, Entendi</v-btn>
          </template>
        </SislocModal>

      </div>
    `,
  }),
}
