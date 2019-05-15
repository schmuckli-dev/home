import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#1B305A", // #E53935
    secondary: "#09193C", // #FFCDD2
    accent: "#232323" // #3F51B5
  }
})
