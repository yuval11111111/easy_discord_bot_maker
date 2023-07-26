# Installation
+ Download the files to a folder on your pc
+ open the powershell of the folder and type:
```bash
npm i fs discord.js node-fetch @discord/rest path
```
and press enter

## local fix
+ copy the package.json, package-lock.json files and node_modules folder (ctrl+c not ctrl+x) and paste in the product folder

# How to use
to create/edit the "code" open the request.txt file and type your request using the following commands

## commands

### message commands
+ **message {}** base of all message commands
+ **input:message,** requires to choose the string will activate this message command
+ **output:message,** will send a normal message when the input string was detected
+ **reply:message,** will reply to the message if its content equals to the input string
+ **add_role:role_id** will add the role to the message author if the input string was detected
+ **remove_role:role_id** will remove the role from the message author if the input string was detected
**you can only chain up to 3 message + input commands inside each message {}**

#### how to write message command
```
message {
input:your-trigger-message,
output:output-message,
reply:reply-message,
add_role:role_id,
}
```

**output must come after the input**

### token command
+ **token {}** base of token command (required only once in the code)
+ **key:bot_token,** the token of the bot you want to use (a string)

#### how to write token command
```
token {
key:your-bot-token,
}
```

### login command
+ **login {}** the base and the entire login command (requires for login the bot to discord when activate)
**you need to put a space inside the {} ("{ }") or an enter for it to register**

### welcome command
+ **welcome {}** the base of all welcome commands (in most cases only one is needed)
+ **channel_id:discord_channel_id,** the channel that you want the welcome messages to be sent in
+ **message:message,** the message you want the bot to send when someone joins the server *(key words: user -> will ping the user that joined, name -> will type the username of the user that joined)*

#### how to write a welcome command
```
welcome {
channel_id:discord_channel_id,
message:text message,
}
```

### application command command
+ **command {}** the base command of all application command commands
+ **bot_id:bot_user_id,** the id of the bot user inside discord (required every time you write application command command at the start)
+ **server_id:discord_server_id,** the id of the discord server the bot will run at (required only at the first command and most be accurate to the server it runs at, the bot won't work if the id isn't right)
+ **name:command_name,** the name of the application command, that is the name the command will show as on discord (the same bot can't have 2 application commands with the same name)
+ **description:command_description,** the description of the application command

#### application command actions
+ **app_reply:message,** the message the bot will use to reply to the application command when used 
+ **app_output:message,** the message the bot will send in the channel the application command been used at when used
+ **app_role_add:role_id,** the role the bot will give to *user* when used the command
+ **app_role_remove:role_id,** the role the bot will remove from the *user* when used the command
+ **app_move_voice_chat:discord_voice_channel_id&&user** the channel the bot will move *user* when used the command (only works with sub commands)
+ **app_timeout:number&&user** timeout *user* for *time* seconds (only works with sub commands) 
+ **app_ban:user&&string** ban *user* from the server (only works with sub commands) 
#### application command sub commands/user input
+ **string []** the base of all string sub commands, input: text output: string
+ **number []** the base of all number sub commands, input: text(numbers) output: number
+ **member []** the base of all member sub commands, input: user output: Discord.GuildMembers | Discord.APIInteractionDataResolvedGuildMember
+ **role []** the base of all role sub commands, input: role output: Discord.Role | Discord.APIRole | string (depends or the command use case (the program will choose the correct one automatically))
+ **channel []** the base of all channel sub commands, input: channel output: Discord.CategoryChannel
+ **name:sub_command_name,** the name of the sub command and the name the sub command will show at on discord (each name can be used once per command, required every time)
+ **description:sub_command_description,** the description of the sub command and the description the sub command will show at on discord below the sub command name (required every time)
+ **required:boolean(true/false),** use for choose if that sub command required for running the command or not (required every time)
**you can chain up to 2 sub commands for an output (as shown in the full example below)**

#### how to write an application command command
```
command {
bot_id:your-bot-user-id,
server_id:the-discord_server_id-of-your-server,
name:string,
description:string,
app_reply:message | 0 1, (0 1 means which sub command to take info from starts from 0 according to how you write the command)
string [
name:string_0,
description:string,
required:boolean,
]
member [
name:user_1,
description:string,
required:boolean,
]
}
```

# activation
+ open the powershell of the folder where the files at and type:
```bash
node index
```
and press enter
**__if the command isn't working go to https://nodejs.org/en and install the TLS version and try again after finishing the installation process__**
+ after that the application will read the request.txt file and will create your request inside the product folder
+ after the powershell window stopped typing text you can safely close the powershell window and go into the product folder

## how to activate your discord bot
+ after entering the product folder open the powershell of the product folder and type:
```bash
node index
```
and press enter
**the bot will be active as long as this window running (i highly recommend to buy a server on the internet or to use a small pc if you got one laying around that isn't in use and look on youtube how to turn that pc to a home server)**
now your discord bot is up and running, if something isn't working just redo the activation steps and reactivate the bot again

# common problems
+ **__if the bot crashes with error "Missing Permissions" try putting the bot's role higher in the role list__** 
