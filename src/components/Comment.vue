<template>
    <div class="comment-box">
        <div class="box-left">
            <img class="avatar" v-bind:src="comment.avatar" alt="no photo">
        </div>
        <div class="box-right">
            <div class="user-info">
                <div class="user">
                    <div class="name">{{comment.firstName}}</div>
                    <div>{{comment.lastName}}</div>
                    <div class="create-time">{{comment.time}}</div>
                </div>
                <div class="delete" v-on:click="deleteComment(comment.id)">
                    <span title="delete comment">x</span>
                </div>
            </div>
            <div class="comment">{{comment.comment}}</div>
            <div class=""></div>
        </div>
    </div>
</template>

<script>
    import {store} from "../store/store";

    export default {
        name: "Comment",
        props: ['comment'],
        methods: {
            deleteComment(id) {
                store.dispatch('deleteComment', id)
            }
        }
    }
</script>

<style scoped>
    .comment {
        max-width: 372px;
        word-wrap: break-word;
    }

    .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .comment-box {
        display: flex;
        margin: 15px;
    }

    .box-left {
        flex: 1;

        margin-right: 15px;
    }

    .box-right {
        flex: 6;
    }

    .user-info {
        display: flex;
        justify-content: space-between;
    }

    .user {
        font-weight: 500;
        margin-right: 5px;
        display: flex;
    }

    .name {
        margin-right: 5px;
    }

    .delete span {
        visibility: hidden;
    }

    .delete:hover span {
        visibility: visible;
    }

    .create-time {
        color: silver;
        font-size: small;
        margin-left: 6px;
    }

    .user-info {
        margin-top: 8px;
    }
</style>