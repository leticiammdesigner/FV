// ============================================
// SISLOC DS — FORÇA DE VENDAS
// SislocCardKanban.stories.js v2
//
// Correções aplicadas:
//   - Footer sem contador de texto — só ícone com tooltip "Criado em DD/MM/AA"
//   - Avatar com tooltip do nome completo · cor #304FFE
//   - Botão de tarefa com 3 estados:
//       scheduled → #F5EFF4 (cinza)  · tarefa agendada
//       overdue   → #FFCDD2 (red lighten-4) · tarefa atrasada
//       empty     → #EC6A00 (laranja) + ícone "+" · "Criar Tarefa"
//   - Menu de ações (Editar / Excluir) ao clicar em "⋯"
// ============================================

import SislocCardKanban from './SislocCardKanban.vue'

export default {
  title: 'Componentes/Card Kanban',
  component: SislocCardKanban,
  parameters: {
    docs: {
      description: {
        component: `
**Card Kanban** — card de lead na visualização kanban.

**Especificações (Figma node 40008176:4290):**
- Tamanho: \`260×153px\` · bg \`#FFFFFF\` · border \`1px #E6E8EC\` · radius \`12px\`

**Botão de tarefa — 3 estados:**
| Estado | Quando | Background | Texto |
|---|---|---|---|
| \`scheduled\` | tarefa agendada | \`#F5EFF4\` | preto |
| \`overdue\` | \`taskOverdue: true\` | \`#FFCDD2\` | preto |
| \`empty\` | \`task\` vazio | \`#EC6A00\` | branco + ícone "+" |

**Footer:** ícone de calendário com tooltip \`"Criado em DD/MM/AA"\` e avatar
com tooltip do nome completo. Sem contador de texto.

**Menu:** clique em \`⋯\` abre Editar / Excluir. Customizável via \`menuItems\`.

**Eventos:** \`@click\` · \`@menu-action\` · \`@task\`
        `,
      },
    },
  },
  argTypes: {
    status:        { control: 'text' },
    statusColor:   { control: 'color' },
    name:          { control: 'text' },
    company:       { control: 'text' },
    origin:        { control: 'text' },
    temperature:   { control: 'select', options: ['', 'Quente', 'Morno', 'Frio'] },
    task:          { control: 'text' },
    taskOverdue:   { control: 'boolean' },
    createdAt:     { control: 'text' },
    assignee:      { control: 'text' },
    assigneeName:  { control: 'text' },
    assigneeColor: { control: 'color' },
    clickable:     { control: 'boolean' },
  },
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Tarefa agendada — botão cinza */
export const TarefaAgendada = {
  name: 'Tarefa agendada',
  args: {
    status: 'Qualificar',
    name: 'Rodrigo Fernandes Lima',
    company: 'Empresa LTDA',
    origin: 'Indicação Client...',
    temperature: 'Morno',
    task: 'Ligação 04/11',
    taskOverdue: false,
    createdAt: '20/06/24',
    assignee: 'VJ',
    assigneeName: 'Vicente James',
  },
  render: (args) => ({
    components: { SislocCardKanban },
    setup() { return { args } },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <SislocCardKanban v-bind="args" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Botão cinza `#F5EFF4`. Passe o mouse no ícone de calendário e no avatar para ver os tooltips.',
      },
    },
  },
}

/** Tarefa atrasada — botão vermelho claro */
export const TarefaAtrasada = {
  name: 'Tarefa atrasada',
  args: {
    status: 'Qualificar',
    name: 'Maria Fernanda da Conceição da Silva',
    company: 'Empresa LTDA',
    origin: 'Feiras e Eventos',
    temperature: 'Quente',
    task: 'Ligar 04/11/2024 15:45',
    taskOverdue: true,
    createdAt: '20/06/24',
    assignee: 'VJ',
    assigneeName: 'Vicente James',
  },
  render: (args) => ({
    components: { SislocCardKanban },
    setup() { return { args } },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <SislocCardKanban v-bind="args" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Botão `#FFCDD2` (red lighten-4) sinalizando atraso. O nome longo trunca com ellipsis.',
      },
    },
  },
}

/** Sem tarefa — botão laranja "Criar Tarefa" */
export const SemTarefa = {
  name: 'Sem tarefa',
  args: {
    status: 'Qualificar',
    name: 'Rodrigo Fernandes Lima',
    company: 'Empresa LTDA',
    origin: 'Feiras e Eventos',
    temperature: 'Quente',
    task: '',
    createdAt: '20/06/24',
    assignee: 'VJ',
    assigneeName: 'Vicente James',
  },
  render: (args) => ({
    components: { SislocCardKanban },
    setup() { return { args } },
    template: `
      <div style="padding: 24px; background: #F5F5F5;">
        <SislocCardKanban v-bind="args" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Sem tarefa o botão vira ação primária — laranja `#EC6A00` com ícone "+".',
      },
    },
  },
}

/** Os 3 estados do botão lado a lado */
export const EstadosDoBotao = {
  name: 'Estados do botão de tarefa',
  render: () => ({
    components: { SislocCardKanban },
    template: `
      <div style="padding: 24px; background: #F5F5F5; display: flex; gap: 16px; flex-wrap: wrap; font-family: Roboto, sans-serif;">
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Agendada — #F5EFF4</p>
          <SislocCardKanban
            status="Qualificar" name="Rodrigo Fernandes Lima" company="Empresa LTDA"
            origin="Indicação Client..." temperature="Morno"
            task="Ligação 04/11" created-at="20/06/24"
            assignee="VJ" assignee-name="Vicente James"
          />
        </div>
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Atrasada — #FFCDD2</p>
          <SislocCardKanban
            status="Qualificar" name="Maria Fernanda da Conceição da..." company="Empresa LTDA"
            origin="Feiras e Eventos" temperature="Quente"
            task="Ligar 04/11/2024 15:45" task-overdue created-at="20/06/24"
            assignee="VJ" assignee-name="Vicente James"
          />
        </div>
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Sem tarefa — #EC6A00</p>
          <SislocCardKanban
            status="Qualificar" name="Rodrigo Fernandes Lima" company="Empresa LTDA"
            origin="Feiras e Eventos" temperature="Quente"
            task="" created-at="20/06/24"
            assignee="VJ" assignee-name="Vicente James"
          />
        </div>
      </div>
    `,
  }),
}

/** Menu de ações aberto */
export const MenuDeAcoes = {
  name: 'Menu de ações',
  render: () => ({
    components: { SislocCardKanban },
    setup() {
      function onAction(action) {
        alert(`Ação: ${action}`)
      }
      return { onAction }
    },
    template: `
      <div style="padding: 24px 24px 140px; background: #F5F5F5; font-family: Roboto, sans-serif;">
        <p style="font-size:11px;color:#79767A;margin:0 0 12px;">Clique no ⋯ para abrir o menu</p>
        <SislocCardKanban
          status="Qualificar" name="Rodrigo Fernandes Lima" company="Empresa LTDA"
          origin="Feiras e Eventos" temperature="Quente"
          task="" created-at="20/06/24"
          assignee="VJ" assignee-name="Vicente James"
          @menu-action="onAction"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Menu com Editar / Excluir. Customizável via prop `menuItems`.',
      },
    },
  },
}

/** Temperaturas */
export const Temperaturas = {
  name: 'Temperaturas',
  render: () => ({
    components: { SislocCardKanban },
    template: `
      <div style="padding: 24px; background: #F5F5F5; display: flex; gap: 16px; flex-wrap: wrap;">
        <SislocCardKanban
          status="Qualificar" name="Lead Quente" company="Empresa LTDA"
          origin="Feiras e Eventos" temperature="Quente"
          task="Ligação 04/11" created-at="20/06/24" assignee="VJ" assignee-name="Vicente James"
        />
        <SislocCardKanban
          status="Qualificar" name="Lead Morno" company="Empresa LTDA"
          origin="Indicação Cliente" temperature="Morno"
          task="Ligação 05/11" created-at="18/06/24" assignee="MF" assignee-name="Maria Fernanda"
        />
        <SislocCardKanban
          status="Qualificar" name="Lead Frio" company="Empresa LTDA"
          origin="Site" temperature="Frio"
          task="" created-at="10/06/24" assignee="RS" assignee-name="Ricardo Souza"
        />
      </div>
    `,
  }),
}

/** Status do lead — cores da paleta Vuetify */
export const StatusDoLead = {
  name: 'Status do lead',
  render: () => ({
    components: { SislocCardKanban },
    template: `
      <div style="padding: 24px; background: #F5F5F5; display: flex; gap: 16px; flex-wrap: wrap; font-family: Roboto, sans-serif;">
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Qualificar — blue accent-4 #2962FF</p>
          <SislocCardKanban
            status="Qualificar" name="Rodrigo Fernandes Lima" company="Empresa LTDA"
            origin="Feiras e Eventos" temperature="Quente"
            task="Ligação 04/11" created-at="20/06/24"
            assignee="VJ" assignee-name="Vicente James"
          />
        </div>
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Convertido — green accent-3 #00E676</p>
          <SislocCardKanban
            status="Convertido" name="Carlos Eduardo Lima" company="Empresa LTDA"
            origin="Instagram" temperature="Quente"
            task="Assinatura 12/11" created-at="05/06/24"
            assignee="CL" assignee-name="Carlos Eduardo Lima"
          />
        </div>
        <div>
          <p style="font-size:11px;color:#79767A;margin:0 0 8px;">Desqualificado — red darken-4 #B71C1C</p>
          <SislocCardKanban
            status="Desqualificado" name="Thiago Rodrigues" company="Empresa LTDA"
            origin="TikTok" temperature="Frio"
            task="" created-at="01/06/24"
            assignee="TR" assignee-name="Thiago Rodrigues"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'A cor do bullet é resolvida automaticamente pelo label do status. Use `statusColor` para sobrescrever.',
      },
    },
  },
}

/** Board completo */
export const BoardCompleto = {
  name: 'Uso — Board kanban',
  render: () => ({
    components: { SislocCardKanban },
    setup() {
      const colunas = [
        {
          titulo: 'Novo',
          leads: [
            { status: 'Qualificar', name: 'João Silva Pereira', company: 'Construtora ABC', origin: 'Feiras e Eventos', temperature: 'Quente', task: 'Ligação 04/11', createdAt: '20/06/24', assignee: 'JS', assigneeName: 'João Silva Pereira' },
            { status: 'Qualificar', name: 'Ana Beatriz Ramos',  company: 'AQS Engenharia',  origin: 'AQS',              temperature: 'Morno',  task: '',              createdAt: '19/06/24', assignee: 'AB', assigneeName: 'Ana Beatriz Ramos' },
          ],
        },
        {
          titulo: 'Conectado',
          leads: [
            { status: 'Qualificar', name: 'Lucas Almeida Costa', company: 'RD Station', origin: 'Integração RD', temperature: 'Quente', task: 'Reunião 06/11', taskOverdue: true, createdAt: '15/06/24', assignee: 'LA', assigneeName: 'Lucas Almeida Costa' },
          ],
        },
        {
          titulo: 'Trabalhando',
          leads: [
            { status: 'Qualificar', name: 'Fernanda Nascimento', company: 'LinkedIn Corp', origin: 'LinkedIn', temperature: 'Morno', task: 'Proposta 10/11', createdAt: '12/06/24', assignee: 'FN', assigneeName: 'Fernanda Nascimento' },
            { status: 'Convertido', name: 'Ricardo Gomes',       company: 'Twitter Inc',   origin: 'Twitter',  temperature: 'Frio',  task: '',              createdAt: '08/06/24', assignee: 'RG', assigneeName: 'Ricardo Gomes' },
          ],
        },
        {
          titulo: 'Fechamento',
          leads: [
            { status: 'Convertido',     name: 'Carlos Eduardo Lima',  company: 'Instagram Ads', origin: 'Instagram', temperature: 'Quente', task: 'Assinatura 12/11', createdAt: '05/06/24', assignee: 'CL', assigneeName: 'Carlos Eduardo Lima' },
            { status: 'Desqualificado', name: 'Thiago Rodrigues',     company: 'TikTok Ads',    origin: 'TikTok',    temperature: 'Frio',   task: '',                 createdAt: '01/06/24', assignee: 'TR', assigneeName: 'Thiago Rodrigues' },
          ],
        },
      ]
      return { colunas }
    },
    template: `
      <div style="padding: 24px; background: #F5F5F5; font-family: Roboto, sans-serif; overflow-x: auto;">
        <div style="display: flex; gap: 16px; align-items: flex-start;">
          <div v-for="col in colunas" :key="col.titulo" style="width: 292px; flex-shrink: 0;">

            <div style="
              display: flex; align-items: center; justify-content: space-between;
              padding: 12px 16px; margin-bottom: 12px;
              background: #FFFFFF; border-radius: 8px;
              border-top: 3px solid #CAC5CA;
            ">
              <span style="font-size: 13px; font-weight: 500; color: #1D1B20;">{{ col.titulo }}</span>
              <span style="
                display: inline-flex; align-items: center; justify-content: center;
                min-width: 20px; height: 20px; padding: 0 6px;
                background: #F1F1F1; border-radius: 10px;
                font-size: 11px; font-weight: 500; color: #79767A;
              ">{{ col.leads.length }}</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 12px;">
              <SislocCardKanban v-for="(lead, i) in col.leads" :key="i" v-bind="lead" />
            </div>

          </div>
        </div>
      </div>
    `,
  }),
}
