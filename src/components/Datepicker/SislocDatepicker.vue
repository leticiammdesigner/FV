<template>
  <div class="sisloc-datepicker" ref="rootRef">

    <!-- Campo de input — padrão DS -->
    <v-text-field
      :model-value="displayValue"
      :label="label"
      :required="required"
      :disabled="disabled"
      :error-messages="errorMessages"
      :hint="hint"
      :persistent-hint="persistentHint"
      variant="outlined"
      density="comfortable"
      class="sisloc-field"
      readonly
      append-inner-icon="mdi-calendar"
      @click="openPicker"
      @click:append-inner="openPicker"
    />

    <!-- Picker — abre como dropdown abaixo do campo -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="sisloc-datepicker__backdrop"
        @click="closePicker"
      />
      <div
        v-if="isOpen"
        class="sisloc-datepicker__picker"
        :style="pickerStyle"
        role="dialog"
        aria-modal="true"
        :aria-label="`Selecionar data para ${label}`"
      >

        <!-- Header laranja — só mês/ano + navegação -->
        <div class="sisloc-datepicker__header">
          <button
            class="sisloc-datepicker__nav"
            type="button"
            aria-label="Mês anterior"
            @click="prevMonth"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="white"/>
            </svg>
          </button>

          <span class="sisloc-datepicker__month-label">
            {{ monthLabel }}
          </span>

          <button
            class="sisloc-datepicker__nav"
            type="button"
            aria-label="Próximo mês"
            @click="nextMonth"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="white"/>
            </svg>
          </button>
        </div>

        <!-- Grid de dias -->
        <div class="sisloc-datepicker__calendar">

          <!-- Cabeçalho dos dias da semana -->
          <div class="sisloc-datepicker__weekdays">
            <span v-for="d in weekdays" :key="d">{{ d }}</span>
          </div>

          <!-- Dias -->
          <div class="sisloc-datepicker__days">
            <!-- Espaços vazios antes do primeiro dia -->
            <span
              v-for="n in firstDayOffset"
              :key="'empty-' + n"
              class="sisloc-datepicker__day sisloc-datepicker__day--empty"
            />

            <!-- Dias do mês -->
            <button
              v-for="day in daysInMonth"
              :key="day"
              type="button"
              class="sisloc-datepicker__day"
              :class="{
                'sisloc-datepicker__day--selected': isSelected(day),
                'sisloc-datepicker__day--today':    isToday(day),
              }"
              @click="selectDay(day)"
            >
              {{ day }}
            </button>
          </div>

        </div>

        <!-- Footer — botões -->
        <div class="sisloc-datepicker__footer">
          <button
            type="button"
            class="sisloc-datepicker__btn sisloc-datepicker__btn--clear"
            @click="clearDate"
          >
            Limpar
          </button>
          <div style="display:flex; gap: 8px;">
            <button
              type="button"
              class="sisloc-datepicker__btn sisloc-datepicker__btn--cancel"
              @click="closePicker"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="sisloc-datepicker__btn sisloc-datepicker__btn--confirm"
              @click="confirmDate"
            >
              Confirmar
            </button>
          </div>
        </div>

      </div>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { VTextField } from 'vuetify/components'

const props = defineProps({
  /** Valor — v-model — string no formato DD/MM/YYYY */
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Data',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: [String, Array],
    default: () => [],
  },
  hint: {
    type: String,
    default: '',
  },
  persistentHint: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'change', 'clear'])

// ─── Estado interno ───────────────────────────────────────────────────────────

const rootRef    = ref(null)
const isOpen     = ref(false)
const pickerStyle = ref({})

// Data temporária selecionada (antes de confirmar)
const tempDate = ref(null)

// Mês/ano que o calendário está exibindo
const today       = new Date()
const viewYear    = ref(today.getFullYear())
const viewMonth   = ref(today.getMonth()) // 0-based

// ─── Computed ─────────────────────────────────────────────────────────────────

const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const monthNames = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
]

const monthLabel = computed(() =>
  `${monthNames[viewMonth.value]} de ${viewYear.value}`
)

const daysInMonth = computed(() => {
  return new Date(viewYear.value, viewMonth.value + 1, 0).getDate()
})

// Dia da semana do primeiro dia do mês (0=Dom)
const firstDayOffset = computed(() => {
  return new Date(viewYear.value, viewMonth.value, 1).getDay()
})

const displayValue = computed(() => {
  return props.modelValue || ''
})

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseValue(val) {
  if (!val) return null
  const [d, m, y] = val.split('/')
  if (!d || !m || !y) return null
  return new Date(parseInt(y), parseInt(m) - 1, parseInt(d))
}

function isSelected(day) {
  if (!tempDate.value) return false
  return (
    tempDate.value.getDate()     === day &&
    tempDate.value.getMonth()    === viewMonth.value &&
    tempDate.value.getFullYear() === viewYear.value
  )
}

function isToday(day) {
  return (
    today.getDate()     === day &&
    today.getMonth()    === viewMonth.value &&
    today.getFullYear() === viewYear.value
  )
}

function formatDate(date) {
  const d = String(date.getDate()).padStart(2, '0')
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const y = date.getFullYear()
  return `${d}/${m}/${y}`
}

// ─── Ações ────────────────────────────────────────────────────────────────────

async function openPicker() {
  if (props.disabled) return

  // Inicializa a data temporária com o valor atual
  tempDate.value = parseValue(props.modelValue)

  // Se tem data, navega para o mês dela
  if (tempDate.value) {
    viewMonth.value = tempDate.value.getMonth()
    viewYear.value  = tempDate.value.getFullYear()
  } else {
    viewMonth.value = today.getMonth()
    viewYear.value  = today.getFullYear()
  }

  isOpen.value = true

  // Posiciona o picker abaixo do campo
  await nextTick()
  positionPicker()
}

function positionPicker() {
  if (!rootRef.value) return
  const rect = rootRef.value.getBoundingClientRect()
  const spaceBelow = window.innerHeight - rect.bottom
  const pickerH = 380

  pickerStyle.value = {
    position:  'fixed',
    left:      `${rect.left}px`,
    width:     `${Math.max(rect.width, 300)}px`,
    zIndex:    'var(--sisloc-z-dropdown, 100)',
    top: spaceBelow >= pickerH
      ? `${rect.bottom + 4}px`
      : `${rect.top - pickerH - 4}px`,
  }
}

function closePicker() {
  isOpen.value  = false
  tempDate.value = null
}

function selectDay(day) {
  tempDate.value = new Date(viewYear.value, viewMonth.value, day)
}

function confirmDate() {
  if (tempDate.value) {
    const formatted = formatDate(tempDate.value)
    emit('update:modelValue', formatted)
    emit('change', formatted)
  }
  closePicker()
}

function clearDate() {
  tempDate.value = null
  emit('update:modelValue', '')
  emit('clear')
  closePicker()
}

function prevMonth() {
  if (viewMonth.value === 0) {
    viewMonth.value = 11
    viewYear.value--
  } else {
    viewMonth.value--
  }
}

function nextMonth() {
  if (viewMonth.value === 11) {
    viewMonth.value = 0
    viewYear.value++
  } else {
    viewMonth.value++
  }
}
</script>

<style scoped>
.sisloc-datepicker {
  position: relative;
  width: 100%;
}

/* ─── Backdrop ───────────────────────────────────────────────────────────────── */
.sisloc-datepicker__backdrop {
  position: fixed;
  inset: 0;
  z-index: 99;
}

/* ─── Picker container ───────────────────────────────────────────────────────── */
.sisloc-datepicker__picker {
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 11px 15px 0 rgba(0, 0, 0, 0.20);
  overflow: hidden;
  min-width: 300px;
}

/* ─── Header laranja — mês/ano + navegação ───────────────────────────────────── */
.sisloc-datepicker__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #EC6A00;
  padding: 12px 8px;
  height: 56px;
}

.sisloc-datepicker__month-label {
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  text-transform: capitalize;
}

.sisloc-datepicker__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.15s ease;
}

.sisloc-datepicker__nav:hover {
  background: rgba(255, 255, 255, 0.15);
}

.sisloc-datepicker__nav:focus-visible {
  outline: 2px solid #FFFFFF;
  outline-offset: 2px;
}

/* ─── Calendário ─────────────────────────────────────────────────────────────── */
.sisloc-datepicker__calendar {
  padding: 16px 12px 8px;
}

/* Dias da semana */
.sisloc-datepicker__weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 8px;
}

.sisloc-datepicker__weekdays span {
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #79767A;
  text-align: center;
  padding: 4px 0;
}

/* Grid de dias */
.sisloc-datepicker__days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

/* Dia */
.sisloc-datepicker__day {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: none;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #1D1B20;
  transition: background 0.15s ease;
  margin: 0 auto;
}

.sisloc-datepicker__day--empty {
  pointer-events: none;
}

.sisloc-datepicker__day:hover:not(.sisloc-datepicker__day--selected):not(.sisloc-datepicker__day--empty) {
  background: rgba(236, 106, 0, 0.12);
}

/* Hoje */
.sisloc-datepicker__day--today:not(.sisloc-datepicker__day--selected) {
  color: #EC6A00;
  font-weight: 700;
}

/* Selecionado */
.sisloc-datepicker__day--selected {
  background: #EC6A00;
  color: #FFFFFF;
  font-weight: 500;
}

/* ─── Footer ─────────────────────────────────────────────────────────────────── */
.sisloc-datepicker__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px 12px;
  border-top: 1px solid #E6E1E6;
}

.sisloc-datepicker__btn {
  height: 36px;
  padding: 0 16px;
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12px;
  cursor: pointer;
  transition: background 0.15s ease;
}

/* Limpar — outlined vermelho */
.sisloc-datepicker__btn--clear {
  background: transparent;
  border: 1px solid #EA3A3D;
  color: #EA3A3D;
}

.sisloc-datepicker__btn--clear:hover {
  background: rgba(234, 58, 61, 0.08);
}

/* Cancelar — outlined neutro */
.sisloc-datepicker__btn--cancel {
  background: transparent;
  border: 1px solid #79767A;
  color: #1D1B20;
}

.sisloc-datepicker__btn--cancel:hover {
  background: rgba(0, 0, 0, 0.04);
}

/* Confirmar — verde CTA */
.sisloc-datepicker__btn--confirm {
  background: #4CAF50;
  border: none;
  color: #FFFFFF;
}

.sisloc-datepicker__btn--confirm:hover {
  background: #006709;
}
</style>
