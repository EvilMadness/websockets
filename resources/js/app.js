require('./bootstrap');

// window.Vue = require('vue').default;
import Vue from 'vue'
import VueMoment from 'vue-moment'
import vuetify from './vuetify';
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueMoment);
Vue.use(VueChatScroll)

Vue.component('chats-component', require('./components/ChatsComponent.vue').default);
Vue.component('test-component', require('./components/TestComponent').default);


const app = new Vue({
    el: '#app',
    vuetify
});
