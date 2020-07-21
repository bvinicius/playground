<template>
  <v-main style="height:100%">
    <v-row justify="center">
      <v-col cols="6">
          <v-text-field
            autocomplete="off"
            placeholder="Ex.: Walk the dog"
            autofocus
            style="height:60px"
            v-on:keydown.enter="addTask()"
            v-model="displayTasks"
          >
          </v-text-field>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="6">
        <v-list>
          <v-list-item
            link
            v-for="(item, i) in tasks" :key="i"
            @click="item.done = !item.done"
          >
            <v-list-item-content>
              {{ item.name }}
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="item.done">
              </v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

  </v-main>
</template>
  
<script>

export default {
  name: 'TodoList',
  filters: [
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

  computed: {
    displayTasks() {
      return this.tasks.filter(e => this.filter(e))
    }
  },

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
