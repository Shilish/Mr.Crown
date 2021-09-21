import axios from 'axios'
import { Message, MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {

    category: 'Memes',
    description: 'Insults the user',

    slash: 'both',
    //testOnly: true,

    callback: async ({message,interaction}) => {

        if(message){
            axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=text')
            .then((res) => {
                var uName = message.author.tag.toString()
                const emb = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Insult__')
                .setDescription(`**${res.data}**`)
                .setFooter(''+uName)
                .setTimestamp()
                message.reply({
                    embeds: [emb],
                    allowedMentions: {repliedUser: false}
                }).then(resultMessage => {
                    resultMessage.react('🙃')
                })
            })
            .catch((err) => {
                console.error('Error from insult command: '+err)
            })
        }
        if(interaction){
            axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=text')
            .then((res) => {
                var uName = interaction.user.tag.toString()
                const emb = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Insult__')
                .setDescription(`**${res.data}**`)
                .setFooter(''+uName)
                .setTimestamp()
                interaction.reply({
                    embeds: [emb],
                    allowedMentions: {repliedUser: false}
                })
                interaction.fetchReply() .then(iReply => {
                    const msg = iReply as Message
                    msg.react('🙃')
                }) 
            })
            .catch((err) => {
                console.error('Error from insult command: '+err)
            })
        }
        else {return}
    }

} as ICommand