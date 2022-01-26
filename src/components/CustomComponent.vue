<template>
    <div>
        {{message}}
    </div>
</template>


<script>
export default {
    data() {
        return { 
            message: "vue component CUSTOM"
        }
    }
}
</script>

<style scoped>
    div {
        background-color: red;
    }
</style>