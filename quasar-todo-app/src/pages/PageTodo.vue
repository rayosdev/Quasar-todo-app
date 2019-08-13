<template>
  <q-page class="q-pa-md">

    <div class="row q-mb-lg">
      <search class="col" />
    </div>

    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
      @showAddTask="showAddTask = true"
    ></no-tasks>

    <task-todo
      v-else 
      :tasksTodo="tasksTodo"
    />

    <task-compleated
      class="q-mt-lg"
      v-if="Object.keys(tasksCompleated).length"
      :tasksCompleated="tasksCompleated"
    />

    

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn 
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task-form
        @close="showAddTask = false"
      />
    </q-dialog>
    


  </q-page>
</template>

<script>
import { mapGetters } from 'vuex' 

export default {
  data() {
    return {
      showAddTask: false,
    }
  },

  computed: {
    // tasks() {
    //   return this.$store.getters['tasks/tasks']
    // }

    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleated'])
  },
  components: {
    'task' : require('components/Tasks/Task.vue').default,
    'add-task-form' : require('components/Tasks/Modals/AddTask.vue').default,
    'task-todo' : require('components/Tasks/TaskTodo.vue').default,
    'task-compleated' : require('components/Tasks/TaskCompleated.vue').default,
    'no-tasks' : require('components/Tasks/NoTasks.vue').default,
    'search' : require('components/Tasks/Tools/Search.vue').default,
  },
  mounted() {
    this.$root.$on('showAddTask', () => {this.showAddTask = true})
  },
}
</script>

<style lang="stylus" scoped>

</style>
