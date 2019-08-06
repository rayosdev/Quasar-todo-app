<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6">Add Task</div>
            <q-space />
            <q-btn
                round
                flat
                dens
                size
                v-close-popup
                icon="close"
            />
        </q-card-section>
        
        <form
            @submit.prevent="submitForm"
        >
            <q-card-section>
                <div class="row q-mb-sm">
                    <q-input 
                        outlined 
                        v-model="taskToSubmit.name" 
                        label="Task Name"
                        ref="name"
                        class="col"
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />
                </div>
                <div class="row q-mb-sm">
                    <q-input 
                        label="Due date"
                        outlined
                        v-model="taskToSubmit.dueDate"
                    >
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy 
                                    ref="qDateProxy" 
                                    transition-show="scale"     
                                    transition-hide="scale"
                                >
                                    <q-date 
                                        v-model="taskToSubmit.dueDate" 
                                        @input="() => $refs.qDateProxy.hide()" 
                                    />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
                <div class="row q-mb-sm">
                    <q-input 
                        label="Due Time"
                        outlined
                        v-model="taskToSubmit.dueTime"
                    >
                        <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy transition-show="scale" transition-hide="scale">
                                <q-time v-model="taskToSubmit.dueTime" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn 
                    label="ADD" 
                    color="primary"
                    type="submit"
                />
            </q-card-actions>
        
        </form>
    </q-card>
</template>

<script>
export default {
    data() {
        return {
            taskToSubmit: {
                name: '',
                dueDate: '',
                dueTime: '',
                compleated: false
            }
        }
    },
    methods: {
        submitForm(){
            this.$refs.name.validate()
            if(!this.$refs.name.hasError){
                this.submitTask()
            }
        },
        submitTask(){
            console.log("make task")
        }
    },
}
</script>

<style lang="scss" scoped>

</style>