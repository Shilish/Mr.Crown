import { ICommand } from 'wokcommands'
import welcomeSchema from '../../models/welcomeschema'

export default {

    category: 'Admin Only',
    description: 'Set the channel in which you wish to recieve Welcome messages',
    requiredPermissions: ['ADMINISTRATOR'],
    minArgs: 2,
    expectedArgs: '<Mention the Channel> <Welcome Text>',
    slash: false,
    guildOnly: true,

    callback: async({guild,message,args}) => {
        const target = message.mentions.channels.first()
        if (!target || target.type !== 'GUILD_TEXT' && target.type !== 'GUILD_NEWS'){
            return 'Please tag a `#Text` channel'
        }

        let text = ''
        if (message){
            args.shift()
            text = args.join(' ')
        }

        await welcomeSchema.findOneAndUpdate({
            _id: guild?.id,
        }, {
            _id: guild?.id,
            channelId: target.id,
            text,
            guildName: guild?.name
        }, {
            upsert: true
        })

        message.reply({
            content: 'Welcome-Message channel set',
            allowedMentions: {repliedUser: false}
        })
    }

} as ICommand