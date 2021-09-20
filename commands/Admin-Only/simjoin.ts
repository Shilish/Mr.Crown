import { ICommand } from "wokcommands";

export default {

    category: 'Admin Only',
    description: 'Simulates a User joining the server',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,

    callback: ({ message, args, text, client }) => {
        client.emit('guildMemberAdd', message.member!)
    }

} as ICommand