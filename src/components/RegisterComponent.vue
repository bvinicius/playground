<template>
  <v-card>
    <v-card-title>
      New User
    </v-card-title>
    <v-card-text>
      <v-subheader class="px-0">Please inform your credentials before starting this amazing journey.</v-subheader>
      <v-form v-model="form">
        <v-row>
          <v-col>
            <v-text-field
              label="E-mail"
              v-model="credentials.email"
              :rules="rules.email"
            />
          </v-col>
          <v-col>
            <v-text-field
              label="Password"
              v-model="credentials.password"
              :type="password ? 'password' : 'text'"
              :append-icon="password ? 'visibility_off' : 'visibility'"
              @click:append="password = !password"
              :rules="rules.password"
            >
            </v-text-field>
          </v-col>        
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="primary" :disabled="!form" @click="register()">REGISTER</v-btn>
      <v-btn text color="secondary" @click="$emit('close')">CANCEL</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "register-component",
  
  props: {
    credentials: Object
  },

  data: () => ({
    password: true,
    form: false,
  
    rules: {
      email: [  
        v => !!v || 'E-mail is required.'
      ],
      password: [
        v => !!v || 'Password is required.'
      ]
    }
  }),

  methods: {
    register() {
      this.$store.dispatch('register', this.credentials)
    }
  }


}
</script>

<style>

</style>