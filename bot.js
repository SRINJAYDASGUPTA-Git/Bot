const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzk5MjI5MDUwNzY1MzEyMDAx.YAAiDg.AonBxsU65rVaLbIQkQOLcsc3l3k');
client.on('ready', readyDiscord);
function readyDiscord () {
    console.log('I am Ready to rock \'n Roll');
}
client.on('message', replymsg);
const reply1=[
    'Hi, There', 'Hallo', 'Hello', 'Hola amigo', 'Hey Wassup !?'
]
function replymsg(msg){
    if(msg.channel.id='738995296658260001'){
    if( msg.content === 'Hi'){
        const r=Math.floor(Math.random()*reply1.length);
       msg.reply(reply1[r]);
    }
    if(msg.content === 'How are you?' || msg.content === 'how are you?'){
        msg.reply('I am a Bot So I am Always Happy 😁😃😉');
    }
}
}