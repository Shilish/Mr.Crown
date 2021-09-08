import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Latency between client and server',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'pong'
    },
} as ICommand