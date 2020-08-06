<template>
    <v-container>
        <login-component
            v-on:register="register($event)"
        ></login-component>
        <v-dialog
            v-model="regDialog"
            width="600"
        >
            <register-component
                :credentials="credentials"
                v-on:close="regDialog = false"
            ></register-component>
        </v-dialog>
    </v-container>
</template>

<script>
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'

export default {
    components: {
        LoginComponent,
        RegisterComponent
    },

    data: () => ({
        regDialog: false,
        tab: null,
        credentials: {}
    }),

    methods: {
        register(credentials) {
            this.regDialog = true
            this.credentials = credentials
        }
    }
}
</script>

<style>

</style>