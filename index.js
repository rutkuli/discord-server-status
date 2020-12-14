const Discord = require('discord.js'), 
	gamedig = require("gamedig"),
	config = require("./config"),
	client = new Discord.Client(); 	


client.on('ready', () => {
  console.log(`Status bot, is ready for use.`, "ready");
        setInterval(() => {
            gamedig.query({
				type: 'rust',
				host: config.ip,
				port: config.port
			}).then((state) => {							 
				client.user.setActivity(`${state.players.length}/${state.maxplayers} online!`, {type: "PLAYING"});
		}).catch((error) => {
			client.user.setActivity(`Currently offline!`, {type: "PLAYING"});
});
		    }, 15000); 		
});

client.login(config.token);
