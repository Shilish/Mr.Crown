import { ICommand } from 'wokcommands'
import welcomeSchema from '../../models/welcomeschema'

const cache = new Map()

const loadData = async () => {
    const results = await welcomeSchema.find()

    for (const result of results) {
        cache.set(result._id, result.channelId)
    }
};
loadData();

module.exports = {

    category: 'Admin Only',
    description: 'Set the channel in which you wish to recieve Welcome messages',
    requiredPermissions: ['ADMINISTRATOR'],
    slash: false,
    guildOnly: true,

    callback: async({message}) => {
        const { guild, channel } = message

        await welcomeSchema.findOneAndUpdate({
            _id: guild?.id,
        }, {
            _id: guild?.id,
            channelId: channel.id,
            guildName: guild?.name
        }, {
            upsert: true
        })

        cache.set(guild?.id,channel.id)

        message.reply({
            content: 'Welcome-Message channel set',
            allowedMentions: {repliedUser: false}
        })
    }

} as ICommand

module.exports.getChannelId = function(guildId:string){
    return cache.get(guildId)
}