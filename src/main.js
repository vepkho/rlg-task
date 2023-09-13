import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";

import "@fontsource-variable/montserrat";
import "@fontsource-variable/inter";
import "@fontsource/poppins";

createApp(App).use(router).mount("#app");
