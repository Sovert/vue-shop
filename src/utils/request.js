import axios from 'axios'
import { Message } from 'element-ui';

const service = axios.create({
    baseURL: '/api',
    timeout: 5000,
    changeOrigin: true
})

service.interceptors.request.use(
    config => {
        // do something before request is sent
        return config
    },

    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        if(res.status === 200) {
            return res
        }
        Message({
            message: res.msg || 'Error',
            type: 'error',
            duration: 3000
        })
    }
    
)
export default service
