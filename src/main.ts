// import { createApp } from 'vue'
import App from "./App.vue";
import { game } from "./game/index";
import { renderer } from './runtime-canvas/index';
// createApp(App).mount('#app')


renderer.createApp(App).mount(game.stage);
