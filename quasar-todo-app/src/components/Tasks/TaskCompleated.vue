<template>
    <div>
      <list-header
        bgColor="bg-green-4"
      >Compleated</list-header>
      <q-list 
        separator
        bordered
        
      >
        <task 
          v-for="(task, key) in tasksCompleated"
          :key="key"
          :task="task"
          :id="key"  
        >
        </task>
      </q-list>
    </div>
</template>

<script>
    export default {
        props: ['tasksCompleated'],

        components: {
            'task' : require('components/Tasks/Task.vue').default,
            'list-header' : require('components/Shared/ListHeader.vue').default,
        
        },
    }
</script>

<style lang="scss" scoped>

</style>