"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var getChannelId = require('../commands/Admin-Only/setwelcome').getChannelId;
// Basic welcome message feature
exports.default = (function (client) {
    client.on('guildMemberAdd', function (member) {
        var guild = member.guild;
        var channelId = getChannelId(guild.id);
        if (!channelId) {
            return;
        }
        var channel = guild.channels.cache.get(channelId);
        // Ensure this channel exists
        if (!channel) {
            return;
        }
        //const icon = (guild.iconURL(),{dynamic: true})
        //const userIcon = (member.user.displayAvatarURL(),{dynamic:true})
        var embedwelcomemsg = new discord_js_1.MessageEmbed() // Welcome Message itself.
            .setColor('RANDOM')
            .setTitle("**Welcome to __" + guild.name + "__**")
            .setDescription("Hey <@" + member.id + ">\n\n       Please head over to our **__Rules channel__** for more ***information and rules*** about our server.\n       \n       *You're member - " + guild.memberCount + "*\n       \n       Have a nice stay!")
            .setAuthor("" + member.user.tag, "" + member.user.displayAvatarURL())
            .setThumbnail('' + guild.iconURL())
            .setFooter('Invite your friends too.', 'https://cdn.discordapp.com/attachments/561917883958034444/887810413994049576/Discord-Logo-White.png');
        // Send the welcome message
        channel.send({
            embeds: [embedwelcomemsg]
        });
    });
});
