import { MessageEmbed, MessageButton, MessageActionRow } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Misc',
    description: 'Docs/Guide for Mr. 👑',

    slash: 'both',
    //testOnly: true,

    callback: async ({client, message, interaction}) => {
        const botavatar = client.user?.avatarURL()
        if (message){
          const Invite = new MessageEmbed()
          .setTitle("__Help__")
          .setDescription(`*Click the link to visit the* 
          **Official Documentation** for **Mr. 👑**

          *~~~ALPHA~~~*
          *~BETA~*`)
           .setColor('#000000')
           .setThumbnail(''+botavatar)
  
        const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setStyle('LINK')
            .setURL('https://accio15.gitbook.io/mr-crown/')
            .setLabel("🔗Docs")
        )
        .addComponents(
            new MessageButton()
              .setStyle('LINK')
              .setURL('https://discord.gg/UVZKvqQUAW')
              .setLabel("⚒️Support Server")
          )
        .addComponents(
            new MessageButton()
              .setStyle('LINK')
              .setURL('https://github.com/Shilish/Mr.Crown')
              .setLabel("😺GitHub")
        )
          await message.reply({
              embeds: [Invite],
              components: [row],
              allowedMentions: {repliedUser: false}
            })
        }

        if (interaction){
          const Invite = new MessageEmbed()
          .setTitle("__Help__")
          .setDescription(`*Click the link to visit the* 
          **Official Documentation** for **Mr. 👑**

          *~~~ALPHA~~~*
          *~BETA~*`)
           .setColor('#000000')
           .setThumbnail(''+botavatar)
  
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
              .setStyle('LINK')
              .setURL('https://accio15.gitbook.io/mr-crown/')
              .setLabel("🔗Docs")
          )
          .addComponents(
              new MessageButton()
                .setStyle('LINK')
                .setURL('https://discord.gg/UVZKvqQUAW')
                .setLabel("⚒️Support Server")
            )
          .addComponents(
              new MessageButton()
                .setStyle('LINK')
                .setURL('https://github.com/Shilish/Mr.Crown')
                .setLabel("😺GitHub")
          )

          await interaction.reply({
              embeds: [Invite],
              components: [row]
            })
        }
        else {return}
      },
} as ICommand