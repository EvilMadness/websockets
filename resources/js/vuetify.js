import Vue from 'vue'

import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#8B2332',
                secondary: '#808285',
                accent: '#8c9eff',
                error: '#B3282D',
                success: '#41b328'
            },
        },
    },
})
