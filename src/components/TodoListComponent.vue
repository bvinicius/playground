<template>
  <v-main style="height:100%">
    <v-row justify="center">
      <v-slide-y-transition>
        <v-card width="600" class="px-4">
          <v-fade-transition>
            <v-row justify="center">
              <v-col cols="12">
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
            <v-col cols="12">
              <v-list class="py-0">
                <v-scroll-y-transition group>
                  <v-list-item
                    link
                    v-for="(item, i) in showtasks" :key="i"
                    @click="item.done = !item.done"
                  >
                    <v-list-item-action>
                      <v-checkbox v-model="item.done" @click.prevent></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                      {{ item.name }}
                    </v-list-item-content>
                  </v-list-item>
                </v-scroll-y-transition>
              </v-list>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-row justify="center">
              <v-btn-toggle
                tile
              >
                <v-btn @click="filter = ''">All</v-btn>
                <v-btn @click="filter = 'done'">To do</v-btn>
                <v-btn @click="filter = 'todo'">Done</v-btn>
              </v-btn-toggle>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-slide-y-transition>
    </v-row>
  </v-main>    
</template>

<script>
  export default {
      name: 'TodoListComponent',

    data: () => ({
      tasks: [],
      newTask: '',
      filter: '',

      filters: {
        'todo': e => e.done,
        'done': e => !e.done
      }
    }),

    computed: {
      showtasks: function() {
        if (this.filter) return this.tasks.filter(this.filters[this.filter])
        return this.tasks
      }
    },

    methods: {
      addTask() {
        this.tasks.push({name: this.newTask, done: false})
        this.newTask = ''
      }
    }
  }
</script>

<style>

</style>