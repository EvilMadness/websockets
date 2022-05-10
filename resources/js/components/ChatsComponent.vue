<template>
    <div class="row">
        <div class="col-8">
            <div class="card card-default">
                <div class="card-header">Mensajes</div>
                <div class="card-body p-0">
                    <ul class="list-unstyled" style="height: 600px; overflow-y: scroll" v-chat-scroll>
                        <li class="p-2" v-for="(message, index) in messages" :key="index">
                            <strong>{{ message.user.name }} : </strong>
                            {{ message.message }}
                            <div style="display: inline-block; float: right">
                                <span class="text-muted" style="font-size: 12px">{{message.created_at | moment('h:mm:ss a')}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="text-center">
                        <span class="text-muted" v-if="activeUser"> {{activeUser.name }} está escribiendo...</span>
                    </div>
                </div>
                <input
                    @keydown="sendTypingEvent"
                    @keyup.enter="sendMessage" v-model="newMessage" type="text" name="message"
                    placeholder="Escribe tu mensaje" class="form-control">
            </div>

        </div>
        <div class="col-4">
            <div class="card card-default">
                <div class="card-header">Usuarios activos</div>
                <div class="card-body">
                    <ul>
                        <li class="py-2" v-for="(user, idx) in users" :key="idx">{{ user.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'user'
    ],
    data() {
        return {
            messages: [],
            newMessage: null,
            users: [],
            activeUser: false,
            typingTimer: false,
        }
    },
    created() {
        this.fetchMessages()

        Echo.join('chat')
            .here(user => {
                this.users = user
            })
            .joining(user => {
                this.users.push(user)
            })
            .leaving(user => {
                this.users = this.users.filter(u => u.id != user.id)
            })
            .listen('MessageSent', (event) => {
                this.messages.push(event.message)
            })
            .listenForWhisper('typing', user => {
                this.activeUser = user;

                if(this.typingTimer) {
                    clearTimeout(this.typingTimer);
                }
                this.typingTimer = setTimeout(() => {
                    this.activeUser = false;
                }, 3000);
            })
    },
    methods: {
        fetchMessages() {
            axios.get('messages').then(response => {
                this.messages = response.data;
            })
        },
        sendMessage() {
            this.messages.push({
                user: this.user,
                message: this.newMessage,
                created_at: this.$moment.now()
            })
            axios.post('messages', {message: this.newMessage})

            this.newMessage = '';
        },
        sendTypingEvent() {
            Echo.join('chat')
                .whisper('typing', this.user);
        }
    }
}
</script>
