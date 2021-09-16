import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Fun',
    description: 'Roll a Die',

    slash: 'both',
    //testOnly: true,

    callback: ({message, interaction}) => {
        const val = (Math.floor(Math.random() * (6 * 1) + 1)).toString()
        if(message){
            var uName = message.author.tag.toString()
            if (val === '1'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022051363901440/1die.png')
                .setDescription(`:one:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '2'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022053997928468/2die.png')
                .setDescription(`:two:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '3'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022056048930856/3die.png')
                .setDescription(`:three:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '4'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022058175451156/4die.png')
                .setDescription(`:four:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '5'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022059882520586/5die.png')
                .setDescription(`:five:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '6'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022061585420308/6die.png')
                .setDescription(`:six:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
        }

        if(interaction){
            var uName = interaction.user.tag.toString()
            if (val === '1'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022051363901440/1die.png')
                .setDescription(`:one:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '2'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022053997928468/2die.png')
                .setDescription(`:two:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '3'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022056048930856/3die.png')
                .setDescription(`:three:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '4'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022058175451156/4die.png')
                .setDescription(`:four:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '5'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022059882520586/5die.png')
                .setDescription(`:five:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
            if (val === '6'){
                return new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Roll a Die.__')
                .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022061585420308/6die.png')
                .setDescription(`:six:`)
                .setFooter(''+uName)
                .setTimestamp()
            }
        }
    },
} as ICommand