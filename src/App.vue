<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          link
          @click="$router.push('/todolist'); drawer = !drawer"
          >
            <v-list-item-action>
              <v-icon>assignment_turned_in</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Todo List</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-slide-y-transition>
      <v-app-bar
        app
        clipped-left
        v-if="auth.currentUser"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
      </v-app-bar>
    </v-slide-y-transition>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { auth } from './firebase'
  export default {
    data: () => ({
      drawer: false,
      auth: auth
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>