import axios from 'axios'
import { Message, MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {

    category: 'Memes',
    description: 'Give Advice',

    slash: 'both',
    //testOnly: true,

    callback: async ({message,interaction}) => {

        if(message){
            axios.get('https://api.adviceslip.com/advice')
            .then((res) => {
                var uName = message.author.tag.toString()
                const emb = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Advice__')
                .setDescription(`**${res.data.slip.advice}**`)
                .setFooter(''+uName)
                .setTimestamp()
                message.reply({
                    embeds: [emb],
                    allowedMentions: {repliedUser: false}
                }).then(resultMessage => {
                    resultMessage.react('🤯')
                })
            })
            .catch((err) => {
                console.error('Error from advice command: '+err)
            })
        }
        if(interaction){
            axios.get('https://api.adviceslip.com/advice')
            .then((res) => {
                var uName = interaction.user.tag.toString()
                const emb = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Advice__')
                .setDescription(`**${res.data.slip.advice}**`)
                .setFooter(''+uName)
                .setTimestamp()
                interaction.reply({
                    embeds: [emb],
                    allowedMentions: {repliedUser: false}
                })
                interaction.fetchReply() .then(iReply => {
                    const msg = iReply as Message
                    msg.react('🤯')
                }) 
            })
            .catch((err) => {
                console.error('Error from advice command: '+err)
            })
        }
        else {return}
    }

} as ICommand