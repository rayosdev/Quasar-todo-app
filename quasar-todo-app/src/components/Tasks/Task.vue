<template>
    <q-item 
        @click="updateTask({ id: id, update: { compleated: !task.compleated }})"
        clickable
        :class="!task.compleated ? 'bg-orange-1' : 'bg-green-1'"
      >
        <q-item-section 
            side 
            top
        >
            <q-checkbox
               :value="task.compleated"
            />
        </q-item-section>

        <q-item-section>
            <q-item-label
                :class="{'text-strikethrough' : task.compleated}"
            >
                {{ task.name }} 
            </q-item-label>
        </q-item-section>
    
        <q-item-section side>
            <div class="row">
                <div class="coloumn justify-center">
                <q-icon 
                    name="event" 
                    size="18px"
                    class="q-mr-sm"
                />
                </div>
                <div class="coloumn">
                <q-item-label 
                    caption
                    class="row justify-end"
                >
                    {{ task.dueDate }}
                </q-item-label>
                <q-item-label 
                    caption
                    class="row justify-end"
                >
                    <small>{{ task.dueTime }}</small> 
                </q-item-label>
                </div>
            </div>
        </q-item-section>

        <q-item-section side>
            <q-btn 
                @click.stop="propmtToDelete(id)"
                flat 
                round 
                color="red" 
                icon="delete" 
            />
        </q-item-section>
    </q-item>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['task', 'id'],

        methods: {
            ...mapActions('tasks', ['updateTask', 'onDeleteTask']),
            
            propmtToDelete(id) {
                this.$q.dialog({
                    title: 'Confirm',
                    message: 'Would you like to turn on the wifi?',
                    cancel: true,
                    persistent: true
                }).onOk(() => {
                    this.onDeleteTask(id)
                })
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>
