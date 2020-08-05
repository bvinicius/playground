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
            const { user } = await firebase.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            
            dispatch('fetchUserProfile', user)
        },

        async fetchUserProfile({ commit }, user) {
            // fetch user profile
            const userProfile = await firebase.usersCollection.doc(user.uid).get()
            // set user profile in state
            commit('setUserProfile', userProfile.data())
            
            // change route to home
            router.push('/')
          }        
    }
})
