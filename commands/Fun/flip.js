"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Fun',
    description: 'Flip a coin',
    slash: 'both',
    //testOnly: true,
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction;
        var val = Math.floor(Math.random() * (2 * 1) + 1).toString();
        if (message) {
            var mName = message.author.tag.toString();
            var mHeads = new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Flip a Coin.__')
                .setDescription(':regional_indicator_h: :regional_indicator_e: :regional_indicator_a: :regional_indicator_d: :regional_indicator_s:')
                .setFooter('' + mName)
                .setTimestamp();
            var mTails = new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Flip a Coin.__')
                .setDescription(':regional_indicator_t: :regional_indicator_a: :regional_indicator_i: :regional_indicator_l: :regional_indicator_s:')
                .setFooter('' + mName)
                .setTimestamp();
            if (val === '1') {
                message.reply({
                    embeds: [mHeads],
                    allowedMentions: { repliedUser: false },
                });
            }
            if (val === '2') {
                message.reply({
                    embeds: [mTails],
                    allowedMentions: { repliedUser: false },
                });
            }
        }
        if (interaction) {
            var iName = interaction.user.tag.toString();
            var iHeads = new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Flip a Coin.__')
                .setDescription(':regional_indicator_h: :regional_indicator_e: :regional_indicator_a: :regional_indicator_d: :regional_indicator_s:')
                .setFooter('' + iName)
                .setTimestamp();
            var iTails = new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('__Flip a Coin.__')
                .setDescription(':regional_indicator_t: :regional_indicator_a: :regional_indicator_i: :regional_indicator_l: :regional_indicator_s:')
                .setFooter('' + iName)
                .setTimestamp();
            if (val === '1') {
                interaction.reply({
                    embeds: [iHeads],
                    allowedMentions: { repliedUser: false },
                });
            }
            if (val === '2') {
                interaction.reply({
                    embeds: [iTails],
                    allowedMentions: { repliedUser: false },
                });
            }
        }
    },
};
//Shilish "Accio" Vatsin
