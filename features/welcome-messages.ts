// import { Client, TextChannel, Message, Guild, Intents } from 'discord.js'
// import WOKCommands from 'wokcommands'

// export default (client: Client, instance: WOKCommands) => {
//   // Listen for new messages
//   client.on('guildMemberAdd', (member) => {
//     console.log('member joins')

//     // if (member.) {
//     //     messageCreate.crosspost()
//     //     console.log('Crossposted/Published message - '+messageCreate.createdAt)
//     // }
    
//     })
// }
import { Client, TextChannel, MessageEmbed } from 'discord.js'
import WOKCommands from 'wokcommands'

// Basic welcome message feature
export default (client: Client, instance: WOKCommands) => {
  // Listen for new members joining a guild
  client.on('guildMemberAdd', (member) => {
    // Access the guild that they joined
    const { guild } = member

    // Get the channel named "welcome"
    const channel = guild.channels.cache.find(
      (channel) => channel.name === 'welcome'
    ) as TextChannel

    // Ensure this channel exists
    if (!channel) {
      return client.users.fetch('444426639665790978').then((user) => {   // Text the bot owner when error occurs.
        user.send('Bot had problem with welcome message')
      })
    }

    const embedwelcomemsg = new MessageEmbed()      // Welcome Message itself.
    .setColor('RANDOM')
    .setTitle(`**Welcome to __${guild.name}__**`)
    .setDescription(
      `Hey <@${member.id}>

       Please head over to <#548136784836427806> for more ***__information and rules__*** about our hotel :hotel:
       
       *You're member ${guild.memberCount}*
       
       Have a nice stay!`
    )
    .setAuthor('⊶⊷','https://cdn.discordapp.com/attachments/561917883958034444/887810385984503829/Anouncement_Pine.gif')
    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/887810480540901406/smoke_roundcorners.gif')
    .setFooter('Invite your friends - discord.gg/3T4zPr9', 'https://cdn.discordapp.com/attachments/561917883958034444/887810413994049576/Discord-Logo-White.png')

    // Send the welcome message
    channel.send({
      embeds: [embedwelcomemsg]
    })
  })
}
