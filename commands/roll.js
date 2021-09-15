"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Fun',
    description: 'Roll a Die',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        //    return (Math.floor(Math.random() * (6 * 1) + 1)).toString()
        //  return MessageEmbed
        var val = (Math.floor(Math.random() * (6 * 1) + 1)).toString();
        if (val === '1') {
            return ':one:';
        }
        if (val === '2') {
            return ':two:';
        }
        if (val === '3') {
            return ':three:';
        }
        if (val === '4') {
            return ':four:';
        }
        if (val === '5') {
            return ':five:';
        }
        if (val === '6') {
            return ':six:';
        }
    },
};
