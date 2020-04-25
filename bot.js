const {Client, RichEmbed} = require('discord.js');

const discord = require('discord.js');
const client = new discord.Client();

const bot = new Client();
const token = 'NjY1NjA2NTExOTkyNzY2NDc0.XmQWoQ.4deLkTxxpgJwHhJXSfRG15Pxz0w';
const PREFIX = '!';
var version = '1.2';
var servers = {}; 

bot.on('ready', () => {
    console.log('This bot is active!');
    bot.user.setActivity('!ticket', { type: 'WATCHING'}).catch(console.error);
})

client.login(token);

client.on('ready', () => {
    let myGuild = client.guilds.get('601840267821318146');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('677845132153716736');
    memberCountChannel.setName('User count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberAdd', member =>{
    let myGuild = client.guilds.get('601840267821318146');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('677845132153716736');
    memberCountChannel.setName('User count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', member =>{
    let myGuild = client.guilds.get('601840267821318146');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('677845132153716736');
    memberCountChannel.setName('User count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberKick', member =>{
    let myGuild = client.guilds.get('601840267821318146');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('677845132153716736');
    memberCountChannel.setName('User count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'ping':
            message.channel.sendMessage('Pong!')
            break;    
    }
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) { 
        case 'yt':
            const Embed = new RichEmbed()
                .setTitle("Tom's YouTube channel!")
                .setColor(0xF88017)
                .setDescription("His YouTube channel: https://www.youtube.com/channel/UCu2wyTxtey8zD2MT24dubpw");
            ;message.author.send(Embed);
            break;
    }
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'rules':
            const Embed = new RichEmbed()
                .setTitle("Our rules!")
                .setColor(0xF88017)
                .setDescription("Be respectful. Don't spam. Post content in the correct channels.");
            ;message.author.send(Embed);
            break;
    }
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0]) { 
        case 'ticket':
            const Embed = new RichEmbed()
                .setTitle("Help ticket!")
                .setColor(0xF88017)
                .setDescription("If you need help with anything make sure to message @Thomas");
            ;message.author.send(Embed);
         break;
    }
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) { 
        case 'lastvid':
            const Embed = new RichEmbed()
                .setTitle("Tom's last video!")
                .setColor(0xF88017)
                .setDescription("That video: ");
            ;message.author.send(Embed);          
      break;
    }
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0]) { 
        case 'videjko':
            const Embed = new RichEmbed()
                .setTitle("New video! Go check it out!")
                .setColor(0xF88017)
                .setDescription("Here is that link: ");
            ;message.channel.sendMessage(Embed);
        break;   
    }
});

bot.on('guildMemberAdd', function(member){
    let memberRole = member.guild.roles.find("name", "Good guy");
    member.addRole(memberRole);
});

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "🖤-welcome-🖤");
    if(!channel) return;

    channel.send(`Hello ${member}! Welcome to our Discord Server.`)
});

bot.on('guildMemberRemove', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "🖤-welcome-🖤");
    if(!channel) return;

    channel.send(`${member} left the server. Bye mate!`)
});

bot.login(token);
