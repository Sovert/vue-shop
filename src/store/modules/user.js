import user from '@/api/user' 

const actions = {
    register({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            user.register({username: username.trim(), password: password}).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            user.login({username: username.trim(), password: password}).then(response => {
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