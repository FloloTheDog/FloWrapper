/*
#     # #      # #     # 
#     # #      # #     # 
#     # #  ##  # #     # 
#     # # #  # # #     # 
 #####  #      #  #####  
 */
module.exports = function(Message, Arguments, Client) {
	// Where "Client" is the Discord Client object
	// Where "Message" is the Discord Message object
	// Where "Arguments" is the provided Arguments
	// user types: "!ping" (or whatever prefix you use)
	//bot responds: "Pong!"
	Message.channel.send("Pong!");
	// an alternative method would be "Message.reply()",
	//which also precedes the message by mentioning the user
}