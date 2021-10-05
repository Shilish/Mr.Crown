import { ICommand } from "wokcommands";

export default {

    category: 'Admin Only',
    description: 'Simulates a User joining the server',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,

    callback: async({ message,client }) => {
        client.emit('guildMemberAdd', message.member!)
        message.reply({
            content: 'Simulated user joining the server.',
            allowedMentions: {repliedUser: false},
        }).then(resultMessage => {
            setTimeout(() => message.delete(),2000)
            setTimeout(() => resultMessage.delete(),2000)
        })
        .catch((err) => {
            console.error('Error from simjoin command: '+err)
            client.users.fetch('444426639665790978').then((user) => {      //Text the bot owner when bot has error
                user.send(`--- at --- <t:${Math.round(client.readyTimestamp!/1000)}> ---\n\nError from simjoin command: ${err}`)
            })
        })
    }

} as ICommand