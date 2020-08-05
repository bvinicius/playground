<template>
    <v-container>
        <login-component v-on:register="register = true"></login-component>

        <v-dialog
            v-model="register"
            width="600"
        >
            <register-component></register-component>
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
        register: false
    }),
}
</script>

<style>

</style>