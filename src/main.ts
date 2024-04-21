import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

axios.interceptors.request.use(
  (request) => {
    const jwtToken = localStorage.getItem('rankiei-jwtToken')
    request.headers['Authorization'] = `Bearer ${jwtToken}`
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      alert('Ops! Você será direcionado para Entrada')
      localStorage.removeItem('rankiei-jwtToken')
      window.location.href = '/sign-in'
    }
    return Promise.reject(error)
  }
)

app.mount('#app')
