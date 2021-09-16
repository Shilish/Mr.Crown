"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Fun',
    description: 'Roll a Die',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction;
        var val = (Math.floor(Math.random() * (6 * 1) + 1)).toString();
        if (message) {
            var uName = message.author.tag.toString();
            if (val === '1') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022051363901440/1die.png')
                    .setDescription(":one:")
                    .setFooter('' + uName);
            }
            if (val === '2') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022053997928468/2die.png')
                    .setDescription(":two:")
                    .setFooter('' + uName);
            }
            if (val === '3') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022056048930856/3die.png')
                    .setDescription(":three:")
                    .setFooter('' + uName);
            }
            if (val === '4') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022058175451156/4die.png')
                    .setDescription(":four:")
                    .setFooter('' + uName);
            }
            if (val === '5') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022059882520586/5die.png')
                    .setDescription(":five:")
                    .setFooter('' + uName);
            }
            if (val === '6') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022061585420308/6die.png')
                    .setDescription(":six:")
                    .setFooter('' + uName);
            }
        }
        if (interaction) {
            var uName = interaction.user.tag.toString();
            if (val === '1') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022051363901440/1die.png')
                    .setDescription(":one:")
                    .setFooter('' + uName);
            }
            if (val === '2') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022053997928468/2die.png')
                    .setDescription(":two:")
                    .setFooter('' + uName);
            }
            if (val === '3') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022056048930856/3die.png')
                    .setDescription(":three:")
                    .setFooter('' + uName);
            }
            if (val === '4') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022058175451156/4die.png')
                    .setDescription(":four:")
                    .setFooter('' + uName);
            }
            if (val === '5') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022059882520586/5die.png')
                    .setDescription(":five:")
                    .setFooter('' + uName);
            }
            if (val === '6') {
                return new discord_js_1.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('__Roll a Die.__')
                    .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/888022061585420308/6die.png')
                    .setDescription(":six:")
                    .setFooter('' + uName);
            }
        }
    },
};
