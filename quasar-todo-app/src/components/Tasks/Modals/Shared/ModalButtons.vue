<template>
    <q-card-actions align="right">
        <q-btn 
            :label="label" 
            color="primary"
            type="submit"
        />
        
    </q-card-actions>
</template>

<script>
    export default {
        props: ['label']
        
    }
</script>

<style lang="scss" scoped>

</style>