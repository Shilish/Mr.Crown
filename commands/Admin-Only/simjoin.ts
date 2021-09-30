import { ICommand } from "wokcommands";

export default {

    category: 'Admin Only',
    description: 'Simulates a User joining the server',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,

    callback: ({ message,client }) => {
        client.emit('guildMemberAdd', message.member!)
        message.reply({
            content: 'Simulated user joining the server.',
            allowedMentions: {repliedUser: false},
        }).then(resultMessage => {
            setTimeout(() => message.delete(),2000)
            setTimeout(() => resultMessage.delete(),2000)
        })
    }

} as ICommand