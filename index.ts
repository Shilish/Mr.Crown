// npm run dev - for running nodemon
// npm run tsc - for running ts to js compiler
// Remove typeScript: true, from index.js after compiling

import DiscordJS, { ApplicationCommandManager, ClientVoiceManager, CommandInteraction, Guild, Intents, MessageEmbed } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
     Intents.FLAGS.GUILDS,
     Intents.FLAGS.GUILD_MESSAGES,
     Intents.FLAGS.GUILD_MEMBERS,
     Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
     Intents.FLAGS.DIRECT_MESSAGES,
     Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
     Intents.FLAGS.GUILD_VOICE_STATES
    ],
  })

  client.on('ready', () =>{
    console.log('Bot active and online.')
    client.users.fetch('444426639665790978').then((user) => {      //Text the bot owner when bot start/restarts
      user.send('Bot was restarted --- '+client.readyAt)
    })

    new WOKCommands(client, {
      commandsDir: path.join(__dirname, 'commands'),
      featuresDir: path.join(__dirname, 'features'),
      typeScript: true,          // Remove in index.js after compiling.
      //testServers: ['884501544815452180','547372410664517632'],
      disabledDefaultCommands: [
        //'help'
        // 'command',
        'language',
        // 'prefix',
        // 'requiredrole'
      ],
    })

    .setMongoPath(process.env.MONGO_URI)

    .setBotOwner('444426639665790978')    // Sets Bot's Owner.

    .setCategorySettings([
      {
            name: 'Configuration',
            emoji: '⚙️',
            hidden: true
        },
        {
            name: 'Misc',
            emoji: '🛠️'
        },
        {
            // You can also use custom emojis by specifying the ID
            // NOTE: Bot MUST be in the same server as the emoji
            name: 'Fun',
            emoji: '🎭',
            //customEmoji: true.
      },
    ])
  })

  client.on('messageCreate', (message) =>{
      if (message.content === 'status'){
          message.reply({
              content: 'Active & Online!'
          })
      }
  })

  // client.on('ready' ,async () => {
  //   const commands = await client.api.applications(client.user.id).guilds("DEBUG GUILD ID HERE").commands.get();
  //   commands.forEach((e) => {
  //     console.log("   - Name: " + e["name"] + ", Id: " + e["id"]);
  //   });

  client.login(process.env.HEROKU_TOKEN)