<template>
    <div id="app">
        <div class="box">
            <div class="commentNumber" @click="showMoreComments(commentsNumber, comments)">{{commentsNumber}} earlier
                comments
            </div>
            <div ref="wow"></div>
            <CommentList v-bind:comments="lastFourComments"/>
            <AddComment/>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue'
    import AddComment from "./components/AddComment";
    import CommentList from "./components/CommentList";

    export default {
        name: 'app',
        components: {
            AddComment,
            CommentList
        },
        computed: {
            commentsNumber() {
                return this.$store.getters.commentsNumber;
            },
            lastFourComments() {

                return this.$store.getters.lastFourComments;
            },
            comments() {
                return this.$store.getters.comments20;
            }
        },
        methods: {
            generate() {
                this.$store.dispatch('generate');
            },
            showMoreComments(commentsNumber, comments) {
                this.$store.dispatch('numberOfComments', commentsNumber);
                let ComponentClass = Vue.extend(CommentList);
                let instance = new ComponentClass({
                    propsData: {comments}
                });
                instance.$mount();
                this.$refs.wow.appendChild(instance.$el);
            },
        },
        created() {
            this.generate();
        }
    }
</script>

<style scoped>
    #app {
        max-width: 520px;

        display: flex;
        background: #F3EFEF;
    }

    .box {
        border-radius: 5px;
        box-shadow: 2px 2px 8px #888888;
        width: 480px;
        background: #FCFCFC;
        margin: 20px;
        align-items: center;
    }

    .commentNumber {
        margin: 15px;
    }
</style>
