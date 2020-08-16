<template>
  <v-container>
      <v-row justify="center">
        <v-card
            width="500"
            class="px-4"
        >
            <v-row>
                <v-col align="center">
                    <img height="200px" src="../assets/img/login.svg">
                </v-col>
            </v-row>

            <v-form v-model="form" @keyup.enter.native="login()">
                <v-row justify="center">
                    <v-col cols="6">
                        <v-text-field
                            filled
                            label="Email"
                            v-model="credentials.email"
                            :rules="rules.email"
                        />
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            filled
                            label="Password"
                            v-model="credentials.password"
                            :rules="rules.password"
                            :type="password ? 'password' : 'text'"
                            :append-icon="password ? 'visibility_off' : 'visibility'"
                            @click:append="password = !password"

                        />
                    </v-col>              
                </v-row>
            </v-form>

            <v-card-actions class="px-0">
                <v-col cols="12" class="px-0">
                    <v-btn
                        text
                        color="primary"
                        block
                        @click="login()"
                        :loading="loaders.login"
                        :disabled="!form"
                    >
                        LOGIN
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        block
                        @click="$emit('register', credentials)"
                    >
                        REGISTER
                    </v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'login-component',

    data: () => ({
        credentials: {},
        form: false,
        loaders: {
            login: false
        },

        password: false,

        rules: {
        email: [  
            v => !!v || 'E-mail is required.'
        ],
        password: [
            v => !!v || 'Password is required.'
        ]
        }
    }),

    mounted: function() {
        setTimeout(() => this.password = true, 300)
    },

    methods: {
        login: async function() {
            this.$data.loaders.login = true
            await this.$store.dispatch('login', this.credentials)
                .catch(err => {
                    this.$toastr.e(err)
                    this.loaders.login = false
                })
        },
    },
}
</script>