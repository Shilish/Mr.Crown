"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Fun',
    description: 'Flip a coin',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction;
        var val = (Math.floor(Math.random() * (2 * 1) + 1)).toString();
        if (message) {
            var uName = message.author.tag.toString();
            //var uAvt = message.author.avatarURL.toString()
            if (val === '1') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Flip a Coin.')
                    .setDescription(':regional_indicator_h: :regional_indicator_e: :regional_indicator_a: :regional_indicator_d: :regional_indicator_s:')
                    .setFooter('' + uName)
                    .setTimestamp();
            }
            if (val === '2') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Flip a Coin.')
                    .setDescription(':regional_indicator_t: :regional_indicator_a: :regional_indicator_i: :regional_indicator_l: :regional_indicator_s:')
                    .setFooter('' + uName)
                    .setTimestamp();
            }
        }
        if (interaction) {
            var uName = interaction.user.tag.toString();
            if (val === '1') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Flip a Coin.')
                    .setDescription(':regional_indicator_h: :regional_indicator_e: :regional_indicator_a: :regional_indicator_d: :regional_indicator_s:')
                    .setFooter('' + uName)
                    .setTimestamp();
            }
            if (val === '2') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Flip a Coin.')
                    .setDescription(':regional_indicator_t: :regional_indicator_a: :regional_indicator_i: :regional_indicator_l: :regional_indicator_s:')
                    .setFooter('' + uName)
                    .setTimestamp();
            }
        }
    },
};
