import { Client, Guild, GuildMember } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  // Best practice for the built-in help menu
  category: 'Configuration',
  description: 'Lists all servers the bot is in',
  
  // Make this command owner only.
  // We will set the owner ID(s) in the next code snippet.
  ownerOnly: true,
  hidden: true,
  
  callback: ({ client, message }) => {
      client.guilds.cache.forEach((guild) => {
          message.author.send(`**${guild.name}** has **${guild.memberCount}** members and was created on - *${guild.createdAt}*`)
      })
  },
} as ICommand
