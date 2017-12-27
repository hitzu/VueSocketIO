/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var socket = io('http://localhost:3002');

socket.on('new message', function (data) {
    console.log(data);
    document.getElementById("myTextarea").value = data;
})

var chatWorld = new Vue({
    el: '#vue-app',
    data: {
        textChat : '',
        textSender: '',
        UserSender:'',
        UserReceived:''
    },
    methods: {
        enviar: function () {
            socket.emit('send message', this.textSender);
            this.textSender = "";
        },
        enviarUsuarios: function(){
            socket.emit('new users', this.textSender);
            this.textSender = "";
        }
    }
    

});