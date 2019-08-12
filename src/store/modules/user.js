import { register } from '@/api/user' 

const actions = {
    register({ commit }, userInfo) {
        const { username, password } = userInfo
        register({username: username.trim(), password: password})
        // commit('SET_TOKEN')
    }
}

export default {
    namespaced: true,
    actions
}