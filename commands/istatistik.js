const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
let cpuStat = require("cpu-stat");

exports.run = async (client, message, args) => {

      let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }

        let start = Date.now(); message.channel.send('Botun İstatistikleri').then(message => {
          let diff = (Date.now() - start);
          let API = (client.ws.ping).toFixed(2)

const istatistikler = new Discord.MessageEmbed()
.setColor("#00ccff")
.setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
 .addField(":bar_chart:  Botun Bilgileri","‎")
.setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
.addField(" :hammer_pick:  Geliştirici",  `<@!352036341153923072> <@!333146288289742850>`, true)
.addField(" :bust_in_silhouette:  Kullanıcı Sayısı",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(":clipboard:  Sunucu Sayısı", client.guilds.cache.size.toLocaleString(), true)
.addField(":bar_chart:  Kanal Sayısı", client.channels.cache.size.toLocaleString(), true)
.addField(":level_slider:  Bellek Kullanımı",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
 .addField(":pager:  İşlemci Kullanımı", `%${percent.toFixed(8)}`, true)
//.addField(`:scroll: »  Pingim` ,`${client.ws.ping}ms`,true)
.addField(":alarm_clock:  **Gecikme süreleri**","Mesaj: {ping1} \nBot: {ping2}"
.replace("{ping1}", `${diff}ms`)
.replace("{ping2}", `${API}ms`), true)
 .addField(":desktop:  İşletim Sistemi",`Windows Server 2021 R2 Standard Evaluation`,true)
  .addField(":compass:  İşlemci", `\n${os.cpus().map(i => `${i.model}`)[0]}`, true)
  .addField(":paperclip:  Kuruluş Tarihi", "27/03/2020", true)
  .addField(`:cd:  Node Sürümü`, `${process.version}`, true)
.addField(":minidisc:  Discord sürümü", "v" + Discord.version, true)

//.addField(`»‎‎‎‎ Bağlantılar`, `[ :e_mail: Sunucuna Ekle](https://discord.gg) | [  Oy ver](https://discord.gg) | [  Destek sunucusu](https://discord.gg) | [ Site](https://discord.gg) | [ Site](https://discord.gg)`,)
  message.channel.send(istatistikler)
  
		
    });
	
    })
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', "botinfo", "bot-info", "info"],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'istatistik sistemi',
  usage: 'istatistik'
}; 