import { Message, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
	category: 'Misc',
	description: 'Uptime of Mr. 👑',

	slash: 'both',
	//testOnly: true,

	callback: ({ message, interaction, client }) => {
		const up = Math.round(client.readyTimestamp! / 1000);
		const emb = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('__Uptime__')
			.setDescription(`Online Since : <t:${up}:R>`)
			.setTimestamp();

		if (message) {
			message
				.reply({
					embeds: [emb],
					allowedMentions: { repliedUser: false },
				})
				.then((resultMessage) => {
					resultMessage.react('🕒');
				});
		}

		if (interaction) {
			interaction.reply({
				embeds: [emb],
				allowedMentions: { repliedUser: false },
			});
			interaction.fetchReply().then((iReply) => {
				const msg = iReply as Message;
				msg.react('🕒');
			});
		} else {
			return;
		}
	},
} as ICommand;

//Shilish "Accio" Vatsin
