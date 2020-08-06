import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from './firebase'
import router from './router/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userProfile: {}
    },

    mutations: {
        setUserProfile(state, val) {
            state.userProfile = val
        }
    },

    actions: {
        async login({ dispatch }, credentials) {
            return new Promise((resolve, reject) => {
                firebase.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
                    .then(res => {
                        dispatch('fetchUserProfile', res.user)
                        resolve()
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },

        async fetchUserProfile({ commit }, user) {
            router.push('/home')
            // fetch user profile
            const userProfile = await firebase.usersCollection.doc(user.uid).get()
            // set user profile in state
            commit('setUserProfile', userProfile.data())
        },

        async logout({ commit }) {
            await firebase.auth.signOut()

            router.push('/login')
            commit('setUserProfile', {})
        },

        async register({ dispatch }, credentials) {
            return new Promise((resolve, reject) => {
                firebase.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
                    .then(res => {
                        debugger
                        dispatch('fetchUserProfile', res.user)
                        resolve()
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    }
})
