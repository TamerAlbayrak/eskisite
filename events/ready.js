const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../src/configs/settings.json')

var prefix= ayarlar.prefix;

module.exports = client => {
 console.log(`${client.guilds.cache.size} Kadar Sunucuya Hizmet Veriyorum!`);
  client.user.setPresence({ activity: { name: "https://taxperia.tk" }, status: "idle" });
  client.channels.cache.get("828316762948501514").join();
  

  
};