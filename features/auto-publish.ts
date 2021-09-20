import { Client } from 'discord.js'
import WOKCommands from 'wokcommands'

export default (client: Client, instance: WOKCommands) => {
  // Listen for new messages
  client.on('messageCreate', (messageCreate) => {
    const channel = messageCreate

    // console.log(messageCreate.channel.type)

    if (messageCreate.channel.type === 'GUILD_NEWS') {
        messageCreate.crosspost()
        console.log('Crossposted/Published message - '+messageCreate.createdAt)
    }
    
    })
}