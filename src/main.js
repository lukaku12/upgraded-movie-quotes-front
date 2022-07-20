import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";
import "@/config/pusher/index";
import "@/index.css";

import App from "./App.vue";
import router from "./router";
import i18n from "@/lang/index";

const app = i18n(createApp(App));

app.use(createPinia());
app.use(router);

app.mount("#app");
