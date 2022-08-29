// 每个组件的入口文件

import { App } from 'vue'
import Dialog from './src/dialog.vue'

Dialog.install = (app: App) => {
    app.component(Dialog.name, Dialog)
}

export default Dialog