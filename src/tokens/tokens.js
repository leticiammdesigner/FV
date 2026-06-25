// ============================================
// SISLOC DS — FORÇA DE VENDAS
// Tokens Semânticos
// ============================================

export const tokens = {

  // --- CORES PRIMITIVAS (valores brutos) ---
  primitive: {
    orange: {
      default:  '#EC6A00',
      hover:    '#C35700',
      pressed:  '#A34700',
    },
    green: {
      default:  '#4CAF50',
      hover:    '#006709',
      pressed:  '#004D06',
    },
    red: {
      default:  '#EA3A3D',
      hover:    '#C62828',
      pressed:  '#A01C1C',
    },
    neutral: {
      0:        '#FFFFFF',
      20:       '#1D1B20',
      50:       '#79767A',
      60:       '#605D61',
      80:       '#48464A',
      90:       '#E6E1E6',
      95:       '#CAC5CA',
    },
  },

  // --- TOKENS SEMÂNTICOS (intenção) ---
  action: {
    primary: {
      default:  '#EC6A00',  // botão principal
      hover:    '#C35700',
      pressed:  '#A34700',
    },
    secondary: {
      default:  'transparent',
      text:     '#EC6A00',
      border:   '#EC6A00',
    },
    cancel: {
      default:  'transparent',
      text:     '#1D1B20',
      border:   '#79767A',
    },
    confirm: {
      default:  '#4CAF50',  // salvar, confirmar
      hover:    '#006709',
      pressed:  '#004D06',
    },
    danger: {
      default:  '#EA3A3D',  // deletar, remover
      hover:    '#C62828',
      pressed:  '#A01C1C',
    },
    tertiary: {
      default:  'transparent',
      text:     '#EC6A00',
    },
  },

  disabled: {
    background: '#E6E1E6',
    text:       '#CAC5CA',
    border:     '#E6E1E6',
  },

  feedback: {
    error:    '#EA3A3D',
    success:  '#4CAF50',
    warning:  '#EC6A00',
  },

  text: {
    primary:    '#1D1B20',
    secondary:  '#79767A',
    onDark:     '#FFFFFF',
    disabled:   '#CAC5CA',
  },

  border: {
    default:    '#79767A',
    focus:      '#EC6A00',
    error:      '#EA3A3D',
    disabled:   '#E6E1E6',
  },

  // --- SHAPE ---
  radius: {
    field:    '8px',
    card:     '12px',
    chip:     '10px',
    dialog:   '16px',
  },

  // --- TIPOGRAFIA ---
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      size:           '14px',
      weight:         '500',
      textTransform:  'none',
      letterSpacing:  'normal',
    },
    label: {
      size:   '12px',
      weight: '400',
    },
    body: {
      md: { size: '14px', weight: '400' },
      lg: { size: '16px', weight: '400' },
    },
  },

  // --- ELEVAÇÃO ---
  elevation: {
    none:   'none',
    card:   '0px 1px 3px rgba(0,0,0,0.12)',
    dialog: '0px 8px 24px rgba(0,0,0,0.16)',
  },

  // --- CHIPS / STATUS ---
  chip: {
    // Status de Lead
    desqualificado: { bg: '#FFEBEE', text: '#D32F2F' },
    convertido:     { bg: '#F1F8E9', text: '#2E7D32' },
    qualificar:     { bg: '#E1F5FE', text: '#2962FF' },

    // Status de Proposta
    perdido:        { bg: '#FFEBEE', text: '#D32F2F' },
    ganho:          { bg: '#F1F8E9', text: '#2E7D32' },
    elaboracao:     { bg: '#FFE0B2', text: '#FF5722' },
    novo:           { bg: '#E1F5FE', text: '#2962FF' },
    negociacao:     { bg: '#B388FF', text: '#FFFFFF' },

    // Temperatura
    quente:         { bg: '#FFEBEE', text: '#D32F2F' },
    morno:          { bg: '#FFF3E0', text: '#BF360C' },
    frio:           { bg: '#E1F5FE', text: '#2962FF' },

    // Outlined
    outlined:       { bg: 'transparent', text: '#323033', border: '#B0BEC5' },

    // Compartilhado
    borderRadius: '10px',
    fontSize:     '10px',
    fontWeight:   '400',
    lineHeight:   '20px',
    padding:      '0 12px',
  },
}