const{Client, IntentsBitField, Attachment} = require('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
});
const token='MTA4MzU0MjM4MjI4NjQ3OTQyMQ.GWFHJ6.ZN5dVyRRbXUT4_0YfFFo7EFCaqDk8fiEUOYfp8';

const PREFIX = 'Moew ';

client.on('ready', (c) =>{
    console.log(`${c.user.tag} is online.`);
});

//kitty words may hurt u but not me cuz i wrote it
client.on('messageCreate',(message)=>{
    
    if(message.author.bot){
        return;
    }  

    if(message.content.includes(PREFIX)){
        let arr = message.content.substring(PREFIX.length).split(" ");
        switch(arr[0]){
            case 'help':
                message.reply('sry cant cope');
                // const attachment =new Attachment('https://i.kym-cdn.com/photos/images/original/001/384/541/1d8.jpg')
                // message.send(message.author,attachment);
            break;

            case 'work':
                message.reply('hk dont have a job so im too');
            break;
            
            case 'owner':
                message.reply('hk');
            break;
        }
    }

    switch(message.content){
        case 'cope':
            message.reply('cope harder');
            const attachment =new Attachment('https://i.kym-cdn.com/photos/images/original/001/384/541/1d8.jpg')
            message.send(message.author,attachment);
        break;

        case 'ok':
            message.reply('its not questions but facts');
        break;

        case 'hello':
            message.reply('shalom');
        break;
    }
    if (message.content == 'Moew '|| message.content == 'Moew'){message.reply('what chu want')}
});


client.login(token);