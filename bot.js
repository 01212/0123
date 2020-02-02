const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get(672786845180100639ا")
setInterval(function() {
channel.send(`672786845180100639`);
}, 30)
})

client.login(process.env.BOT_TOKEN);