<template>
  <v-main style="height:100%">
    <v-fade-transition>
      <v-row justify="center">
        <v-col cols="6">
            <v-text-field
              autocomplete="off"
              placeholder="Ex.: Walk the dog..."
              autofocus
              style="height:60px"
              v-on:keydown.enter="addTask()"
              v-model="newTask"
              append-icon="filter_list"
            >
            </v-text-field>
        </v-col>
      </v-row>
    </v-fade-transition>
    <v-row justify="center">
      <v-col cols="6">
        <v-list class="py-0">
          <v-slide-y-transition group>
            <v-list-item
              link
              v-for="(item, i) in tasks" :key="i"
              @click="item.done = !item.done"
            >
              <v-list-item-action>
                <v-checkbox v-model="item.done" @click.prevent></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                {{ item.name }}
              </v-list-item-content>
            </v-list-item>
          </v-slide-y-transition>
        </v-list>
      </v-col>
    </v-row>
  </v-main>
</template>
  
<script>
// import { usersCollection } from '../firebase'

export default {
  name: 'TodoList',
  filteropts: [
    {
      name: 'Done',
      value: task => task.done
    },
    {
      name: 'Pending',
      value: task => !task.done
    }
  ],

  filter: null,

  data: () => ({
    tasks: [],
    newTask: ''
  }),

  computed: {},

  methods: {
    addTask: function() {
      if (this.newTask) {
        this.tasks.push({
          name: this.newTask,
          done: false,
        })
        this.newTask = ''
      }
    }
  }

}
</script>
