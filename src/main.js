import App from '@/App.vue'
import components from '@/components/UI'
import router from '@/router'
import { createApp } from 'vue'

const app = createApp(App)

// Object.keys(components).forEach(component => {
//     app.component(component.name, components)
// });
components.forEach(component => {
    app.component(component.name, component)
});

app.use(router)

app.mount('#app')
