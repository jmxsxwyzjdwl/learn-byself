/**
 * 为了描述不是用typeScript编写的类库的类型，我们需要声明类库导出的API。由于大部分程序只提供少数的
 * 顶级对象，命名空间是用来表示它们的一个好办法。
 * 我们称其为声明是因为它不是外部程序的具体实现。我们通常在.d.ts里写这些声明。
*/

// 处理解析 ts 中声明文件 （vue）

declare module "*.vue" {
    import { App, defineComponent } from 'vue'
    const component: ReturnType <typeof defineComponent> & {
        install(app: App): void
    }
    
    export default component
}