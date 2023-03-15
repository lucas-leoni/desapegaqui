import Vue from 'vue';
import Vuelidate from 'vuelidate';
import LogRocket from 'logrocket';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

LogRocket.init('v2ujcx/desapegaqui');

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
