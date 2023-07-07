import { createApp } from 'vue'
import './style.css'
import './assets/cursor.css'
import App from './App.vue'
import SvgIcon from "vue3-icon";

const app = createApp(App);
app.component("svg-icon", SvgIcon);

app.mount("#app");
