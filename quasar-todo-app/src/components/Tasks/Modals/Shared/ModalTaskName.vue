<template>
    <div class="row q-mb-sm">
        <q-input 
            autofocus
            outlined 
            :value="name"
            @input="$emit('update:name', $event)"
            label="Task Name"
            ref="name"
            class="col"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        >
            <template v-slot:append>
                <q-icon
                    v-if="name" 
                    name="close" 
                    @click="$emit('update:name', '')" 
                    class="cursor-pointer" 
                />
            </template>
        </q-input>
    </div>
</template>

<script>
    export default {
        props: ['name'],   
    }
</script>

<style lang="scss" scoped>

</style>