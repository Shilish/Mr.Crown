"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (client, instance) {
    // Listen for new messages
    client.on('messageCreate', function (messageCreate) {
        var channel = messageCreate;
        // console.log(messageCreate.channel.type)
        if (messageCreate.channel.type === 'GUILD_NEWS') {
            messageCreate.crosspost();
            console.log('Crossposted/Published message - ' + messageCreate.createdAt);
        }
    });
});
