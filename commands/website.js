const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {


const tax = new Discord.MessageEmbed();
tax.setDescription("Taxperia Botumuzun Sitesine gitmek İçin Bu Bağlantıya Tıkla [TIKLA](https://www.taxperia.tk)")

message.channel.send(tax)
  
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['site'],
permLevel: 0
}

exports.help = {
name: 'website',

} 