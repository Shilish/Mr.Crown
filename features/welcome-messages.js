"use strict";
// import { Client, TextChannel, Message, Guild, Intents } from 'discord.js'
// import WOKCommands from 'wokcommands'
Object.defineProperty(exports, "__esModule", { value: true });
// export default (client: Client, instance: WOKCommands) => {
//   // Listen for new messages
//   client.on('guildMemberAdd', (member) => {
//     console.log('member joins')
//     // if (member.) {
//     //     messageCreate.crosspost()
//     //     console.log('Crossposted/Published message - '+messageCreate.createdAt)
//     // }
//     })
// }
var discord_js_1 = require("discord.js");
// Basic welcome message feature
exports.default = (function (client, instance) {
    // Listen for new members joining a guild
    client.on('guildMemberAdd', function (member) {
        // Access the guild that they joined
        var guild = member.guild;
        // Get the channel named "welcome"
        var channel = guild.channels.cache.find(function (channel) { return channel.name === '👋𝗪𝗲𝗹𝗰𝗼𝗺𝗲'; });
        // Ensure this channel exists
        if (!channel) {
            return client.users.fetch('444426639665790978').then(function (user) {
                user.send('Bot had problem with welcome message');
            });
        }
        var embedwelcomemsg = new discord_js_1.MessageEmbed() // Welcome Message itself.
            .setColor('RANDOM')
            .setTitle("**Welcome to __" + guild.name + "__**")
            .setDescription("Hey <@" + member.id + ">\n\n       Please head over to <#548136784836427806> for more ***__information and rules__*** about our hotel :hotel:\n       \n       *You're member " + guild.memberCount + "*\n       \n       Have a nice stay!")
            .setAuthor('⊶⊷', 'https://cdn.discordapp.com/attachments/561917883958034444/887810385984503829/Anouncement_Pine.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/561917883958034444/887810480540901406/smoke_roundcorners.gif')
            .setFooter('Invite your friends - discord.gg/3T4zPr9', 'https://cdn.discordapp.com/attachments/561917883958034444/887810413994049576/Discord-Logo-White.png');
        // Send the welcome message
        channel.send({
            embeds: [embedwelcomemsg]
        });
    });
});
