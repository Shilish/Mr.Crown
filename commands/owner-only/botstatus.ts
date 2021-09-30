import { Client } from 'discord.js'
import { ICommand } from 'wokcommands'

const setStatus = (client: Client, status: string) => {
  client.user?.setPresence({
    status: 'online',
    activities: [
      {
        name: status,
      },
    ],
  })
  client.user?.setActivity({
    name: status,
    type: 'WATCHING'
  })
}

export default {
  category: 'Configuration',
  description: 'Updates the status of the bot',
  
  minArgs: 1,
  expectedArgs: '<status>',
  
  ownerOnly: true,
  hidden: true,
  
  // This method is invoked only once whenever the command is registered
  init: (client: Client) => {
    // TODO: Load the status from the database
    const status = "for !help" // Would come from the database
    setStatus(client, status)
  },
  
  // This method is invoked anytime the command is ran
  callback: ({ client, text, message }) => {
    setStatus(client, text)
    
    // TODO: Store the status (text variable) to a database
    
    message.reply({
      content: 'Status set!'
    })
  },
} as ICommand
