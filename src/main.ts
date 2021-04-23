import { createApp } from 'vue'
import router from "./router"
import store from "./store"
import App from '@/App'
import element from "./plugins/element-plus"

let app = createApp(App)
element(app)
app.use(router).use(store).mount("#app")