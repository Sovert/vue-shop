import {login, register} from '@/api/user' 

const actions = {
    register({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            register({username: username.trim(), password: password}).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({username: username.trim(), password: password}).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    actions
}