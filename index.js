const fs = require('fs');

fs.writeFileSync("./product/index.js", ``)
fs.readFile("./product/index.js", "utf8", (err, txt) => {
    function imports() {
        if (!txt) {
            fs.appendFile('./product/index.js', `const Discord = require('discord.js')\nconst {REST} = require("@discordjs/rest")\nconst {Routes,PermissionFlagsBits} = require('discord-api-types/v9')\nconst path = require('path');\nconst fs = require('fs');\nconst fetch = import('node-fetch');\nconst {fsync,fsyncSync,readFile,readFileSync,writeFile,writeFileSync,readdirSync} = fs\nconst {GuildMember,Presence,Partials,ChatInputCommandInteraction,PermissionsBitField,SlashCommandBuilder,MessageMentions,GatewayIntentBits,Message,Role,CommandInteraction,CategoryChannel,ChannelType,VoiceChannel,VoiceStateManager,EmbedBuilder,RoleManager,Client,BaseInteraction,InteractionType,VoiceState,ClientVoiceManager,BaseGuildVoiceChannel,ChannelManager,GuildChannel,GuildChannelManager,ThreadChannel,ChannelFlags,ClientApplication,ClientUser,Guild,Emoji,GuildEmoji,GuildEmojiManager,User,UserManager,UserContextMenuCommandInteraction,ReactionUserManager,ButtonBuilder,ActionRowBuilder,ApplicationCommand,ApplicationCommandManager,GuildApplicationCommandManager,ApplicationCommandPermissionsManager,AttachmentBuilder,BaseGuildTextChannel,GuildEmojiRoleManager,GuildMemberManager,GuildMemberRoleManager,TextChannel,ActivityType} = Discord\nconst token = require('./token.json')\nconst {Image,createCanvas,loadImage,Canvas,registerFont} = require('canvas')\n`, function (err) {
                if (err) throw err;
            })
            setTimeout(() => {
                fs.appendFile("./product/index.js", txt + `\nlet client = new Discord.Client({ //create a new client to the bot to use\npartials: [Partials.Channel, Partials.Reaction, Partials.GuildScheduledEvent, Partials.Message, Partials.User, Partials.ThreadMember],\nintents: [ //intents\n      'GuildScheduledEvents',\n      'DirectMessages',\n      "GuildMessageTyping", //allow bot to type\n      "Guilds", //allow bot to use guilds\n      "GuildMessages", //allow bot to interact with messages\n      "GuildBans", //allow bot to ban, kick and timeout\n      "GuildInvites", //allow bot to create invites\n      "GuildMessageReactions", //allow bot to react to messages\n      "GuildMembers", //allow bot to interact to members\n      "GuildVoiceStates", //allow bot to use voice channel\n      "GuildEmojisAndStickers", //allow bot to use emojis and sticker\n      "GuildWebhooks", //allow bot to use webhook\n      "GuildIntegrations", //allow bot to use integration\n      "MessageContent",\n      "GuildPresences"\n],})\nclient.setMaxListeners(Infinity)\n`, function (err) {
                    if (err) throw err;
                })
            }, 1)
        }
    }


    fs.readFile("./request.txt", "utf8", (err, txt2) => {
        let L = txt2.toString().replace(/ /g, ``).replace(/\n/g, ``).replace(/[a-z]/g, ``).replace(/[A-Z]/g, ``).replace(/[?]/g, ``).replace(/[0-9]/g, ``).replace(/}/g, `*`).replace(/{/g, ``).replace(/ /g, ``).replace(/\n/g, ``).replace(/\r/g, ``).replace(/,/g, ``).replace(/-/g, ``).replace(/_/g, ``).replace(/:/g, ``).replace(/[[]/g, ``).replace(/[]]/g, ``).toString()
        console.log(L)

        var part = 0

        function run() {
            setInterval(() => {
                if (part >= L.length) {
                    return false
                } else if (part < L.length) {
                    console.log(part)
                    let program = txt2.split('}').slice(part, part + 1).toString().replace(/\r/g, ``)
                    console.log(program)
                    if (program.includes(`message {`)) {
                        let input = program.split(`input:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                        var v = []
                        var v2 = []
                        var v3 = []
                        var v4 = []
                        var a = []
                        var a2 = []
                        var o = []
                        var o2 = []
                        var S = []
                        var ac = []
                        var counter = 0

                        function actions() {
                            const l = program.length - program.replace(/[[]/g, ``).length
                            for (var i = 0; i < l; i++) {
                                let unit = program.split(`]`).slice(i, i + 1).toString()
                                let type = unit.split(` [`).slice(0, 1).toString()
                                unit = unit.split(type).slice(1, 2).toString()
                                let reply = unit.split(`reply:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                let add_role = unit.split(`add_role:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                let remove_role = unit.split(`remove_role:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                let output = unit.split(`output:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                let dm = unit.split(`dm:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                let action = (unit.includes(`reply`)) ? "message.reply('" + `${reply}` + "').catch(console.error())" : ``
                                let action2 = (unit.includes(`add_role`)) ? `message.member.roles.add('${add_role}').catch(console.error())` : action
                                let action3 = (unit.includes(`remove_role`)) ? `message.member.roles.add('${remove_role}').catch(console.error())` : action2
                                let action4 = (unit.includes(`output`)) ? `message.channel.send('${output}').catch(console.error())` : action3
                                let action5 = (unit.includes(`dm`)) ? `message.author.send('${dm}').catch(console.error())` : action4
                                v.push(action5)
                            }
                        }
                        let sub1 = (program.includes('[')) ? actions() : ``
                        let sub2 = (program.includes('(')) ? actions2() : ``

                        function actions2() {

                            const l2 = program.length - program.replace(/[(]/g, ``).length
                            console.log(l2 + `<<<<<<<<<<<<<<<<<<<<<`)
                            for (var i = 0; i < l2 + 1; i++) {
                                let unit = program.split(`)`).slice(i, i + 1).toString()
                                let type = unit.split(` (`).slice(0, 1).toString()
                                unit = unit.split(type).slice(1, 2).toString()
                                let embed = type.includes(`embed`)
                                let button = type.includes(`button`)
                                console.log(type + `<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`)
                                if (embed) {
                                    let title = unit.split(`title:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let description = unit.split(`description:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let author = unit.split(`author:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let color = unit.split(`color:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let icon = unit.split(`icon:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let thumbnail = unit.split(`thumbnail:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let felid_1 = unit.split(`field:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let felid_2 = unit.split(`field:`).slice(2, 3).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let footer = unit.split(`footer:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let output = unit.includes(`output,`)
                                    let reply = unit.includes(`reply,`)
                                    if (output) {
                                        o = `\n            message.channel.send`
                                    } else if (reply) {
                                        o = `\n            message.reply`
                                    } else {
                                        o = `\n            message.channel.send`
                                    }
                                    Embed(author, title, description, color, icon, thumbnail, felid_1, felid_2, footer)

                                    function Embed(author, title, description, color, image, thumbnail, felid_1, felid_2, footer) {
                                        let Title = (unit.includes(`title`)) ? `\n                  .setTitle("${title}")` : ``
                                        let Description = (unit.includes(`description`)) ? `\n                  .setDescription("${description}")` : ``
                                        let Author = (unit.includes(`author`)) ? `\n                  .setAuthor({name:"${author}"})` : ``
                                        let Color = (unit.includes(`color`)) ? `\n                  .setColor(0x${color})` : ``
                                        let Icon = (unit.includes(`icon`)) ? `\n                  .setImage("${image}")` : ``
                                        let Thumbnail = (unit.includes(`thumbnail`)) ? `\n                  .setThumbnail("${thumbnail}")` : ``
                                        let Felid_1 = (unit.includes(`field`)) ? `\n                  .addFields({name:"${felid_1.split(` | `).slice(0, 1)}",value:"${felid_1.split(` | `).slice(1, 2)}"})` : ``
                                        let Felid_2 = (!felid_2) ? `` : (unit.includes(`field`)) ? `\n                  .setFields({name:"${felid_2.split(` | `).slice(0, 1)}",value:"${felid_2.split(` | `).slice(1, 2)}"})` : ``
                                        let Footer = (unit.includes(`footer`)) ? `\n                  .setFooter({text:"${footer}"})` : ``
                                        let string = `\n            const embed_${counter} = new Discord.EmbedBuilder()` + Title + Description + Author + Color + Icon + Thumbnail + Felid_1 + Felid_2 + Footer
                                        if (!a.toString().includes(`embeds:`)) {
                                            a.push(`embeds:[embed_${counter}]`)
                                        } else if (a.toString().includes(`embeds:[embed_${counter - 1}]`)) {
                                            a.push(`[embed_${counter}]`)
                                        } else {
                                            a.push(`[embed_${counter}]`)
                                        }
                                        counter = counter + 1
                                        return v2.push(string)
                                    }
                                }
                                if (button) {
                                    let count = 1
                                    let custom_id = unit.split(`custom_id:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let label = unit.split(`label:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let type = unit.split(`type:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let type2 = (type.toLowerCase().includes(`secondary`)) ? `Discord.ButtonStyle.Secondary` : `Discord.ButtonStyle.Secondary`
                                    let type3 = (type.toLowerCase().includes(`danger`)) ? `Discord.ButtonStyle.Danger` : type2
                                    let type4 = (type.toLowerCase().includes(`link`)) ? `Discord.ButtonStyle.Link` : type3
                                    let type5 = (type.toLowerCase().includes(`primary`)) ? `Discord.ButtonStyle.Primary` : type4
                                    let type6 = (type.toLowerCase().includes(`success`)) ? `Discord.ButtonStyle.Success` : type5
                                    let link = (type6 == `Discord.ButtonStyle.Link`) ? `\n                              .setURL("` + unit.split(`link:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``) + `")` : ``

                                    let unit2 = program.split(`)`).slice(i, i + 1).toString()
                                    console.log(unit2 + `<-----------<-------------`, custom_id)
                                    let reply_button = unit2.split(`button_reply:`).slice(count, count + 1).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let add_role_button = unit2.split(`button_add_role:`).slice(count, count + 1).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let remove_role_button = unit2.split(`button_remove_role:`).slice(count, count + 1).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let output_button = unit2.split(`button_output:`).slice(count, count + 1).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let dm_button = unit2.split(`button_dm:`).slice(count, count + 1).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let reply_button_2 = unit2.split(`button_reply:`).slice(count + 1, count + 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let add_role_button_2 = unit2.split(`button_add_role:`).slice(count + 1, count + 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let remove_role_button_2 = unit2.split(`button_remove_role:`).slice(count + 1, count + 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let output_button_2 = unit2.split(`button_output:`).slice(count + 1, count + 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let dm_button_2 = unit2.split(`button_dm:`).slice(count + 1, count + 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let action_button = (unit2.includes(`button_reply`)) ? "interaction.reply({content:'" + `${reply_button}` + "',ephemeral:true}).catch(console.error())" : ``
                                    let action_button2 = (unit2.includes(`button_add_role`)) ? `interaction.member.roles.add('${add_role_button}').catch(console.error())` : action_button
                                    let action_button3 = (unit2.includes(`button_remove_role`)) ? `interaction.member.roles.add('${remove_role_button}').catch(console.error())` : action_button2
                                    let action_button4 = (unit2.includes(`button_output`)) ? `interaction.channel.send({content:'${output_button}',ephemeral:true}).catch(console.error())` : action_button3
                                    let action_button5 = (unit2.includes(`button_dm`)) ? `interaction.user.send('${dm_button}').catch(console.error())` : action_button4
                                    let action_button_2 = (unit2.includes(`button_reply`)) ? "interaction.reply({content:'" + `${reply_button_2}` + "',ephemeral:true}).catch(console.error())" : ``
                                    let action_button2_2 = (unit2.includes(`button_add_role`)) ? `interaction.member.roles.add('${add_role_button_2}').catch(console.error())` : action_button_2
                                    let action_button3_2 = (unit2.includes(`button_remove_role`)) ? `interaction.member.roles.add('${remove_role_button_2}').catch(console.error())` : action_button2_2
                                    let action_button4_2 = (unit2.includes(`button_output`)) ? `interaction.channel.send({content:'${output_button_2}',ephemeral:true}).catch(console.error())` : action_button3_2
                                    let action_button5_2 = (unit2.includes(`button_dm`)) ? `interaction.user.send('${dm_button_2}').catch(console.error())` : action_button4_2
                                    let output = unit2.includes(`output,`)
                                    let reply = unit2.includes(`reply,`)
                                    let Id = unit2.split(`custom_id:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)


                                    if (output) {
                                        o2 = `\n            message.channel.send`
                                    } else if (reply) {
                                        o2 = `\n            message.reply`
                                    } else {
                                        o2 = `\n            message.channel.send`
                                    }
                                    if (unit2) {
                                        S.push(action(Id).replace(/,client/g, `\nclient`))
                                        count = count + 1
                                    }
                                    custom_id = (custom_id && !link) ? `\n                              .setCustomId("${custom_id}")` : ``
                                    Button(custom_id, label, type6)

                                    function action(id) {
                                        let string_2 = `client.on('interactionCreate', (interaction) => {\n      if (interaction.isButton() && interaction.customId == "${id}") {\n${action_button5}\n             \n${action_button5_2}      \n      }\n})`
                                        return string_2
                                    }

                                    function Button(custom_id, label, style) {
                                        let buttons = `\n                        new ButtonBuilder()${custom_id}${link}\n                              .setLabel("${label}")\n                              .setStyle(${style}),\r`
                                        return v3.push(buttons)
                                    }
                                }
                            }
                        }

                        setTimeout(() => {

                            fs.readFile("./product/index.js", "utf8", (err, txt) => {
                                function splitArrayToGroups(array, groupSize) {
                                    const groups = [];
                                    const ary = []
                                    let i = 0;
                                    while (i < array.length) {
                                        let string = `\n            const row_${i} = new Discord.ActionRowBuilder()\n                  .addComponents(`
                                        groups.push(string + array.slice(i, i + groupSize) + `)`);
                                        ary.push(`row_${i}`)
                                        i += groupSize;
                                    }
                                    a2.push(`components:[` + ary + `]`)
                                    return groups.join(``).toString().replace(/,\r,/g, ",\n")
                                }
                                console.log(splitArrayToGroups(v3, 5))
                                let act = v.join(`}{`).toString().replace(/}{/g, `\n            `)
                                let act2 = v2.join(`}{`).toString().replace(/}{/g, `\n            `)
                                let embed = (program.includes(`embed (`)) ? `\n({${a.toString().replace(`],[`, `,`)}})` : ``
                                let button_end = (program.includes(`button (`)) ? `)` : ``
                                let pr = `\nclient.on('messageCreate',(message) =>{\n      if(message.content == '${input}' && !message.author.bot){\n            ${act}${act2}${o}${embed}\n${splitArrayToGroups(v3, 5)}\n${o2}({${a2.join(`*`).toString().split(`*`).slice(0, 1).toString().replace(/\ninteraction.reply({content:'',ephemeral:true}).catch(console.error())/g,`
                                `)}}).catch(console.error())\n      }\n})\n` + `\n${S}`
                                pr = pr.replace(`\n({components:[]}).catch(console.error())`, ``).replace(/\ninteraction.reply({content:'',ephemeral:true}).catch(console.error())/g, ``)
                                fs.writeFileSync("./product/index.js", txt + pr)
                                setTimeout(() => {
                                    fs.readFile("./product/index.js", "utf8", (err, txt2) => {
                                        fs.writeFileSync("./product/index.js", txt2.replace(`\ninteraction.reply({content:'',ephemeral:true}).catch(console.error())`, ``).replace(`\ninteraction.channel.send({content:'',ephemeral:true}).catch(console.error())`, ``))
                                    })
                                }, 1)
                            })
                        }, 7)
                    }
                    if (program.includes(`ready {`)) {
                        setTimeout(() => {
                            let message = program.split(`say:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``);
                            fs.readFile("./product/index.js", "utf8", (err, txt) => {
                                fs.writeFileSync("./product/index.js", txt + `\nclient.on('ready', ()=>{\n      console.log('${message}')\n})`)
                            })
                        }, 7)
                    }
                    if (program.includes(`token {`)) {
                        fs.readFile("./product/token.json", "utf8", (err, env) => {
                            setTimeout(() => {
                                console.log(env)
                                if (env == `` || !env) {
                                    let token = program.split(`key:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                    fs.writeFile(`./product/token.json`, ``, function (err) {
                                        if (err) throw err;
                                    })
                                    fs.appendFile('./product/token.json', `{\n"token": "${token}" \n}`, function (err) {
                                        if (err) throw err;
                                    })
                                }
                            }, 7)
                        })
                    }
                    if (program.includes(`login {`)) {
                        setTimeout(() => {
                            fs.readFile("./product/index.js", "utf8", (err, txt) => {
                                fs.writeFileSync("./product/index.js", txt + `\nclient.login(token.token)`)
                            })
                        }, 7)
                    }
                    if (program.includes(`welcome {`)) {
                        setTimeout(() => {
                            let channel = program.split(`channel_id:`).slice(1, 2).toString().split(`,`).slice(0, 1)

                            function User(string) {
                                const U = string.toString().replace(/user/g, `$` + `{user}`).replace(/name/g, `$` + `{name}`)

                                return U
                            }
                            var v = []

                            function actions() {
                                const l = program.length - program.replace(/[[]/g, ``).length
                                console.log(`----------------------->` + l)
                                for (var i = 0; i < l; i++) {
                                    let unit = program.split(`]`).slice(i, i + 1).toString()
                                    let type = unit.split(` [`).slice(0, 1).toString()
                                    type = (type.includes(`)\n`)) ? type.split(`)\n`).slice(1).toString() : type
                                    unit = unit.split(type).slice(1, 2).toString()
                                    console.log([type])
                                    if (type.toLowerCase().replace(/\n/g,``) == `action`) {
                                        let message = unit.split(`message:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                        let dm = unit.split(`dm:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                        let add_role = unit.split(`add_role:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                        let remove_role = unit.split(`remove_role:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                        let action = (unit.includes(`dm`)) ? "user.send({content:'" + `${User(dm)}` + "'}).catch(console.error())" : ``
                                        let action2 = (unit.includes(`add_role`)) ? `member.roles.add('${add_role}').catch(console.error())` : action
                                        let action3 = (unit.includes(`remove_role`)) ? `member.roles.add('${remove_role}').catch(console.error())` : action2
                                        let action4 = (unit.includes(`message`)) ? `Channel.send('${User(message)}')` : action3
                                        v.push(action4)
                                        console.log(`------------------------->` + action4)
                                    }
                                    if (type.toLowerCase().replace(/\n/g, ``) == `image`) {
                                        let url = unit.split(`background_image_url:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                        let text_color = unit.split(`text_color:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                        let member_names = unit.split(`user_counter_custom_text:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                        let main_text = unit.split(`main_text:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``).replace(/name/g, `"+name+"`)
                                        main_text = (!main_text) ? "`${user.username}`" : `"${main_text}"`

                                        console.log([unit])

                                        let string = `let img_user = user.displayAvatarURL({\n            extension: 'png',\n            dynamic: false,\n            format: 'png'\n      })\n      let bg2 = new Image()\n      bg2.src = "${url}"\n      let av2 = new Image()\n      let av = loadImage((img_user))\n      let text_color = '${text_color}'\n      registerFont('./ggsans-Bold.ttf', {\n            family: 'gg sans'\n      })\n\n      setTimeout(canvas_create, 800)\n\n      function canvas_create() {\n            const canvas = createCanvas(1000, 500)\n            const ctx = canvas.getContext('2d')\n            ctx.drawImage(bg2, 0, 0, canvas.width, canvas.height)\n\n            ctx.beginPath()\n            ctx.arc(500, 210, 131, 0, 2 * Math.PI)\n            ctx.lineWidth = 4\n            ctx.strokeStyle = '#ffffff'\n            ctx.stroke()\n            ctx.closePath()\n\n            ctx.textAlign = "center"\n\n            ctx.fillStyle = text_color\n            ctx.font = "bold 40px gg sans"\n            ctx.fillText(` + main_text + `, 500, 400, 300)\n\n            ctx.fillStyle = text_color\n            ctx.font = "bold 30px gg sans"\n            ctx.fillText(` + `"${member_names} "+` + "`#" + "${client.users.cache.filter(user => !user.bot).size}`" + `, 500, 450, 300)\n\n            ctx.beginPath()\n            ctx.arc(500, 210, 130, 0, 2 * Math.PI, true)\n            ctx.closePath()\n            ctx.clip()\n\n            ctx.drawImage(av2, 370, 80, 270, 270)\n\n            const at = new Discord.AttachmentBuilder(canvas.toBuffer(), "rank.png")\n\n            Channel.send({\n                  files: [at]\n            })\n      }\n      av2.src = img_user`
                                        
                                        setTimeout(() => {
                                            v.push(string)
                                        },1)
                                    }
                                }
                            }

                            function Embed() {
                                const l2 = program.length - program.replace(/[(]/g, ``).length
                                for (let i = 0; i < l2; i++) {
                                    let unit = program.toString().split(`)`).slice(i, i + 1).toString()
                                    console.log([unit],`**********`)
                                    let type = unit.split(` (`).slice(0, 1).toString()
                                    unit = unit.split(type).slice(1, 2).toString()
                                    let title = unit.split(`title:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let description = unit.split(`description:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let author = unit.split(`author:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let color = unit.split(`color:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let field_1 = unit.split(`field:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let field_2 = unit.split(`field:`).slice(2,3).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let image = unit.split(`image:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let thumbnail = unit.split(`thumbnail:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)
                                    let footer = unit.split(`footer:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``)

                                    console.log([`test.........................`])
                                    let Title = (unit.includes(`title`)) ? `\n                  .setTitle("${title}")` : ``
                                    let Description = (unit.includes(`description`)) ? `\n                  .setDescription("${description}")` : ``
                                    let Author = (unit.includes(`author`)) ? `\n                  .setAuthor({name:"${author}"})` : ``
                                    let Color = (unit.includes(`color`)) ? `\n                  .setColor(0x${color})` : ``
                                    let Icon = (unit.includes(`icon`)) ? `\n                  .setImage("${image}")` : ``
                                    let Thumbnail = (unit.includes(`thumbnail`)) ? `\n                  .setThumbnail("${thumbnail}")` : ``
                                    let Field_1 = (unit.includes(`field`)) ? `\n                  .addFields({name:"${field_1.split(` | `).slice(0, 1)}",value:"${field_1.split(` | `).slice(1, 2)}"})` : ``
                                    let Field_2 = (!field_2) ? `` : (unit.includes(`field`)) ? `\n                  .setFields({name:"${field_2.split(` | `).slice(0, 1)}",value:"${field_2.split(` | `).slice(1, 2)}"})` : ``
                                    let Footer = (unit.includes(`footer`)) ? `\n                  .setFooter({text:"${footer}"})` : ``

                                    let string = `const embed_${i} = new Discord.EmbedBuilder()` + Title + Description + Author + Color + Icon + Thumbnail + Field_1 + Field_2 + Footer + `\n                  Channel.send({embeds:[embed_${i}]})`
                                    v.push(string)
                                }
                            }
                            let sub1 = (program.includes('[')) ? actions() : ``
                            let embed = (program.includes('embed (')) ? Embed() : ``
                            setTimeout(() => {
                                fs.readFile("./product/index.js", "utf8", (err, txt) => {
                                    let act = v.join(`}{`).toString().replace(/}{/g, `\n      `)

                                    const add = `\nclient.on('guildMemberAdd', (member, message) => {\n      const user = member.user\n      const name = user.username\n      const Channel = client.channels.cache.get('${channel}');\n      ${act}\n})\n`

                                    fs.writeFileSync('./product/index.js', txt + add.replace(/'/g, '`'))
                                })
                            }, 1)
                        }, 7)
                    }
                    if (program.includes(`command {`)) {
                        function command() {
                            setTimeout(() => {
                                fs.mkdir(`./product/commands`, function (err) {
                                    if (err) return
                                }, 1)

                                fs.readFile("./product/index.js", "utf8", (err, txt) => {
                                    if (!txt.toString().includes('commands = []')) {
                                        let client_id = program.split(`bot_id:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``).replace(/\r/g, ``)
                                        let server_id = program.split(`server_id:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``).replace(/\r/g, ``)
                                        const app = "\n//slash commands\nconst commands = [];\nconst commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));\nfor (const file of commandFiles) {\nconst command = require('./commands/${file}');\ncommands.push(command.data);\n}\n(async () => {\ntry {\nconsole.log('Started refreshing ${commands.length} application (/) commands.');\n\n// The put method is used to fully refresh all commands in the guild with the current set\nconst rest = new REST({\nversion: '10'\n}).setToken(token.token);\nconst data = rest.put(\nRoutes.applicationGuildCommands('" + `${client_id}` + "', '" + `${server_id}` + "'), {\nbody: commands\n},\n);\nconsole.log('Successfully reloaded ${data.length} application (/) commands.');\n} catch (error) {\n// And of course, make sure you catch and log any errors!\nconsole.error(error);\n}\n})();\n"
                                        fs.writeFile(`./product/index.js`, txt + app.replace(/'/g, '`'), function (err) {
                                            if (err) throw err;
                                        })
                                    }
                                    let name = program.split(`name:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``).replace(/\r/g, ``)
                                    name = (!name || name == undefined) ? `unknown` : name
                                    let description = program.split(`description:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``).replace(/\r/g, ``)
                                    description = (!description || description == undefined) ? `unknown` : description
                                    const sub_l = program.length - program.replace(/[[]/g, ``).length
                                    var S = []
                                    var n_t = []

                                    function sub_command() {
                                        for (let i = 0; i < sub_l; i++) {
                                            let sub = program.split(`]`).slice(i, i + 1).toString()
                                            let type = sub.split(` [`).slice(0, 1).toString()
                                            sub = sub.split(type).slice(1, 2).toString()
                                            let name = sub.split(`name:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                            let description = sub.split(`description:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                            let required = sub.split(`required:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                            t_l = type.length - type.replace(/\n/g, ``).replace(/\r/g, ``).length
                                            type = type.split(`\n`).slice(t_l, t_l + 1).toString().replace(/\n/g, ``).replace(/\r/g, ``)
                                            let type2 = (type.includes(`string`)) ? `\n.addStringOption(option=>\noption.setName('${name}')\n.setDescription('${description}')\n.setRequired(${required}))` : ``
                                            let type3 = (type.includes(`number`)) ? `\n.addNumberOption(option=>\noption.setName('${name}')\n.setDescription('${description}')\n.setRequired(${required}))` : type2
                                            let type4 = (type.includes(`member`)) ? `\n.addUserOption(option=>\noption.setName('${name}')\n.setDescription('${description}')\n.setRequired(${required}))` : type3
                                            let type5 = (type.includes(`role`)) ? `\n.addRoleOption(option=>\noption.setName('${name}')\n.setDescription('${description}')\n.setRequired(${required}))` : type4
                                            let type6 = (type.includes(`channel`)) ? `\n.addChannelOption(option=>\noption.setName('${name}')\n.setDescription('${description}')\n.setRequired(${required}))` : type5
                                            S.push(type6)
                                            n_t.push(`name:${name}, type:${type}, required:${required}`)
                                            console.log(type4 + `<-test\n${type}\n${name}`)
                                        }
                                    }

                                    let sub1 = (program.includes('[')) ? sub_command() : ``
                                    const base = 'const { GuildMember,PermissionsBitField,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, } = require(`discord.js`);\nmodule.exports = {\n      data: new SlashCommandBuilder()\n      .setName("' + `${name}` + '")\n      .setDescription("' + `${description}` + '")' + `${S.join('')}` + '\n};'
                                    fs.writeFileSync(`./product/commands/${name}.js`, ``)
                                    fs.appendFile(`./product/commands/${name}.js`, base.replace(/'/g, '`'), function (err) {
                                        if (err) throw err;
                                    })

                                    function app_reply(string, command_name) {
                                        const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {\n                  interaction.reply('" + `${string}` + "')\n            }\n      }\n})"
                                        return reply
                                    }

                                    function app_output(string, command_name) {
                                        const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {\n                  interaction.channel.send('" + `${string}` + "')\n            }\n      }\n})"
                                        return reply
                                    }

                                    function app_add_role(string, command_name) {
                                        const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {\n                  interaction.member.roles.add('" + `${string}` + "')\n            }\n      }\n})"
                                        return reply
                                    }

                                    function app_remove_role(string, command_name) {
                                        const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {\n                  interaction.member.roles.remove('" + `${string}` + "')\n            }\n      }\n})"
                                        return reply
                                    }


                                    setTimeout(() => {
                                        var variables = []
                                        var count = 0

                                        function sub_command_vars() {
                                            const l = n_t.length
                                            console.log(`n_t = ${l} , ${n_t}`)
                                            for (var i = 0; i < (l); i++) {
                                                let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                let vars = type
                                                let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")" : vars3
                                                count = count + 1
                                                variables.push(vars4 + `\n`)
                                            }
                                        }
                                        setTimeout(() => {
                                            function app_reply_alt(string, command_name, vars) {
                                                var v = []
                                                const l = n_t.length
                                                console.log(`n_t = ${l} , ${n_t}`)
                                                for (var i = 0; i < (l); i++) {
                                                    let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let vars = type
                                                    let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                    let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                    let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")\n                  member_" + `${count}` + " = (!member_" + `${count}` + ") ? interaction.member: member_" + `${count}` + "" : vars3
                                                    let vars5 = (vars.includes(`role`)) ? "let role_" + `${count}` + " = interaction.options.getRole('" + `${name}` + "'," + `${require}` + ")" : vars4
                                                    let vars6 = (vars.includes(`channel`)) ? "let channel_" + `${count}` + " = interaction.options.getChannel('" + `${name}` + "'," + `${require}` + ")" : vars5
                                                    count = count + 1
                                                    v.push(`                  ` + vars6 + `\n`)
                                                }
                                                let string_1 = string.toString().split(` `).slice(0, 1)
                                                let string_2 = string.toString().split(` `).slice(1, 2)
                                                string_2 = (string_2 == string_1 || string_2 == null || !string_2) ? `` : string_2
                                                let value_1 = v.toString().split(`\n`).slice(Number(string_1), Number(string_1) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value_2 = v.toString().split(`\n`).slice(Number(string_2), Number(string_2) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                value_2 = (value_2 == value_1 || value_2 == null || !value_2) ? `` : "${" + value_2 + "}"
                                                value_1 = (value_2 == value_1 || value_1 == null || !value_1) ? `` : "${" + value_1 + "}"
                                                let value = v.toString().split(`\n`).slice(Number(string), Number(string) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``)
                                                const v_place = value.length - value.replace(/=/g, "").length
                                                value = value.split(`=`).slice(v_place - 1, v_place).toString().replace(/ /g, ``)
                                                const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {" + `\n${v.join("")}` + "                  interaction.reply(`" + `${value_1}` + "` +` " + `${value_2}` + "`).catch(console.error)\n            }\n      }\n})"
                                                return reply
                                            }

                                            function app_output_alt(string, command_name, vars) {
                                                var v = []
                                                const l = n_t.length
                                                console.log(`n_t = ${l} , ${n_t}`)
                                                for (var i = 0; i < (l); i++) {
                                                    let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let vars = type
                                                    let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                    let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                    let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")\n                  member_" + `${count}` + " = (!member_" + `${count}` + ") ? interaction.member: member_" + `${count}` + "" : vars3
                                                    let vars5 = (vars.includes(`role`)) ? "let role_" + `${count}` + " = interaction.options.getRole('" + `${name}` + "'," + `${require}` + ")" : vars4
                                                    let vars6 = (vars.includes(`channel`)) ? "let channel_" + `${count}` + " = interaction.options.getChannel('" + `${name}` + "'," + `${require}` + ")" : vars5
                                                    count = count + 1
                                                    v.push(`                  ` + vars6 + `\n`)
                                                }
                                                let string_1 = string.toString().split(` `).slice(0, 1)
                                                let string_2 = string.toString().split(` `).slice(1, 2)
                                                string_2 = (string_2 == string_1 || string_2 == null || !string_2) ? `` : string_2
                                                let value_1 = v.toString().split(`\n`).slice(Number(string_1), Number(string_1) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value_2 = v.toString().split(`\n`).slice(Number(string_2), Number(string_2) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value = v.toString().split(`\n`).slice(Number(string), Number(string) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``)
                                                value_2 = (value_2 == value_1 || value_2 == null || !value_2) ? `` : "${" + value_2 + "}"
                                                value_1 = (value_2 == value_1 || value_1 == null || !value_1) ? `` : "${" + value_1 + "}"
                                                const v_place = value.length - value.replace(/=/g, "").length
                                                value = value.split(`=`).slice(v_place - 1, v_place).toString().replace(/ /g, ``)
                                                const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {" + `\n${v.join("")}` + "                  interaction.channel.send(`" + `${value_1}` + "` +` " + `${value_2}` + "`).catch(console.error)\n            }\n      }\n})"
                                                return reply
                                            }

                                            function app_add_role_alt(string, command_name, vars) {
                                                var v = []
                                                const l = n_t.length
                                                console.log(`n_t = ${l} , ${n_t}`)
                                                for (var i = 0; i < (l); i++) {
                                                    let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let vars = type
                                                    let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                    let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                    let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")\n                  member_" + `${count}` + " = (!member_" + `${count}` + ") ? interaction.member: member_" + `${count}` + "" : vars3
                                                    let vars5 = (vars.includes(`role`)) ? "let role_" + `${count}` + " = interaction.options.getRole('" + `${name}` + "'," + `${require}` + ").id" : vars4
                                                    let vars6 = (vars.includes(`channel`)) ? "let channel_" + `${count}` + " = interaction.options.getChannel('" + `${name}` + "'," + `${require}` + ")" : vars5
                                                    count = count + 1
                                                    v.push(`                  ` + vars6 + `\n`)
                                                }
                                                let string_1 = string.toString().split(` `).slice(0, 1)
                                                let string_2 = string.toString().split(` `).slice(1, 2)
                                                string_2 = (string_2 == string_1 || string_2 == null || !string_2) ? `` : string_2
                                                let value = v.toString().split(`\n`).slice(Number(string), Number(string) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``)
                                                let value_1 = v.toString().split(`\n`).slice(Number(string_1), Number(string_1) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value_2 = v.toString().split(`\n`).slice(Number(string_2), Number(string_2) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let user = (value_1.includes(`member_`) && value_2) ? value_1 : value_2
                                                user = (!value_1.includes(`member_`) && !value_2.includes(`member_`) || !value_2 && !value_1.includes(`member_`)) ? `interaction.member` : user
                                                const v_place = value.length - value.replace(/=/g, "").length
                                                value_2 = (value_2 == value_1 || value_2 == null || !value_2) ? `` : "${" + value_2 + "}"
                                                value_1 = (value_2 == value_1 || value_1 == null || !value_1) ? `` : "${" + value_1 + "}"
                                                let out = (!value_1.includes(`member_`)) ? value_1 : value_2
                                                const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {" + `\n${v.join("")}` + "                  " + `${user}` + ".roles.add(`" + `${out}` + "`).catch(console.error)\n            }\n      }\n})"
                                                return reply
                                            }

                                            function app_remove_role_alt(string, command_name, vars) {
                                                var v = []
                                                const l = n_t.length
                                                console.log(`n_t = ${l} , ${n_t}`)
                                                for (var i = 0; i < (l); i++) {
                                                    let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let vars = type
                                                    let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                    let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                    let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")\n                  member_" + `${count}` + " = (!member_" + `${count}` + ") ? interaction.member: member_" + `${count}` + "" : vars3
                                                    let vars5 = (vars.includes(`role`)) ? "let role_" + `${count}` + " = interaction.options.getRole('" + `${name}` + "'," + `${require}` + ").id" : vars4
                                                    let vars6 = (vars.includes(`channel`)) ? "let channel_" + `${count}` + " = interaction.options.getChannel('" + `${name}` + "'," + `${require}` + ")" : vars5
                                                    count = count + 1
                                                    v.push(`                  ` + vars6 + `\n`)
                                                }
                                                let string_1 = string.toString().split(` `).slice(0, 1)
                                                let string_2 = string.toString().split(` `).slice(1, 2)
                                                string_2 = (string_2 == string_1 || string_2 == null || !string_2) ? `` : string_2
                                                let value = v.toString().split(`\n`).slice(Number(string), Number(string) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``)
                                                let value_1 = v.toString().split(`\n`).slice(Number(string_1), Number(string_1) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value_2 = v.toString().split(`\n`).slice(Number(string_2), Number(string_2) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let user = (value_1.includes(`member_`) && value_2) ? value_1 : value_2
                                                user = (!value_1.includes(`member_`) && !value_2.includes(`member_`) || !value_2 && !value_1.includes(`member_`)) ? `interaction.member` : user
                                                value_2 = (value_2 == value_1 || value_2 == null || !value_2) ? `` : "${" + value_2 + "}"
                                                value_1 = (value_2 == value_1 || value_1 == null || !value_1) ? `` : "${" + value_1 + "}"
                                                let out = (!value_1.includes(`member_`)) ? value_1 : value_2
                                                const v_place = value.length - value.replace(/=/g, "").length
                                                const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {" + `\n${v.join("")}` + "                  " + `${user}` + ".roles.remove(`" + `${out}` + "`).catch(console.error)\n            }\n      }\n})"
                                                return reply
                                            }

                                            function app_move_voice_channel_alt(string, command_name, vars) {
                                                var v = []
                                                const l = n_t.length
                                                console.log(`n_t = ${l} , ${n_t}`)
                                                for (var i = 0; i < (l); i++) {
                                                    let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let vars = type
                                                    let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                    let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                    let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")" : vars3
                                                    let vars5 = (vars.includes(`role`)) ? "let role_" + `${count}` + " = interaction.options.getRole('" + `${name}` + "'," + `${require}` + ").id" : vars4
                                                    let vars6 = (vars.includes(`channel`)) ? "let channel_" + `${count}` + " = interaction.options.getChannel('" + `${name}` + "'," + `${require}` + ").id" : vars5
                                                    count = count + 1
                                                    v.push(`                  ` + vars6 + `\n`)
                                                }
                                                v = v.toString().replace(`+`, `\n`)
                                                let string_1 = string.toString().split(` `).slice(0, 1)
                                                let string_2 = string.toString().split(` `).slice(1, 2)
                                                string_2 = (string_2 == string_1 || string_2 == null || !string_2) ? `` : string_2
                                                let value = v.toString().split(`\n`).slice(Number(string), Number(string) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``)
                                                let value_1 = v.toString().split(`\n`).slice(Number(string_1), Number(string_1) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value_2 = v.toString().split(`\n`).slice(Number(string_2), Number(string_2) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                string_2 = (value_2.includes(`member_`)) ? string_2 : string_2 - 1
                                                let user = (value_1.includes(`member_`) && value_2) ? value_1 : value_2
                                                user = (!value_1.includes(`member_`) && !value_2.includes(`member_`) || !value_2 && !value_1.includes(`member_`)) ? `interaction.member` : user
                                                value_2 = (value_2 == value_1 || value_2 == null || !value_2) ? `` : "${" + value_2 + "}"
                                                value_1 = (value_2 == value_1 || value_1 == null || !value_1) ? `` : "${" + value_1 + "}"
                                                let out = (!value_1.includes(`member_`)) ? value_1 : value_2
                                                let channel = (value_1.includes(`channel_`) && value_2) ? value_1 : value_2
                                                channel = (!value_1.includes(`channel_`)) ? value_2 : (!value_2.includes(`channel_`)) ? value_1 : out
                                                user = (user.includes(`member_`)) ? `${user.split(` =`).slice(0,1)} = (!${user.split(` =`).slice(0,1)}) ? interaction.member: ${user.split(` =`).slice(0,1)}\n                  ` : user
                                                const v_place = value.length - value.replace(/=/g, "").length
                                                let xuser = (user.includes(`interaction.member`)) ? user.split(` =`).slice(0, 1).toString().replace(`interaction.member`, ``) : user.split(` =`).slice(0, 1)
                                                console.log(`-------->${v}<----------`)
                                                const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {" + `\n${v.replace(/\n,/gi,`\n`)}` + "                  " + `${user}` + "" + `${xuser}` + ".voice.setChannel(`" + `${channel}` + "`)\n            }\n      }\n})"
                                                return reply
                                            }

                                            function app_timeout_alt(string, command_name, vars) {
                                                var v = []
                                                const l = n_t.length
                                                console.log(`n_t = ${l} , ${n_t}`)
                                                for (var i = 0; i < (l); i++) {
                                                    let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let vars = type
                                                    let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                    let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                    let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")\n                  member_" + `${count}` + " = (!member_" + `${count}` + ") ? interaction.member: member_" + `${count}` + "" : vars3
                                                    let vars5 = (vars.includes(`role`)) ? "let role_" + `${count}` + " = interaction.options.getRole('" + `${name}` + "'," + `${require}` + ").id" : vars4
                                                    let vars6 = (vars.includes(`channel`)) ? "let channel_" + `${count}` + " = interaction.options.getChannel('" + `${name}` + "'," + `${require}` + ")" : vars5
                                                    count = count + 1
                                                    v.push(`                  ` + vars6 + `\n`)
                                                }
                                                let string_1 = string.toString().split(` `).slice(0, 1)
                                                let string_2 = string.toString().split(` `).slice(1, 2)
                                                string_2 = (string_2 == string_1 || string_2 == null || !string_2) ? `` : string_2
                                                let value = v.toString().split(`\n`).slice(Number(string), Number(string) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``)
                                                let value_1 = v.toString().split(`\n`).slice(Number(string_1), Number(string_1) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value_2 = v.toString().split(`\n`).slice(Number(string_2), Number(string_2) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let user = (value_1.includes(`member_`) && value_2) ? value_1 : value_2
                                                user = (!value_1.includes(`member_`) && !value_2.includes(`member_`) || !value_2 && !value_1.includes(`member_`)) ? `interaction.member` : user
                                                value_2 = (value_2 == value_1 || value_2 == null || !value_2) ? `` : value_2
                                                value_1 = (value_2 == value_1 || value_1 == null || !value_1) ? `` : value_1
                                                let time = (!value_1.includes(`member_`)) ? value_1 : value_2

                                                const v_place = value.length - value.replace(/=/g, "").length
                                                const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {" + `\n${v.join("")}` + "                  " + `${user}` + ".timeout(Number(" + time + ".toString()" + ")*1000)\n            }\n      }\n})"
                                                return reply
                                            }

                                            function app_ban_alt(string, command_name, vars) {
                                                var v = []
                                                const l = n_t.length
                                                console.log(`n_t = ${l} , ${n_t}`)
                                                for (var i = 0; i < (l); i++) {
                                                    let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let vars = type
                                                    let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                    let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                    let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")" : vars3
                                                    let vars5 = (vars.includes(`role`)) ? "let role_" + `${count}` + " = interaction.options.getRole('" + `${name}` + "'," + `${require}` + ").id" : vars4
                                                    let vars6 = (vars.includes(`channel`)) ? "let channel_" + `${count}` + " = interaction.options.getChannel('" + `${name}` + "'," + `${require}` + ")" : vars5
                                                    count = count + 1
                                                    v.push(`                  ` + vars6 + `\n`)
                                                }
                                                let string_1 = string.toString().split(` `).slice(0, 1)
                                                let string_2 = string.toString().split(` `).slice(1, 2)
                                                string_2 = (string_2 == string_1 || string_2 == null || !string_2) ? `` : string_2
                                                let value = v.toString().split(`\n`).slice(Number(string), Number(string) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``)
                                                let value_1 = v.toString().split(`\n`).slice(Number(string_1), Number(string_1) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value_2 = v.toString().split(`\n`).slice(Number(string_2), Number(string_2) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let user = (value_1.includes(`member_`) && value_2) ? value_1 : value_2
                                                user = (!value_1.includes(`member_`) && value_2) ? value_1 : value_2
                                                let reason = (!value_1.includes(`member_`)) ? value_1 : value_2
                                                reason = (!value_2.includes(`member_`)) ? value_2 : value_1
                                                value_2 = (value_2 == value_1 || value_2 == null || !value_2 || value_2 == undefined) ? `` : value_2
                                                value_1 = (value_2 == value_1 || value_1 == null || !value_1 || value_1 == undefined) ? `` : value_1
                                                const v_place = value.length - value.replace(/=/g, "").length
                                                const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {" + `\n${v.join("")}` + "                  " + `${user}` + ".ban(`${" + `${reason}` + "}`)\n            }\n      }\n})"
                                                return reply
                                            }

                                            function app_kick_alt(string, command_name, vars) {
                                                var v = []
                                                const l = n_t.length
                                                console.log(`n_t = ${l} , ${n_t}`)
                                                for (var i = 0; i < (l); i++) {
                                                    let name = n_t.toString().split(`name:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let type = n_t.toString().split(`type:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let require = n_t.toString().split(`required:`).slice(i + 1, i + 2).toString().split(`,`).slice(0, 1)
                                                    let vars = type
                                                    let vars2 = (vars.includes(`string`)) ? "let string_" + `${count}` + " = interaction.options.getString('" + `${name}` + "', " + `${require}` + ")" : vars
                                                    let vars3 = (vars.includes(`number`)) ? "let number_" + `${count}` + " = interaction.options.getNumber('" + `${name}` + "'," + `${require}` + ")" : vars2
                                                    let vars4 = (vars.includes(`member`)) ? "let member_" + `${count}` + " = interaction.options.getMember('" + `${name}` + "'," + `${require}` + ")" : vars3
                                                    let vars5 = (vars.includes(`role`)) ? "let role_" + `${count}` + " = interaction.options.getRole('" + `${name}` + "'," + `${require}` + ").id" : vars4
                                                    let vars6 = (vars.includes(`channel`)) ? "let channel_" + `${count}` + " = interaction.options.getChannel('" + `${name}` + "'," + `${require}` + ")" : vars5
                                                    count = count + 1
                                                    v.push(`                  ` + vars6 + `\n`)
                                                }
                                                let string_1 = string.toString().split(` `).slice(0, 1)
                                                let string_2 = string.toString().split(` `).slice(1, 2)
                                                string_2 = (string_2 == string_1 || string_2 == null || !string_2) ? `` : string_2
                                                let value = v.toString().split(`\n`).slice(Number(string), Number(string) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``)
                                                let value_1 = v.toString().split(`\n`).slice(Number(string_1), Number(string_1) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let value_2 = v.toString().split(`\n`).slice(Number(string_2), Number(string_2) + 1).join(``).toString().replace(/,/g, ``).replace(/let /g, ``).split(` =`).slice(0, 1).toString().replace(/ /g, ``)
                                                let user = (value_1.includes(`member_`) && value_2) ? value_1 : value_2
                                                user = (!value_1.includes(`member_`) && value_2) ? value_1 : value_2
                                                let reason = (!value_1.includes(`member_`)) ? value_1 : value_2
                                                reason = (!value_2.includes(`member_`)) ? value_2 : value_1
                                                value_2 = (value_2 == value_1 || value_2 == null || !value_2 || value_2 == undefined) ? `` : value_2
                                                value_1 = (value_2 == value_1 || value_1 == null || !value_1 || value_1 == undefined) ? `` : value_1
                                                const v_place = value.length - value.replace(/=/g, "").length
                                                const reply = "client.on('interactionCreate', (interaction) => {\n      if (interaction.isChatInputCommand()) {      \n            if (interaction.commandName == '" + `${command_name}` + "') {" + `\n${v.join("")}` + "                  " + `${user}` + ".kick(`${" + `${reason}` + "}`)\n            }\n      }\n})"
                                                return reply
                                            }
                                            let out1 = (program.toString().split('\n').slice(5, 6).toString().includes(`app_output:`)) ? app_output(program.toString().split('\n').slice(5, 6).toString().split(`app_output:`).slice(1, 2).toString().split(`,`).slice(0, 1), name) : (program.split('\n').slice(5, 6).toString().includes(`app_reply:`)) ? app_reply(program.toString().split('\n').slice(5, 6).toString().split(`app_reply:`).slice(1, 2).toString().split(`,`).slice(0, 1), name) : (program.split('\n').slice(5, 6).toString().includes(`app_add_role:`)) ? app_add_role(program.toString().split('\n').slice(5, 6).toString().split(`app_add_role:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``), name) : (program.split('\n').slice(5, 6).toString().includes(`app_remove_role:`)) ? app_remove_role(program.toString().split('\n').slice(5, 6).toString().split(`app_remove_role:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``), name) : false
                                            let out_alt_1 = (program.toString().split('\n').slice(5, 6).toString().includes(`app_output:`)) ? app_output_alt(program.toString().split('\n').slice(5, 6).toString().split(`app_output:`).slice(1, 2).toString().split(`,`).slice(0, 1), name, variables) : ``
                                            let out_alt_2 = (program.split('\n').slice(5, 6).toString().includes(`app_reply:`)) ? app_reply_alt(program.toString().split('\n').slice(5, 6).toString().split(`app_reply:`).slice(1, 2).toString().split(`,`).slice(0, 1), name, variables) : out_alt_1
                                            let out_alt_3 = (program.split('\n').slice(5, 6).toString().includes(`app_add_role:`)) ? app_add_role_alt(program.toString().split('\n').slice(5, 6).toString().split(`app_add_role:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``), name, variables) : out_alt_2
                                            let out_alt_4 = (program.split('\n').slice(5, 6).toString().includes(`app_remove_role:`)) ? app_remove_role_alt(program.toString().split('\n').slice(5, 6).toString().split(`app_remove_role:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``), name, variables) : out_alt_3
                                            let out_alt_5 = (program.split('\n').slice(5, 6).toString().includes(`app_move_voice_chat:`)) ? app_move_voice_channel_alt(program.toString().split('\n').slice(5, 6).toString().split(`app_move_voice_chat:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``), name, variables) : out_alt_4
                                            let out_alt_6 = (program.split('\n').slice(5, 6).toString().includes(`app_timeout:`)) ? app_timeout_alt(program.toString().split('\n').slice(5, 6).toString().split(`app_timeout:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``), name, variables) : out_alt_5
                                            let out_alt_7 = (program.split('\n').slice(5, 6).toString().includes(`app_ban:`)) ? app_ban_alt(program.toString().split('\n').slice(5, 6).toString().split(`app_timeout:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``), name, variables) : out_alt_6
                                            let out_alt_8 = (program.split('\n').slice(5, 6).toString().includes(`app_kick:`)) ? app_kick_alt(program.toString().split('\n').slice(5, 6).toString().split(`app_timeout:`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/\n/g, ``), name, variables) : out_alt_7
                                            let out2 = (program.includes('[')) ? out_alt_8 : out1
                                            console.log(variables.toString() + `<-vars`)
                                            let sub1 = (program.includes('[')) ? sub_command_vars() : ``
                                            console.log(out1, program)
                                            console.log(variables + `<-------`)
                                            setTimeout(() => {
                                                fs.readFile("./product/index.js", "utf8", (err, txt2) => {

                                                    fs.writeFile('./product/index.js', txt2 + `\n` + out2, function (err) {
                                                        if (err) throw err;

                                                    })
                                                })
                                            }, 1)
                                        }, 0)
                                    }, 1)
                                })
                            }, 6)
                        }
                        command()
                    }
                    if (program.includes(`reaction {`)) {
                        function reaction_message() {
                            setTimeout(() => {
                                let emote_name = program.split(`emote_id:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                let channel_id = program.split(`channel_id:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                const l = program.length - program.replace(/[[]/g, ``).length
                                var v = []

                                function actions() {
                                    for (var i = 0; i < l; i++) {
                                        let unit = program.split(`]`).slice(i, i + 1).toString()
                                        let type = unit.split(` [`).slice(0, 1).toString()
                                        unit = unit.split(type).slice(1, 2).toString()
                                        let dm = unit.split(`dm:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                        let add_role = unit.split(`add_role:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                        let remove_role = unit.split(`remove_role:`).slice(1, 2).toString().split(`,`).slice(0, 1)
                                        let action = (unit.includes(`dm`)) ? "user.send('" + `${dm}` + "').catch(console.error())" : ``
                                        let action2 = (unit.includes(`add_role`)) ? `member.roles.add('${add_role}').catch(console.error())` : action
                                        let action3 = (unit.includes(`remove_role`)) ? `member.roles.remove('${remove_role}').catch(console.error())` : action2
                                        v.push(action3)
                                    }
                                }
                                let sub1 = (program.includes('[')) ? actions() : ``
                                setTimeout(() => {
                                    function action(channel_id, emote_id, action) {
                                        const string = `client.on("messageReactionAdd", (reaction, user) => { // When a reaction is added\n      if (user.bot) return; // If the user who reacted is a bot, return\n      if (reaction.emoji.id !== "${emote_id.toString().replace(/\n/g,``)}") return;\n      if (reaction.message.channel.id == "${channel_id}") {\n            const {guild} = reaction.message //store the guild of the reaction in variable\n            const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted\n            ${action}\n      }\n})`
                                        return string
                                    }
                                    fs.readFile("./product/index.js", "utf8", (err, txt2) => {
                                        let act = v.join(`}{`).toString().replace(/}{/g, `\n            `)
                                        fs.writeFile('./product/index.js', txt2 + `\n` + action(channel_id, emote_name, act), function (err) {
                                            if (err) throw err;
                                        })
                                    })
                                }, 1)
                            }, 7)
                        }
                        reaction_message()
                    }
                }
                setTimeout(() => {
                    part = part + 1
                }, Math.round((0.0714286 * Math.pow(L.length, 2) - 1.3 * L.length + 7.85714) + 1.7434))
            }, 2 * L.length - 3 - 1)
            imports()
        }
        run()
    })
})

/*
got to do:
message {
*embed () bug fixing and edge cases checking    
*buttons() bug fixing and edge cases checking
}
command {
Modularity 
buttons (
label
custom_id
type
action < >
)
embed
dm
}
welcome {
* maybe canvas welcome image[] bug fixing and edge cases checking
*embed() bug fixing and edge cases checking
}
*/