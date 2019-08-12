import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000,
    changeOrigin: true
})

service.interceptors.response.use(
    response => {
        console.log(response)
    }
    
)
export default service
