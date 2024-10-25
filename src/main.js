import { createApp } from 'vue'
import "@/assets/css/reset.css"
import App from './App.vue'
// 這是整合後的路由器(使用專案預設)
import createRouter from './router/index'
// 這是狀態器 pinia
import { createPinia } from 'pinia'

// 創建應用程式實例
const app = createApp(App);

// 動態加載 Google 字體
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200..900&display=swap';
document.head.appendChild(link);

// 以下是路由器 vue-router 相關設置
const router = createRouter();

// 以下是路由器  vue-router 相關設置
app.use(router)

app.use(createPinia())

// 掛載應用程式
app.mount('#app');

// createApp(App).mount('#app')
