"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Misc',
    description: 'Uptime of Mr. 👑',
    slash: 'both',
    //testOnly: true,
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction, client = _a.client;
        var up = Math.round(client.readyTimestamp / 1000);
        var emb = new discord_js_1.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('__Uptime__')
            .setDescription("Online Since : <t:" + up + ":R>")
            .setTimestamp();
        if (message) {
            message
                .reply({
                embeds: [emb],
                allowedMentions: { repliedUser: false },
            })
                .then(function (resultMessage) {
                resultMessage.react('🕒');
            });
        }
        if (interaction) {
            interaction.reply({
                embeds: [emb],
                allowedMentions: { repliedUser: false },
            });
            interaction.fetchReply().then(function (iReply) {
                var msg = iReply;
                msg.react('🕒');
            });
        }
        else {
            return;
        }
    },
};
//Shilish "Accio" Vatsin
