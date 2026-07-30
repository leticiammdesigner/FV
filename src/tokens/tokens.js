// ============================================
// SISLOC DS — FORÇA DE VENDAS
// Tokens Semânticos v2
//
// Arquitetura de 3 camadas:
//   1. primitive  — valores brutos (hex, px)
//   2. semantic   — intenção (action, text, border…)
//   3. component  — tokens por componente (button, input, select…)
//
// Regra: nenhum hex fixo fora deste arquivo.
// ============================================

export const tokens = {

  // ─────────────────────────────────────────
  // 1. PRIMITIVAS — valores brutos
  // ─────────────────────────────────────────
  primitive: {
    orange: {
      default: '#EC6A00',
      hover:   '#C35700',
      pressed: '#A34700',
    },
    green: {
      default: '#4CAF50',
      hover:   '#006709',
      pressed: '#004D06',
    },
    red: {
      default: '#EA3A3D',
      hover:   '#C62828',
      pressed: '#A01C1C',
    },
    purple: {
      default: '#68548E',  // Locsis brand
      hover:   '#523F72',
      pressed: '#3D2E57',
    },
    neutral: {
      0:   '#FFFFFF',
      20:  '#1D1B20',
      50:  '#79767A',
      60:  '#605D61',
      80:  '#48464A',
      90:  '#E6E1E6',
      95:  '#CAC5CA',
    },
  },

  // ─────────────────────────────────────────
  // 2. SEMÂNTICA — intenção
  // ─────────────────────────────────────────

  // Ações / botões
  action: {
    primary: {
      default: '#EC6A00',
      hover:   '#C35700',
      pressed: '#A34700',
    },
    secondary: {
      default: 'transparent',
      text:    '#EC6A00',
      border:  '#EC6A00',
    },
    cancel: {
      default: 'transparent',
      text:    '#1D1B20',
      border:  '#79767A',
    },
    confirm: {
      default: '#4CAF50',
      hover:   '#006709',
      pressed: '#004D06',
    },
    danger: {
      default: '#EA3A3D',
      hover:   '#C62828',
      pressed: '#A01C1C',
    },
    tertiary: {
      default: 'transparent',
      text:    '#EC6A00',
    },
  },

  // Desabilitado — compartilhado por todos os componentes
  disabled: {
    background: '#E6E1E6',
    text:       '#CAC5CA',
    border:     '#E6E1E6',
  },

  // Feedback semântico
  feedback: {
    error:   '#EA3A3D',
    success: '#4CAF50',
    warning: '#EC6A00',
    info:    '#1976D2',
  },

  // Tipografia de texto
  text: {
    primary:   '#1D1B20',
    secondary: '#79767A',
    onDark:    '#FFFFFF',
    disabled:  '#CAC5CA',
    error:     '#EA3A3D',
  },

  // Bordas compartilhadas
  border: {
    default:  '#79767A',
    focus:    '#EC6A00',   // ← usado em todos os campos com foco
    error:    '#EA3A3D',
    disabled: '#E6E1E6',
    subtle:   '#E6E1E6',   // separadores e divisores
  },

  // Shapes
  radius: {
    field:   '8px',
    card:    '12px',
    chip:    '16px',
    dialog:  '16px',
    button:  '8px',
    tooltip: '4px',
  },

  // Tipografia
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      size:          '14px',
      weight:        '500',
      textTransform: 'none',
      letterSpacing: 'normal',
    },
    label: {
      size:   '12px',
      weight: '400',
    },
    body: {
      sm: { size: '12px', weight: '400' },
      md: { size: '14px', weight: '400' },
      lg: { size: '16px', weight: '400' },
    },
    heading: {
      sm: { size: '16px', weight: '500' },
      md: { size: '20px', weight: '500' },
      lg: { size: '24px', weight: '500' },
    },
  },

  // Elevação / sombra
  elevation: {
    none:     'none',
    card:     '0px 1px 3px rgba(0,0,0,0.12)',
    dialog:   '0px 8px 24px rgba(0,0,0,0.16)',
    tooltip:  '0px 2px 8px rgba(0,0,0,0.14)',
    dropdown: '0px 4px 12px rgba(0,0,0,0.14)',
  },

  // ─────────────────────────────────────────
  // Z-INDEX — escala semântica obrigatória
  // Nunca usar valores arbitrários (999, 9999)
  // ─────────────────────────────────────────
  zIndex: {
    base:     0,
    raised:   1,    // cards levantados, sticky dentro de scroll
    dropdown: 100,  // select, autocomplete, menus
    sticky:   200,  // headers e toolbars fixos
    overlay:  300,  // backdrop de modal/drawer
    modal:    400,  // modal, dialog, drawer
    toast:    500,  // snackbar, notificações
    tooltip:  600,  // tooltips (sempre acima de tudo)
  },

  // ─────────────────────────────────────────
  // CHIP — cores por status
  // ─────────────────────────────────────────
  chip: {
    // Status de Lead
    desqualificado: { bg: '#FFEBEE', text: '#B71C1C', border: '#EF9A9A' },
    convertido:     { bg: '#E8F5E9', text: '#1B5E20', border: '#A5D6A7' },
    qualificar:     { bg: '#E3F2FD', text: '#0D47A1', border: '#90CAF9' },

    // Status de Proposta
    perdido:        { bg: '#FFEBEE', text: '#B71C1C', border: '#EF9A9A' },
    ganho:          { bg: '#E8F5E9', text: '#1B5E20', border: '#A5D6A7' },
    elaboracao:     { bg: '#FFF8E1', text: '#F57F17', border: '#FFE082' },
    novo:           { bg: '#E3F2FD', text: '#0D47A1', border: '#90CAF9' },
    negociacao:     { bg: '#F3E5F5', text: '#4A148C', border: '#CE93D8' },

    // Temperatura
    quente:         { bg: '#FFEBEE', text: '#B71C1C', border: '#EF9A9A' },
    morno:          { bg: '#FFF8E1', text: '#F57F17', border: '#FFE082' },
    frio:           { bg: '#E3F2FD', text: '#0D47A1', border: '#90CAF9' },

    // Outlined (neutro)
    outlined:       { bg: 'transparent', text: '#79767A', border: '#79767A' },

    // Kanban — tipografia diferente, mesmas cores dos status
    kanban: {
      fontSize:      '10px',
      fontWeight:    '500',
      lineHeight:    '12px',
      letterSpacing: '0.2px',
    },
  },

  // ─────────────────────────────────────────
  // 3. COMPONENTES — tokens específicos
  // Referenciam sempre a camada semântica.
  // ─────────────────────────────────────────
  components: {

    button: {
      height: {
        lg: '48px',
        md: '40px',
        sm: '32px',
      },
      borderRadius:  '8px',
      fontSize:      '14px',
      fontWeight:    '500',
      shadow:        'none',
      textTransform: 'none',
    },

    input: {
      height:       '48px',
      borderRadius: '8px',
      fontSize:     '14px',
      borderColor:  '#79767A',
      focusColor:   '#EC6A00',
      errorColor:   '#EA3A3D',
      disabledBg:   '#E6E1E6',
      labelSize:    '12px',
      hintSize:     '12px',
    },

    select: {
      height:         '48px',
      borderRadius:   '8px',
      fontSize:       '14px',
      borderColor:    '#79767A',
      focusColor:     '#EC6A00',
      errorColor:     '#EA3A3D',
      disabledBg:     '#E6E1E6',
      dropdownShadow: '0px 4px 12px rgba(0,0,0,0.14)',
      itemHeight:     '44px',
      selectedBg:     '#E6E1E6',
    },

    textarea: {
      borderRadius: '8px',
      fontSize:     '14px',
      borderColor:  '#79767A',
      focusColor:   '#EC6A00',
      errorColor:   '#EA3A3D',
      disabledBg:   '#E6E1E6',
      minHeight:    '96px',
      resize:       'vertical',
    },

    modal: {
      borderRadius:   '16px',
      shadow:         '0px 8px 24px rgba(0,0,0,0.16)',
      backdropColor:  'rgba(0,0,0,0.48)',
      zIndex:         400,
      backdropZIndex: 300,
      maxWidth:       '560px',
      padding:        '24px',
    },

    snackbar: {
      borderRadius: '8px',
      shadow:       '0px 4px 12px rgba(0,0,0,0.14)',
      zIndex:       500,
      minWidth:     '320px',
      maxWidth:     '480px',
    },

    tooltip: {
      borderRadius: '4px',
      shadow:       '0px 2px 8px rgba(0,0,0,0.14)',
      zIndex:       600,
      fontSize:     '12px',
      padding:      '6px 10px',
      bg:           '#1D1B20',
      text:         '#FFFFFF',
    },

    // Valores conferidos contra o componente real (SislocChip.vue).
    chip: {
      height:        '20px',
      borderRadius:  '10px',
      fontSize:      '10px',
      fontWeight:    '400',
      lineHeight:    '20px',
      letterSpacing: 'normal',
      padding:       '0 12px',
    },

    card: {
      borderRadius: '12px',
      shadow:       '0px 1px 3px rgba(0,0,0,0.12)',
      border:       '#E6E1E6',
      padding:      '16px',
      bg:           '#FFFFFF',
    },

    badge: {
      borderRadius: '10px',
      fontSize:     '11px',
      fontWeight:   '500',
      minWidth:     '20px',
      height:       '20px',
      padding:      '0 6px',
    },

    // Escala e tipografia conferidas contra o componente real
    // (SislocAvatar.vue) — 5 tamanhos, chaveados pelo valor em px.
    avatar: {
      background:   '#304FFE',
      textColor:    '#FFFFFF',
      borderRadius: '50%',
      // Padding aplicado apenas ao tipo `text`
      textPadding:  '10px',
      sizes: [16, 24, 32, 48, 64],
      // Tipografia das iniciais varia por tamanho
      typography: {
        16: { fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' },
        24: { fontSize: '14px', lineHeight: '22px', letterSpacing: '0.014px' },
        32: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' },
        48: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' },
        64: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' },
      },
    },

    iconButton: {
      size:             '40px',
      iconSize:         '24px',
      padding:          '8px',
      borderRadius:     '360px',
      background:       '#F1F1F1',
      hoverBackground:  '#E6E1E6',
      activeBackground: '#D6D0D6',
      disabledOpacity:  '0.38',
    },

    tabs: {
      height:          '48px',
      fontSize:        '14px',
      fontWeight:      '500',
      activeColor:     '#EC6A00',
      activeIndicator: '#EC6A00',
      inactiveColor:   '#79767A',
      borderBottom:    '#E6E1E6',
    },

    breadcrumb: {
      fontSize:      '14px',
      activeColor:   '#1D1B20',
      inactiveColor: '#79767A',
      dividerColor:  '#79767A',
      separatorChar: '/',
    },

    accordion: {
      borderRadius:     '8px',
      headerHeight:     '56px',
      headerFontSize:   '14px',
      headerFontWeight: '500',
      border:           '#E6E1E6',
      divider:          '#E6E1E6',
      contentPadding:   '16px',
    },
  },
}