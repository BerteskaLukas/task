import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        comments: [],
        commentsNumeber:'',
    },
    getters: {
        lastFourComments: (state) => {
            let lastFourComments = [];

            for (let i = (state.comments.length - 4); i <= state.comments.length; i++) {

                lastFourComments.push(state.comments[i]);

            }
            return lastFourComments;

        },
        commentsNumber(state){
            return state.commentsNumeber;
        },
        comments20(state){
            let  comments20 = [];
            if (state.commentsNumeber >= 20){
                for(let i = state.commentsNumeber - 19; i <= state.commentsNumeber;i++){
                    comments20.push(state.comments[i]);
                }
            }else {
                for (let i = 0; i <= state.commentsNumeber - 1; i ++){
                    comments20.push(state.comments[i]);
                }
            }

            return comments20;
        }
    },

    mutations: {
        generator(state, data) {
            state.comments = data;
            state.commentsNumeber= state.comments.length-4;


        },
        addComment(state, newComment){
            state.comments.push(newComment);
            localStorage.setItem('comments', JSON.stringify(state.comments));
            state.commentsNumeber += 1;

        },
        deleteComment(state, id){
            if(state.commentsNumeber >0){
                state.commentsNumeber -= 1;
            }

            state.comments.forEach((comment, index)=>{

                if(comment.id == id)
                   state.comments.splice(index,1);
            })
            localStorage.setItem('comments', JSON.stringify(state.comments));

        },
        numberOfComments(state, NumberOfComments){

            if((NumberOfComments - 20)> 0){
                state.commentsNumeber = NumberOfComments - 20;
            }else{
                state.commentsNumeber = 0;
            }
        }
    }
    ,
    actions: {
        generate(context) {

                if( localStorage.getItem('comments') == null){Vue.axios
                    .get('https://my.api.mockaroo.com/users.json?key=209a79b0')
                    .then((response) => {
                        localStorage.setItem('comments', JSON.stringify(response.data));
                        context.commit('generator', response.data)

                    })
                }else{
                    context.commit('generator',JSON.parse(localStorage.getItem('comments')));
                }

        },
        addComment(context, newComment){
            context.commit('addComment',newComment);
        },
        deleteComment(context, id){
            context.commit('deleteComment', id );

        },
        numberOfComments(context, NumberOfComments){
            context.commit('numberOfComments', NumberOfComments);

        }
    }
});
