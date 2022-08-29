import Button from '@cx-ui/button'
import Dialog from '@cx-ui/dialog'
import { App } from 'vue'

const comp = [
    Button,
    Dialog
]

// 全局遍历注册组件
const install = (app: App) => {
    comp.forEach(com => {
        app.component(com.name, com)
    })
}

export default {
    install
}