const Discord = require("discord.js")

const {
    prefix,
    token,
} = require('./config.json')

const client = new Discord.client()

function webscraping(){
    const htmlString = 
}

client.on('ready', () => {
    console.log('logged in as ${client.user.tag}!');
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    if(interaction.commandName === 'ping'){
	await interaction.reply('Pong!');
    }
})
client.login(token);
