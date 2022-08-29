import { createApp } from 'vue'
import App from './src/App.vue'

import spuerUi from 'cx-ui'

const app = createApp(App)

app.use(spuerUi)

app.mount("#app")