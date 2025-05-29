import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ Import ApexCharts
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

app.use(router)

// ✅ Register ApexCharts globally
app.use(VueApexCharts)
app.component('apexchart', VueApexCharts)

app.mount('#app')
