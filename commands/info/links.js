const Discord = require('discord.js')
module.exports = {
    name: "links",
    aliases: ['link'], 
    async run(client, message, args){
       const embed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setAuthor(`${message.author.username}`, message.member.displayAvatarURL({ dynamic: true }))
        .addField('Panel', '[Link](https://panel.ZeDriHost.com)')
        .addField('Website', '[Link](https://ZeDriHost.com)')
        message.reply({ embeds: [embed] })

    }
}