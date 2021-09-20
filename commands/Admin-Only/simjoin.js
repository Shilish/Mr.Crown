"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Admin Only',
    description: 'Simulates a User joining the server',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: function (_a) {
        var message = _a.message, args = _a.args, text = _a.text, client = _a.client;
        client.emit('guildMemberAdd', message.member);
    }
};
