import { setup } from '@storybook/vue3'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '../src/styles/vuetify-overrides.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'sislocLight',
    themes: {
      sislocLight: {
        dark: false,
        colors: {
          // Cor primária — usada pelo Vuetify em focus, label ativo, chevron
          primary:   '#EC6A00',
          // Cor de erro — usada em error-messages, borda de erro
          error:     '#EA3A3D',
          // Cor de sucesso
          success:   '#4CAF50',
          // Surface e background
          surface:   '#FFFFFF',
          background:'#FFFFFF',
        },
      },
    },
  },
})

setup((app) => {
  app.use(vuetify)
})

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
  },
}

export default preview