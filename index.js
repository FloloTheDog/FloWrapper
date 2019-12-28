/*
#     # #      # #     # 
#     # #      # #     # 
#     # #  ##  # #     # 
#     # # #  # # #     # 
 #####  #      #  #####  
 */
const Discord = require("discord.js"); // load the discord.js library
const Client = new Discord.Client(); // create new client object

const Commands = require("./commands/_pagefile.js"); // load commands
const Config = require("./config.js"); // load config
const Prefix = Config.Prefix; // bot prefix "!" by default
const Token = Config.Token; // bot token

Client.on("ready", () => { // emitted when bot is ready
	Client.user.setPresence({
		game: {
			name: Prefix + 'help', type: 2 // sets the bot status as "Listening to !help"
		}
	});
	console.log("Locked and loaded!");
});

Client.on("message", (Message) => { // emitted whenever someone sends a message
	let Guild = Message.member.guild; // can most likely be shortened to "Message.guild"; the server the message was sent in
	let User = Message.user; // the person who sent the message
	let Content = Message.content; // the contents of the message

	if (Content.startsWith(Prefix)) { // if the message starts with our prefix
		let TrimmedContent = Content.replace(Prefix, ""); // remove the first instance of our prefix
		let Command = TrimmedContent.split(" ")[0].toLowerCase(); // the command the user has provided
		let Arguments = TrimmedContent.split(" ").slice(1); // gives us our arguments provided
		if (Commands[Command]) { // check if the command exists
			try {
				Commands[Command](Message, Arguments, Client);
			} catch(Error) {
				Message.channel.send(">.> An unexpected error ocurred while attempting to perform the selected function. Additional information:\n```" + Error + "\n```");
			}
		} else {
			// provide help if command doesnt exist
		}
	}
});

Client.login(Token); // log in