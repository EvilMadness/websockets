require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue'
import VueMoment from 'vue-moment'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueMoment);
Vue.use(VueChatScroll)

Vue.component('chats-component', require('./components/ChatsComponent.vue').default);


const app = new Vue({
    el: '#app',
});
