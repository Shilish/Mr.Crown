"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Admin Only',
    description: 'Simulates a User joining the server',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: function (_a) {
        var message = _a.message, client = _a.client;
        client.emit('guildMemberAdd', message.member);
        message.reply({
            content: 'Simulated user joining the server.',
            allowedMentions: { repliedUser: false },
        }).then(function (resultMessage) {
            setTimeout(function () { return message.delete(); }, 2000);
            setTimeout(function () { return resultMessage.delete(); }, 2000);
        });
    }
};
