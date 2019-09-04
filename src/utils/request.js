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
        return Promise.reject(new Error(res.msg || 'Error'))
    },
    error => {
        console.log('err' + error)// for debug
        Message({
          message: error.message,
          type: 'error',
          duration: 3 * 1000
        })
        return Promise.reject(error)
      }
    
)
export default service
