import Vue from 'vue'
import App from './App.vue'
import{store} from "./store/store";

Vue.use(require('vue-faker'));
Vue.config.productionTip = false;


new Vue({
    store:store,
  render: h => h(App),
}).$mount('#app')
