import { Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Misc',
    description: 'Latency between You and Mr. 👑',

    slash: 'both',
    //testOnly: true,

    callback: ({ message, interaction }) => {
       if (message){
        message.reply(':satellite: :globe_with_meridians: :satellite_orbital:').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            resultMessage.edit('Pong : ' +ping)
        })
       }
        
       if (interaction){
           interaction.reply(':satellite: :globe_with_meridians: :satellite_orbital:')
           interaction.fetchReply() .then(iReply => {
               const msg = iReply as Message
               const ping = msg.createdTimestamp - interaction.createdTimestamp
               interaction.editReply('Pong : ' +ping)
           }) 
       }
    },
} as ICommand