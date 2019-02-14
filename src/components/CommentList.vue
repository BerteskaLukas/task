<template>
    <div>
        <comment v-for="comment in comments"   v-bind:comment="comment" />
    </div>
</template>

<script>
    import Comment from "./Comment";

    export default {
        name: "Commentlist",
        components: {Comment},
        props:['comments']
    }
</script>

<style scoped>

</style>