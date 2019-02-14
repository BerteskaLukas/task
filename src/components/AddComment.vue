<template>
    <div class="add-comment">
        <form v-on:submit="addcomment">
            <div class="input-box">
                <input v-if="key" class="first-name" type="text" v-model="firstName" placeholder="Your Name">
                <input v-if="key" class="last-name" type="text" v-model="lastName" placeholder="Your Lastname">
                <input v-on:click="show()" class="comment" type="text" v-model="comment"
                       placeholder="Add your comment">
            </div>
            <div>
                <input v-bind:disabled="disable" type="submit" value="Post" class="btn btn-success ml-3 mt-3 mb-3 mr-2">
                <button type="button" class="btn btn-secondary" v-on:click="noshow">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
    import uuid from 'uuid';

    export default {
        name: "AddComment",
        data() {
            return {
                id: '',
                avatar: '',
                firstName: '',
                lastName: '',
                comment: '',
                time: '',
                key: false,
                disable: true
            }
        },
        methods: {
            noshow() {
                this.key = false;
                this.disable = true;
            },
            show() {
                this.key = true;
                this.disable = false;
            },
            addcomment(e) {
                e.preventDefault();

                const newComment = {
                    id: uuid(),
                    avatar: this.$faker().internet.avatar(),
                    firstName: this.firstName,
                    lastName: this.lastName,
                    comment: this.comment,
                    time: new Date().toLocaleTimeString('en-US', {
                        hour: "numeric",
                        minute: "numeric"
                    }),
                };
                this.$store.dispatch('addComment', newComment);
                this.avatar = '';
                this.id = '';
                this.time = '';
                this.firstName = '';
                this.lastName = '';
                this.comment = '';
                this.key = false;
                this.disable = true;
            }
        }
    }
</script>

<style scoped>
    .add-comment {
        background: white;
    }

    .input-box > * {
        border-top: none;
        border-left: none;
        border-right: none;
        margin-left: 15px;
        margin-right: 15px;
        border-width: 1px;
        border-bottom-color: #F3EFEF;
        width: 440px;
    }

    *:focus {
        outline: none;
    }

</style>