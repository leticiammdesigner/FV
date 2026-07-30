<!--
  SISLOC DS — FORÇA DE VENDAS
  SislocAvatar.vue

  Wrapper de v-avatar com três tipos de conteúdo: text · icon · image.
  A tipografia das iniciais varia por tamanho — a tabela vive aqui
  dentro para o consumidor não precisar conhecê-la.

  Extraído de src/stories/Avatar.stories.js sem alteração visual.
-->

<template>
  <VAvatar
    :size="size"
    :rounded="type === 'image' ? '50' : undefined"
    :style="avatarStyle"
  >
    <!-- O slot padrão substitui o conteúdo inteiro (ex.: contador "+3") -->
    <slot>
      <VImg
        v-if="type === 'image'"
        :src="src"
        :alt="alt"
      />

      <VIcon
        v-else-if="type === 'icon'"
        color="white"
        :size="size / 2"
      >{{ icon }}</VIcon>

      <span
        v-else
        :style="textStyle"
      >{{ text }}</span>
    </slot>
  </VAvatar>
</template>

<script setup>
import { computed } from 'vue'
import { VAvatar, VIcon, VImg } from 'vuetify/components'
import { tokens } from '../../tokens/tokens.js'

const AVATAR = tokens.components.avatar

const props = defineProps({
  /** Tipo de conteúdo */
  type: {
    type: String,
    default: 'text',
    validator: (v) => ['text', 'icon', 'image'].includes(v),
  },
  /** 16 · 24 · 32 · 48 · 64 */
  size: {
    type: Number,
    default: 32,
  },
  /** Iniciais — usado quando type="text" */
  text: {
    type: String,
    default: '',
  },
  /** URL da foto — usado quando type="image" */
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'Avatar',
  },
  /** Ícone MDI — usado quando type="icon" */
  icon: {
    type: String,
    default: 'mdi-account',
  },
})

const avatarStyle = computed(() => {
  if (props.type === 'image') return {}

  return {
    background: AVATAR.background,
    // Só o tipo text recebe padding — preserva o recorte original do Figma
    ...(props.type === 'text' ? { padding: AVATAR.textPadding } : {}),
  }
})

const textStyle = computed(() => {
  const typo = AVATAR.typography[props.size] ?? AVATAR.typography[32]

  return {
    color:         AVATAR.textColor,
    fontSize:      typo.fontSize,
    lineHeight:    typo.lineHeight,
    letterSpacing: typo.letterSpacing,
    fontFamily:    tokens.typography.fontFamily,
    fontWeight:    400,
    textAlign:     'center',
    whiteSpace:    'nowrap',
  }
})
</script>
