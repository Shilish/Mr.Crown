import { MessageEmbed, Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Fun',
    description: 'Flip a coin',

    slash: 'both',
    //testOnly: true,

    callback: ({message, interaction}) => {
        const val = (Math.floor(Math.random() * (2 * 1) + 1)).toString()

        if (message){
            var mName = message.author.tag.toString()
            const mHeads = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('__Flip a Coin.__')
            .setDescription(':regional_indicator_h: :regional_indicator_e: :regional_indicator_a: :regional_indicator_d: :regional_indicator_s:')
            .setFooter(''+mName)
            .setTimestamp()
            const mTails = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('__Flip a Coin.__')
            .setDescription(':regional_indicator_t: :regional_indicator_a: :regional_indicator_i: :regional_indicator_l: :regional_indicator_s:')
            .setFooter(''+mName)
            .setTimestamp()
            if (val === '1'){
                message.reply({ 
                    embeds: [mHeads],
                    allowedMentions: {repliedUser: false}
                })
            }
            if (val === '2'){
                message.reply({ 
                    embeds: [mTails],
                    allowedMentions: {repliedUser: false}
                })
            }
        }
        if (interaction){
            var iName = interaction.user.tag.toString()
            const iHeads = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('__Flip a Coin.__')
            .setDescription(':regional_indicator_h: :regional_indicator_e: :regional_indicator_a: :regional_indicator_d: :regional_indicator_s:')
            .setFooter(''+iName)
            .setTimestamp()
            const iTails = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('__Flip a Coin.__')
            .setDescription(':regional_indicator_t: :regional_indicator_a: :regional_indicator_i: :regional_indicator_l: :regional_indicator_s:')
            .setFooter(''+iName)
            .setTimestamp()
            if (val === '1'){
                interaction.reply({ 
                    embeds: [iHeads],
                    allowedMentions: {repliedUser: false}
                    })
            }
            if (val === '2'){
                interaction.reply({ 
                    embeds: [iTails],
                    allowedMentions: {repliedUser: false}
                })
            }
        }
    },
} as ICommand