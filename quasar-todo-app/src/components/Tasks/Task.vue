<template>
    <q-item 
        @click="task.compleated != task.compleated"
        clickable
        v-ripple
        :class="!task.compleated ? 'bg-orange-1' : 'bg-green-1'"
      >
        <q-item-section side top>
            <q-checkbox v-model="task.compleated" />
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
    </q-item>
</template>

<script>
    export default {
        props: ['task', 'id']
    }
</script>

<style lang="stylus" scoped>

</style>
