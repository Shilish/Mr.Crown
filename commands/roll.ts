import { ICommand } from "wokcommands";

export default {
    category: 'Fun',
    description: 'Roll a Die',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return (Math.floor(Math.random() * (6 * 1) + 1)).toString()
    },
} as ICommand