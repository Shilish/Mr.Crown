import { MessageEmbed, MessageButton, MessageActionRow } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Misc',
    description: 'Invite Mr. 👑 to any server',

    slash: 'both',
    //testOnly: true,

    callback: async ({client, message, interaction, args}) => {
        const botavatar = client.user?.avatarURL()
        if (message){
          const Invite = new MessageEmbed()
          .setTitle("__Invite Me!__")
          .setDescription(`**A Multipurpose Discord bot.**
          
          *Under HEAVY DEVELOPMENT 
          ~BETA~Stages~*`)
           .setColor('RANDOM')
           .setThumbnail(''+botavatar)
  
        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setStyle('LINK')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=884500499804618782&permissions=8&scope=bot%20applications.commands')
            .setLabel("🔗Invite Me")
  
        );
          await message.reply({
              embeds: [Invite],
              components: [row],
              allowedMentions: {repliedUser: false}
            })
        }

        if (interaction){
          const Invite = new MessageEmbed()
          .setTitle("__Invite Me!__")
          .setDescription(`**A Multipurpose Discord bot.**
          
          *Under HEAVY DEVELOPMENT 
          ~BETA~Stages~*`)
           .setColor('RANDOM')
           .setThumbnail(''+botavatar)
  
        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setStyle("LINK")
            .setURL('https://discord.com/api/oauth2/authorize?client_id=884500499804618782&permissions=8&scope=bot%20applications.commands')
            .setLabel("🔗Invite Me")
  
        );
          await interaction.reply({
              embeds: [Invite],
              components: [row]
            })
        }
    },
} as ICommand