// npm run dev - for running nodemon
// npm run tsc - for running ts to js compiler

import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
     Intents.FLAGS.GUILDS,
     Intents.FLAGS.GUILD_MESSAGES
    ],
  })

  client.on('ready', () =>{
    console.log('Bot active and online.')

      new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['884501544815452180','547372410664517632'],
      })

      .setBotOwner('444426639665790978')    // Sets Bot's Owner.
  })

  

  client.on('messageCreate', (message) =>{
      if (message.content === 'status'){
          message.reply({
              content: 'Active & Online!'
          })
      }
  })

  client.login(process.env.HEROKU_TOKEN)