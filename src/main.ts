// import { createApp } from 'vue'
import App from "./App.vue";
import { game } from "./game/index";
import { createApp } from './runtime-canvas/index';
// createApp(App).mount('#app')


createApp(App).mount(game.stage);
