import Vue from "vue";
import App from "./App.vue";
import moment from "moment";
import router from "./router";
import store from "./store";
import { Auth0Plugin, onAuth } from "@bcwdev/auth0-vue";
import { domain, clientId, audience } from "./authConfig";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY h:mm:ss a");
  }
});
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
