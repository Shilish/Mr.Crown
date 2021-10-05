import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Misc',
    description: 'Latency between You and Mr. 👑',

    slash: 'both',
    //testOnly: true,

    callback: ({ client, message, interaction }) => {
       if (message){
        const pingi = new MessageEmbed()
        .setDescription("📡 🌐 🛰️")
        .setColor('#000000')
        message.reply({
            embeds:[pingi],
            allowedMentions:{repliedUser:false}
        }).then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            const pingmsg = new MessageEmbed()
                .setTitle("**__Pong !__**")
                .setDescription('\u200b :satellite: :globe_with_meridians: :satellite_orbital: \u200b')
                .addFields([
                    {
                        name: 'Client Latency ⌛',
                        value: `\`\`\`\t${ping} ms\t\`\`\``,
                        inline: true
                    },
                    {
                        name: 'API Latency 💓',
                        value: `\`\`\`\t${Math.round(client.ws.ping)} ms\t\`\`\``,
                        inline: true
                    }
                ])
                .setColor('#000000')
            resultMessage.delete()
            message.reply({
                embeds: [pingmsg],
                allowedMentions:{repliedUser:false}
            })
        })
       }
        
       if (interaction){
        const pingi = new MessageEmbed()
            .setDescription("📡 🌐 🛰️")
            .setColor('#000000')
           interaction.reply({embeds:[pingi]})
           interaction.fetchReply() .then(iReply => {
               const msg = iReply as Message
               const ping = msg.createdTimestamp - interaction.createdTimestamp
               const pingmsg = new MessageEmbed()
                .setTitle("**__Pong !__**")
                .setDescription('\u200b :satellite: :globe_with_meridians: :satellite_orbital: \u200b')
                .addFields([
                    {
                        name: 'Client Latency ⌛',
                        value: `\`\`\`\t${ping} ms\t\`\`\``,
                        inline: true
                    },
                    {
                        name: 'API Latency 💓',
                        value: `\`\`\`\t${Math.round(client.ws.ping)} ms\t\`\`\``,
                        inline: true
                    }
                ])
                .setColor('#000000')
                interaction.editReply({
                    embeds: [pingmsg]
                })
           }) 
       }

       else {return}
    },
} as ICommand
