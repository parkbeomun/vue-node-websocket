<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <div class="md-toolbar-row">
                    <span class="md-title">My Chat App</span>
                </div>
            </md-app-toolbar>
            <md-app-content>
                <md-field>
                    <label>Message</label>
                    <md-textarea v-model="textarea" disabled></md-textarea>
                </md-field>
                <md-field>
                    <label>Your Message</label>
                    <md-input v-model="message"></md-input>
                    <md-button class="md-primary md-raised" @click="sendMessage()">Submit</md-button>
                </md-field>
            </md-app-content>
        </md-app>
    </div>
</template>


<script>

    import io from 'socket.io-client';

    const socket = io('http://127.0.0.1:3000');


    export default {
        name: 'HelloWorld',
        created() {
            socket.on('chat', (data)=> {
                this.textarea += data.message + "\n"
                this.message = ''
            })
        },
        data() {
            return {
                textarea: "",
                message: '',
            }

        },
        socket: {
            connect () {
                alert('connected to chat server')
            },

            count(val) {
                this.count = val.count
            },

            message (data) {
                this.textarea += data + '/n'
            }
        },
        methods: {
            sendMessage () {
                socket.emit('chat',{
                    message: this.message
                });
            }
        }
    }
</script>

<style>
    .md-app {
        height: 800px;
        border: 1px solid rgba(#000, .12);
    }

    .md-textarea {
        height: 300px;
    }
</style>