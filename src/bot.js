const{Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
});
client.login("MTA4MzU0MjM4MjI4NjQ3OTQyMQ.G3Zoq_.T1-gjLlaUTc4k6_Toux0gckPPPkMDX4RAthHQQ");