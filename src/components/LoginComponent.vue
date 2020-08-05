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

            <v-form>
                <v-row justify="center">
                    <v-col cols="6">
                        <v-text-field
                            filled
                            label="Email"
                            v-model="credentials.email"
                        />
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            filled
                            type="password"
                            label="Password"
                            v-model="credentials.password"
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
                    >
                        LOGIN
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        block
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
        loaders: {
            login: false
        }
    }),

    methods: {
        login() {
            this.$data.loaders.login = true
            this.$store.dispatch('login', this.credentials)
        }
    },
}
</script>