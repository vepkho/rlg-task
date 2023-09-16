import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import i18n from "./i18n";
import "./main.css";

import "@fontsource-variable/montserrat";
import "@fontsource-variable/inter";
import "@fontsource/poppins";

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(store);

app.mount("#app");
