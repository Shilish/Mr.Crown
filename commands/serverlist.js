"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // Best practice for the built-in help menu
    category: 'Configuration',
    description: 'Lists all servers the bot is in',
    // Make this command owner only.
    ownerOnly: true,
    hidden: true,
    callback: function (_a) {
        var client = _a.client, message = _a.message;
        client.guilds.cache.forEach(function (guild) {
            message.author.send("**" + guild.name + "** has **" + guild.memberCount + "** members and was created on - *" + guild.createdAt + "*");
        });
        //TODO: Get server owner names and how many servers the client is a part of.
    },
};
