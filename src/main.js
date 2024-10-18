import { createApp } from 'vue'
import "@/assets/css/reset.css"
import App from './App.vue'
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200..900&display=swap';
document.head.appendChild(link);


createApp(App).mount('#app')
