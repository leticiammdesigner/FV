// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocAccordion.stories.js
//
// Baseado no node 2404-4727 (Sisloc DS | Componentes)
//
// Estados:
//   Expandido  — título + chevron_up + divider + slot de conteúdo
//   Recolhido  — título + subtítulo + chevron_down
//
// API:
//   title        — string (obrigatório)
//   subtitle     — string (opcional, exibido quando recolhido)
//   defaultOpen  — boolean (estado inicial, default: true)
//   v-model      — boolean (controle externo)
//   @toggle      — emitido ao expandir/recolher
// ============================================

import { ref } from 'vue'
import SislocAccordion from './SislocAccordion.vue'
import { tokens } from '../../tokens/tokens.js'

export default {
  title: 'Componentes/Accordion',
  component: SislocAccordion,
  parameters: {
    docs: {
      description: {
        component: `
**Accordion** — seção colapsável usada nos formulários do Força de Vendas.

**Estrutura (Figma node 2404-4727):**
- Header: \`56px\` mínimo · título 14px bold · ícone \`keyboard_arrow\` 24px
- Recolhido: exibe subtítulo \`12px regular #79767A\` como resumo do conteúdo
- Expandido: divider \`1px #E6E1E6\` + slot de conteúdo com padding \`16px\`
- Border: \`1px #E6E1E6\` · Border-radius: \`8px\`

**Props:**
- \`title\` — título sempre visível
- \`subtitle\` — resumo exibido quando recolhido
- \`defaultOpen\` — estado inicial (default: \`true\`)
- \`v-model\` — controle externo do estado

**Uso no Força de Vendas:** estrutura base do form de Criar Lead
(Dados · Endereço · Empresa · Descrição)
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'button-name', enabled: true },
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Expandido — estado padrão */
export const Expandido = {
  name: 'Expandido',
  render: () => ({
    components: { SislocAccordion },
    setup() {
      return { tokens }
    },
    template: `
      <div style="padding: 24px; max-width: 900px; font-family: Roboto, sans-serif;">
        <SislocAccordion
          title="Dados do lead"
          subtitle="Nome, Origem, Cargo, Telefone"
          :default-open="true"
        >
          <div style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          ">
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Nome</span>
              <span style="font-size:12px;color:#575757;">Fernando Carvalhosa</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Origem</span>
              <span style="font-size:12px;color:#575757;">Feiras e Eventos</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Cargo</span>
              <span style="font-size:12px;color:#575757;">Engenheiro de Obras</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Telefone</span>
              <span style="font-size:12px;color:#575757;">(11) 99999-0000</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">E-mail</span>
              <span style="font-size:12px;color:#575757;">fernando@construtora.com.br</span>
            </div>
          </div>
        </SislocAccordion>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Estado expandido — slot de conteúdo visível, chevron apontando para cima.',
      },
    },
  },
}

/** Recolhido — com subtítulo */
export const Recolhido = {
  name: 'Recolhido',
  render: () => ({
    components: { SislocAccordion },
    template: `
      <div style="padding: 24px; max-width: 900px; font-family: Roboto, sans-serif;">
        <SislocAccordion
          title="Dados do lead"
          subtitle="Fernando Carvalhosa · Feiras e Eventos · Engenheiro de Obras"
          :default-open="false"
        >
          <p>Conteúdo do accordion</p>
        </SislocAccordion>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Estado recolhido — subtítulo visível como resumo do conteúdo, chevron apontando para baixo.',
      },
    },
  },
}

/** Interativo — toggle funcional */
export const Interativo = {
  name: 'Interativo',
  render: () => ({
    components: { SislocAccordion },
    setup() {
      const open = ref(true)
      return { open }
    },
    template: `
      <div style="padding: 24px; max-width: 900px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 8px;">
        <SislocAccordion
          v-model="open"
          title="Dados do lead"
          subtitle="Fernando Carvalhosa · Feiras e Eventos"
        >
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Nome</span>
              <span style="font-size:12px;color:#575757;">Fernando Carvalhosa</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Origem</span>
              <span style="font-size:12px;color:#575757;">Feiras e Eventos</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Cargo</span>
              <span style="font-size:12px;color:#575757;">Engenheiro de Obras</span>
            </div>
          </div>
        </SislocAccordion>
        <p style="font-size:12px;color:#79767A;margin:8px 0 0;">
          Estado: <strong>{{ open ? 'Expandido' : 'Recolhido' }}</strong>
        </p>
      </div>
    `,
  }),
}

/** Form de Criar Lead — 4 accordions como no Figma */
export const FormCriarLead = {
  name: 'Form Criar Lead (4 seções)',
  render: () => ({
    components: { SislocAccordion },
    setup() {
      const estados = ref({
        dados: true,
        endereco: false,
        empresa: false,
        descricao: false,
      })
      return { estados }
    },
    template: `
      <div style="padding: 24px; max-width: 1302px; font-family: Roboto, sans-serif; display: flex; flex-direction: column; gap: 8px;">

        <SislocAccordion
          v-model="estados.dados"
          title="Dados"
          subtitle="Nome, Origem, Cargo, Telefone, E-mail"
        >
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Nome</span>
              <span style="font-size:12px;color:#575757;">Fernando Carvalhosa</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Origem</span>
              <span style="font-size:12px;color:#575757;">Feiras e Eventos</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Cargo</span>
              <span style="font-size:12px;color:#575757;">Engenheiro de Obras</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Telefone</span>
              <span style="font-size:12px;color:#575757;">(11) 99999-0000</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">E-mail</span>
              <span style="font-size:12px;color:#575757;">fernando@construtora.com.br</span>
            </div>
          </div>
        </SislocAccordion>

        <SislocAccordion
          v-model="estados.endereco"
          title="Endereço"
          subtitle="CEP, Logradouro, Cidade, UF"
        >
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">CEP</span>
              <span style="font-size:12px;color:#575757;">01310-100</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Logradouro</span>
              <span style="font-size:12px;color:#575757;">Av. Paulista</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Cidade/UF</span>
              <span style="font-size:12px;color:#575757;">São Paulo / SP</span>
            </div>
          </div>
        </SislocAccordion>

        <SislocAccordion
          v-model="estados.empresa"
          title="Empresa"
          subtitle="Razão Social, CNPJ, Setor"
        >
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Razão Social</span>
              <span style="font-size:12px;color:#575757;">Construtora Alpha Ltda</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">CNPJ</span>
              <span style="font-size:12px;color:#575757;">12.345.678/0001-99</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span style="font-size:12px;font-weight:700;color:#1D1B20;">Setor</span>
              <span style="font-size:12px;color:#575757;">Construção Civil</span>
            </div>
          </div>
        </SislocAccordion>

        <SislocAccordion
          v-model="estados.descricao"
          title="Descrição"
          subtitle="Observações e contexto do lead"
        >
          <p style="font-size:14px;color:#1D1B20;line-height:1.5;margin:0;">
            Empresa interessada na locação de equipamentos pesados para uma obra de médio porte
            em Contagem/MG, com previsão de início em julho. Captado na Construbusiness 2025.
          </p>
        </SislocAccordion>

      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Configuração real do form de Criar Lead — 4 seções independentes. Clique nos headers para expandir/recolher.',
      },
    },
  },
}

/** Sem subtítulo */
export const SemSubtitulo = {
  name: 'Sem Subtítulo',
  render: () => ({
    components: { SislocAccordion },
    template: `
      <div style="padding: 24px; max-width: 900px; font-family: Roboto, sans-serif;">
        <SislocAccordion title="Informações adicionais" :default-open="false">
          <p style="font-size:14px;color:#1D1B20;margin:0;">Conteúdo do accordion sem subtítulo.</p>
        </SislocAccordion>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Quando recolhido sem subtítulo — só o título e o chevron ficam visíveis.',
      },
    },
  },
}