const Discord = require('discord.js')
const {REST} = require("@discordjs/rest")
const {Routes,PermissionFlagsBits} = require('discord-api-types/v9')
const path = require('path');
const fs = require('fs');
const fetch = import('node-fetch');
const {fsync,fsyncSync,readFile,readFileSync,writeFile,writeFileSync,readdirSync} = fs
const {GuildMember,Presence,Partials,ChatInputCommandInteraction,PermissionsBitField,SlashCommandBuilder,MessageMentions,GatewayIntentBits,Message,Role,CommandInteraction,CategoryChannel,ChannelType,VoiceChannel,VoiceStateManager,EmbedBuilder,RoleManager,Client,BaseInteraction,InteractionType,VoiceState,ClientVoiceManager,BaseGuildVoiceChannel,ChannelManager,GuildChannel,GuildChannelManager,ThreadChannel,ChannelFlags,ClientApplication,ClientUser,Guild,Emoji,GuildEmoji,GuildEmojiManager,User,UserManager,UserContextMenuCommandInteraction,ReactionUserManager,ButtonBuilder,ActionRowBuilder,ApplicationCommand,ApplicationCommandManager,GuildApplicationCommandManager,ApplicationCommandPermissionsManager,AttachmentBuilder,BaseGuildTextChannel,GuildEmojiRoleManager,GuildMemberManager,GuildMemberRoleManager,TextChannel,ActivityType} = Discord
const token = require('./token.json')

let client = new Discord.Client({ //create a new client to the bot to use
partials: [Partials.Channel, Partials.Reaction, Partials.GuildScheduledEvent, Partials.Message, Partials.User, Partials.ThreadMember],
intents: [ //intents
      'GuildScheduledEvents',
      'DirectMessages',
      "GuildMessageTyping", //allow bot to type
      "Guilds", //allow bot to use guilds
      "GuildMessages", //allow bot to interact with messages
      "GuildBans", //allow bot to ban, kick and timeout
      "GuildInvites", //allow bot to create invites
      "GuildMessageReactions", //allow bot to react to messages
      "GuildMembers", //allow bot to interact to members
      "GuildVoiceStates", //allow bot to use voice channel
      "GuildEmojisAndStickers", //allow bot to use emojis and sticker
      "GuildWebhooks", //allow bot to use webhook
      "GuildIntegrations", //allow bot to use integration
      "MessageContent",
      "GuildPresences"
],})

//slash commands
const commands = [];
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith(`.js`));
for (const file of commandFiles) {
const command = require(`./commands/${file}`);
commands.push(command.data);
}
(async () => {
try {
console.log(`Started refreshing ${commands.length} application (/) commands.`);

// The put method is used to fully refresh all commands in the guild with the current set
const rest = new REST({
version: `10`
}).setToken(token.token);
const data = rest.put(
Routes.applicationGuildCommands(`1070023074289819688`, `841272656192208916`), {
body: commands
},
);
console.log(`Successfully reloaded ${data.length} application (/) commands.`);
} catch (error) {
// And of course, make sure you catch and log any errors!
console.error(error);
}
})();

client.on('interactionCreate', (interaction) => {
      if (interaction.isChatInputCommand()) {      
            if (interaction.commandName == 'test') {
                  let string_0 = interaction.options.getString('string_0', false)
                  let string_1 = interaction.options.getString('string_1', false)
                  interaction.reply(`${string_0}` +` ${string_1}`)
            }
      }
})
client.on('interactionCreate', (interaction) => {
      if (interaction.isChatInputCommand()) {      
            if (interaction.commandName == 'hi') {
                  let string_0 = interaction.options.getString('test', true)
                  let member_1 = interaction.options.getMember('2',false)
                  member_1 = (!member_1) ? interaction.member: member_1
                  let channel_2 = interaction.options.getChannel('test1',false)
                  interaction.reply(`${string_0}` +` `)
            }
      }
})
client.on('interactionCreate', (interaction) => {
      if (interaction.isChatInputCommand()) {      
            if (interaction.commandName == 'super') {
                  let channel_0 = interaction.options.getChannel('test',true).id
                  let member_1 = interaction.options.getMember('2',false)
                  member_1 = (!member_1) ? interaction.member: member_1
                  member_1.voice.setChannel(`${channel_0}`)
            }
      }
})
client.on('ready', ()=>{
      console.log('im connected')
})
client.on('messageCreate',(message) =>{
      if(message.content == 'ping' && !message.author.bot){
            message.channel.send('pong').catch(console.error)
      }
})

client.on('messageCreate',(message) =>{
      if(message.content == 'hey' && !message.author.bot){
            message.channel.send('hello').catch(console.error)
            message.channel.send('how are you?').catch(console.error)
      }
})

client.on('messageCreate',(message) =>{
      if(message.content == 'test' && !message.author.bot){
            message.reply('test').catch(console.error)
            message.channel.send('test').catch(console.error)
            message.member.roles.add('123').catch(console.error)
      }
})

client.on('messageCreate',(message) =>{
      if(message.content == 'lol' && !message.author.bot){
            message.reply('xd').catch(console.error)
            message.reply('ok').catch(console.error)
      }
})

client.on('messageCreate',(message) =>{
      if(message.content == 'hi' && !message.author.bot){
            message.member.roles.add('111').catch(console.error)
            message.member.roles.remove('14141').catch(console.error)
      }
})

client.on(`guildMemberAdd`, (member, message) => {
      const user = member.user
      const name = user.username
      const Channel = client.channels.cache.get(`123`);
      Channel.send({content:`hi ${user} enjoy your stay ${name}`})
})

client.login(token.token)