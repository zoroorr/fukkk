const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548898308912054294")
setInterval(function() {
channel.send(`kaizo mugiwara orewa nru hhhhhhhhhhhh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);