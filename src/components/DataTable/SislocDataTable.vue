<template>
  <div class="sisloc-datatable">

    <!-- Barra de seleção em lote — só aparece com itens selecionados -->
    <div v-if="selectable && selectedRows.length > 0" class="sisloc-datatable__batchbar">
      <div class="sisloc-datatable__batchbar-info">
        <span class="sisloc-datatable__batchbar-count">
          {{ selectedRows.length }} {{ selectedRows.length === 1 ? 'registro selecionado' : 'registros selecionados' }}
          <template v-if="entityLabel"> em {{ entityLabel }}</template>
        </span>
        <span
          v-for="chip in relatedChips"
          :key="chip.label"
          class="sisloc-datatable__batchbar-chip"
        >
          {{ chip.label }}
        </span>
      </div>
      <button class="sisloc-datatable__batchbar-clear" type="button" @click="clearSelection">
        Limpar seleção
      </button>
    </div>

    <!-- Tabela -->
    <div class="sisloc-datatable__scroll">
      <table class="sisloc-datatable__table" role="table">

        <!-- Head -->
        <thead>
          <tr class="sisloc-datatable__head-row">
            <th v-if="selectable" class="sisloc-datatable__head-cell sisloc-datatable__head-cell--checkbox">
              <input
                type="checkbox"
                class="sisloc-datatable__checkbox"
                :checked="allSelected"
                :indeterminate.prop="someSelected"
                aria-label="Selecionar todos"
                @change="toggleSelectAll"
              />
            </th>
            <th
              v-for="col in columns"
              :key="col.key"
              class="sisloc-datatable__head-cell"
              :class="{ 'sisloc-datatable__head-cell--sortable': col.sortable }"
              @click="col.sortable && toggleSort(col.key)"
            >
              <span class="sisloc-datatable__head-cell-content">
                {{ col.label }}
                <span v-if="col.sortable" class="sisloc-datatable__sort-icon" :class="{
                  'sisloc-datatable__sort-icon--active': sortKey === col.key
                }">
                  <svg v-if="sortKey !== col.key" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10L12 15L17 10H7Z" fill="#B0BEC5" opacity="0.5"/>
                  </svg>
                  <svg v-else-if="sortDir === 'asc'" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 14L12 9L17 14H7Z" fill="#1D1B20"/>
                  </svg>
                  <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10L12 15L17 10H7Z" fill="#1D1B20"/>
                  </svg>
                </span>
              </span>
            </th>
            <th v-if="$slots.actions" class="sisloc-datatable__head-cell sisloc-datatable__head-cell--actions" />
          </tr>
        </thead>

        <!-- Body -->
        <tbody>
          <tr
            v-for="row in sortedRows"
            :key="row.id"
            class="sisloc-datatable__row"
            :class="{ 'sisloc-datatable__row--selected': isSelected(row.id) }"
          >
            <td v-if="selectable" class="sisloc-datatable__cell sisloc-datatable__cell--checkbox">
              <input
                type="checkbox"
                class="sisloc-datatable__checkbox"
                :checked="isSelected(row.id)"
                :aria-label="`Selecionar linha ${row.id}`"
                @change="toggleRow(row.id)"
              />
            </td>
            <td v-for="col in columns" :key="col.key" class="sisloc-datatable__cell">
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                {{ row[col.key] }}
              </slot>
            </td>
            <td v-if="$slots.actions" class="sisloc-datatable__cell sisloc-datatable__cell--actions">
              <slot name="actions" :row="row" />
            </td>
          </tr>

          <!-- Empty state -->
          <tr v-if="sortedRows.length === 0">
            <td :colspan="totalCols" class="sisloc-datatable__empty">
              <slot name="empty" />
            </td>
          </tr>
        </tbody>

      </table>
    </div>

    <!-- Paginação -->
    <slot name="pagination" />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  /** Definição das colunas: [{ key, label, sortable? }] */
  columns: {
    type: Array,
    required: true,
  },
  /** Linhas: cada objeto precisa ter uma chave `id` */
  rows: {
    type: Array,
    required: true,
  },
  /** Habilita seleção múltipla via checkbox */
  selectable: {
    type: Boolean,
    default: false,
  },
  /** IDs selecionados — v-model:selected */
  selected: {
    type: Array,
    default: () => [],
  },
  /** Nome da entidade exibido na batch bar — ex: "Leads" */
  entityLabel: {
    type: String,
    default: '',
  },
  /**
   * Chips de contexto relacionado na batch bar
   * ex: [{ label: '+2 em Contas' }, { label: '+2 em Negócios' }]
   */
  relatedChips: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:selected', 'sort'])

// ─── Seleção ──────────────────────────────────────────────────────────────────

const selectedRows = computed({
  get: () => props.selected,
  set: (val) => emit('update:selected', val),
})

function isSelected(id) {
  return selectedRows.value.includes(id)
}

function toggleRow(id) {
  const next = isSelected(id)
    ? selectedRows.value.filter(x => x !== id)
    : [...selectedRows.value, id]
  selectedRows.value = next
}

const allSelected = computed(() =>
  props.rows.length > 0 && props.rows.every(r => isSelected(r.id))
)

const someSelected = computed(() =>
  selectedRows.value.length > 0 && !allSelected.value
)

function toggleSelectAll() {
  selectedRows.value = allSelected.value ? [] : props.rows.map(r => r.id)
}

function clearSelection() {
  selectedRows.value = []
}

// ─── Sort ─────────────────────────────────────────────────────────────────────

const sortKey = ref(null)
const sortDir = ref('asc') // 'asc' | 'desc'

function toggleSort(key) {
  if (sortKey.value !== key) {
    sortKey.value = key
    sortDir.value = 'asc'
  } else if (sortDir.value === 'asc') {
    sortDir.value = 'desc'
  } else {
    sortKey.value = null
    sortDir.value = 'asc'
  }
  emit('sort', { key: sortKey.value, dir: sortDir.value })
}

const sortedRows = computed(() => {
  if (!sortKey.value) return props.rows
  const key = sortKey.value
  const dir = sortDir.value === 'asc' ? 1 : -1
  return [...props.rows].sort((a, b) => {
    const av = a[key]
    const bv = b[key]
    if (av === bv) return 0
    return av > bv ? dir : -dir
  })
})

const totalCols = computed(() =>
  props.columns.length + (props.selectable ? 1 : 0) + 1
)
</script>

<style scoped>
.sisloc-datatable {
  width: 100%;
  background: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  font-family: Roboto, sans-serif;
}

/* ─── Batch bar ──────────────────────────────────────────────────────────────── */
.sisloc-datatable__batchbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #FDF0E4;
  gap: 12px;
}

.sisloc-datatable__batchbar-info {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.sisloc-datatable__batchbar-count {
  font-size: 13px;
  font-weight: 500;
  color: #1D1B20;
}

.sisloc-datatable__batchbar-chip {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 12px;
  border: 1px solid #E6C7A8;
  background: transparent;
  font-size: 12px;
  color: #1D1B20;
}

.sisloc-datatable__batchbar-clear {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 16px;
  border: 1px solid #1D1B20;
  border-radius: 8px;
  background: transparent;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #1D1B20;
  cursor: pointer;
  white-space: nowrap;
}

.sisloc-datatable__batchbar-clear:hover {
  background: rgba(0, 0, 0, 0.04);
}

/* ─── Scroll wrapper ─────────────────────────────────────────────────────────── */
.sisloc-datatable__scroll {
  overflow-x: auto;
}

/* ─── Table ──────────────────────────────────────────────────────────────────── */
.sisloc-datatable__table {
  width: 100%;
  border-collapse: collapse;
}

/* ─── Head ───────────────────────────────────────────────────────────────────── */
.sisloc-datatable__head-row {
  background: #F1F1F1;
}

.sisloc-datatable__head-cell {
  padding: 12px 16px;
  text-align: left;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #1D1B20;
  white-space: nowrap;
  user-select: none;
}

.sisloc-datatable__head-cell--checkbox,
.sisloc-datatable__head-cell--actions {
  width: 48px;
}

.sisloc-datatable__head-cell--sortable {
  cursor: pointer;
}

.sisloc-datatable__head-cell-content {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.sisloc-datatable__sort-icon {
  display: inline-flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.15s ease;
}

.sisloc-datatable__head-cell--sortable:hover .sisloc-datatable__sort-icon,
.sisloc-datatable__sort-icon--active {
  opacity: 1;
}

/* ─── Rows ───────────────────────────────────────────────────────────────────── */
.sisloc-datatable__row {
  border-bottom: 1px solid #E6E1E6;
  transition: background 0.1s ease;
}

.sisloc-datatable__row:hover {
  background: rgba(0, 0, 0, 0.02);
}

.sisloc-datatable__row--selected {
  background: #FDF0E4;
}

.sisloc-datatable__row--selected:hover {
  background: #FBE6D2;
}

.sisloc-datatable__cell {
  padding: 12px 16px;
  font-size: 13px;
  color: #1D1B20;
  vertical-align: middle;
  white-space: nowrap;
}

.sisloc-datatable__cell--checkbox,
.sisloc-datatable__cell--actions {
  width: 48px;
}

/* ─── Checkbox ───────────────────────────────────────────────────────────────── */
.sisloc-datatable__checkbox {
  width: 18px;
  height: 18px;
  accent-color: #EC6A00;
  cursor: pointer;
}

/* ─── Empty state ────────────────────────────────────────────────────────────── */
.sisloc-datatable__empty {
  padding: 0;
  white-space: normal;
}
</style>
