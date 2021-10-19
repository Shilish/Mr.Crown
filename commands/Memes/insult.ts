import axios from 'axios';
import { Message, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
	category: 'Memes',
	description: 'Insults the user',

	slash: 'both',
	//testOnly: true,

	callback: async ({ message, interaction, client }) => {
		if (message) {
			axios
				.get('https://evilinsult.com/generate_insult.php?lang=en&type=text')
				.then((res) => {
					const emb = new MessageEmbed()
						.setColor('RANDOM')
						.setTitle('__Insult__')
						.setDescription(`> **${res.data}**`)
						.setTimestamp();
					message
						.reply({
							embeds: [emb],
							allowedMentions: { repliedUser: false },
						})
						.then((resultMessage) => {
							resultMessage.react('🙃');
						});
				})
				.catch((err) => {
					console.error('Error from insult command: ' + err);
					client.users.fetch('444426639665790978').then((user) => {
						//Text the bot owner when bot has error
						user.send(
							`--- at --- <t:${Math.round(
								client.readyTimestamp! / 1000
							)}> ---\n\nError from insult command: ${err}`
						);
					});
				});
		}
		if (interaction) {
			axios
				.get('https://evilinsult.com/generate_insult.php?lang=en&type=text')
				.then((res) => {
					const emb = new MessageEmbed()
						.setColor('RANDOM')
						.setTitle('__Insult__')
						.setDescription(`> **${res.data}**`)
						.setTimestamp();
					interaction.reply({
						embeds: [emb],
						allowedMentions: { repliedUser: false },
					});
					interaction.fetchReply().then((iReply) => {
						const msg = iReply as Message;
						msg.react('🙃');
					});
				})
				.catch((err) => {
					console.error('Error from insult command: ' + err);
					client.users.fetch('444426639665790978').then((user) => {
						//Text the bot owner when bot has error
						user.send(
							`--- at --- <t:${Math.round(
								client.readyTimestamp! / 1000
							)}> ---\n\nError from insult command: ${err}`
						);
					});
				});
		} else {
			return;
		}
	},
} as ICommand;
