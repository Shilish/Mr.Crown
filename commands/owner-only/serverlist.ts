import { Client, Guild, GuildMember } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  category: 'Configuration',
  description: 'DM a list of all servers the bot is in',
  
  // Make this command owner only.
  ownerOnly: true,
  hidden: true,
  
  callback: ({ client, message }) => {
      client.guilds.cache.forEach((guild) => {
          message.author.send(`**${guild.name}** has **${guild.memberCount}** members and was created on - *${guild.createdAt}*`)
      })
      //TODO: Get server owner names and how many servers the client is a part of.
  },
} as ICommand
