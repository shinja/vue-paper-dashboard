import { getField, updateField } from 'vuex-map-fields'

const initialState = () => {
    return {
        account: null,
        exp: null,
        iat: null,
        token: null,
    }
}
export const state = initialState()

export const actions = {
    reset({ commit }) {
        commit('reset')
    }
}

export const mutations = {
    updateField,

    reset(state) {
        Object.assign(state, initialState())
    }
}

export const getters = {
    getField
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
