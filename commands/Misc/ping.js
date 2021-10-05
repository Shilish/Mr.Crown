"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Misc',
    description: 'Latency between You and Mr. 👑',
    slash: 'both',
    //testOnly: true,
    callback: function (_a) {
        var client = _a.client, message = _a.message, interaction = _a.interaction;
        if (message) {
            var pingi = new discord_js_1.MessageEmbed()
                .setDescription("📡 🌐 🛰️")
                .setColor('#000000');
            message.reply({
                embeds: [pingi],
                allowedMentions: { repliedUser: false }
            }).then(function (resultMessage) {
                var ping = resultMessage.createdTimestamp - message.createdTimestamp;
                var pingmsg = new discord_js_1.MessageEmbed()
                    .setTitle("**__Pong !__**")
                    .setDescription('\u200b :satellite: :globe_with_meridians: :satellite_orbital: \u200b')
                    .addFields([
                    {
                        name: 'Client Latency ⌛',
                        value: "```\t" + ping + " ms\t```",
                        inline: true
                    },
                    {
                        name: 'API Latency 💓',
                        value: "```\t" + Math.round(client.ws.ping) + " ms\t```",
                        inline: true
                    }
                ])
                    .setColor('#000000');
                resultMessage.delete();
                message.reply({
                    embeds: [pingmsg],
                    allowedMentions: { repliedUser: false }
                });
            });
        }
        if (interaction) {
            var pingi = new discord_js_1.MessageEmbed()
                .setDescription("📡 🌐 🛰️")
                .setColor('#000000');
            interaction.reply({ embeds: [pingi] });
            interaction.fetchReply().then(function (iReply) {
                var msg = iReply;
                var ping = msg.createdTimestamp - interaction.createdTimestamp;
                var pingmsg = new discord_js_1.MessageEmbed()
                    .setTitle("**__Pong !__**")
                    .setDescription('\u200b :satellite: :globe_with_meridians: :satellite_orbital: \u200b')
                    .addFields([
                    {
                        name: 'Client Latency ⌛',
                        value: "```\t" + ping + " ms\t```",
                        inline: true
                    },
                    {
                        name: 'API Latency 💓',
                        value: "```\t" + Math.round(client.ws.ping) + " ms\t```",
                        inline: true
                    }
                ])
                    .setColor('#000000');
                interaction.editReply({
                    embeds: [pingmsg]
                });
            });
        }
        else {
            return;
        }
    },
};
