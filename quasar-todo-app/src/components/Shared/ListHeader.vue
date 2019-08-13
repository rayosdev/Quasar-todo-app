<template>
    <q-banner 
            dense 
            inline-actions
            :class="bgColor"
            class="text-white text-center text-subtitle1 list-header"
        >
           <span class="text-bold"><slot></slot></span> 
    </q-banner>
</template>

<script>
    export default {
        props: ['bgColor']
        
    }
</script>

<style lang="stylus" scoped>
    .list-header
        border-top-right-radius 5px
        border-top-left-radius 5px
</style>