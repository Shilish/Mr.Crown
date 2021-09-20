import { Client, TextChannel, MessageEmbed } from 'discord.js'

const { getChannelId } = require('../commands/Admin-Only/setwelcome')

// Basic welcome message feature
export default (client: Client) => {

  client.on('guildMemberAdd', (member) => {
    const { guild } = member

    const channelId = getChannelId(guild.id)

    if(!channelId){
      return
    }

    const channel = guild.channels.cache.get(channelId) as TextChannel;

    // Ensure this channel exists
    if (!channel) {
      return
    }

    //const icon = guild.iconURL.toString()

    const embedwelcomemsg = new MessageEmbed()      // Welcome Message itself.
    .setColor('RANDOM')
    .setTitle(`**Welcome to __${guild.name}__**`)
    .setDescription(
      `Hey <@${member.id}>

       Please head over to our **__Rules channel__** for more ***information and rules*** about our server.
       
       *You're member ${guild.memberCount}*
       
       Have a nice stay!`
    )
    .setAuthor('⊶⊷','https://cdn.discordapp.com/attachments/561917883958034444/887810385984503829/Anouncement_Pine.gif')
    .setThumbnail(''+guild.iconURL())
    .setFooter('Invite your friends too', 'https://cdn.discordapp.com/attachments/561917883958034444/887810413994049576/Discord-Logo-White.png')

    // Send the welcome message
    channel.send({
      embeds: [embedwelcomemsg]
    })
  })
}
