import Vue from 'vue'
import VueI18n from 'vue-i18n'
import './plugins/vuetify'
import { translations, getLanguage } from "./translation";
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: getLanguage(), // set locale
  fallbackLocale: 'en',
  messages: translations // set locale messages
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
