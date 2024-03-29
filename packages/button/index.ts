// 每个组件的入口文件

import { App } from 'vue'
import Button from './src/button.vue'

Button.install = (app: App) => {
    app.component(Button.name, Button)
}

export default Button