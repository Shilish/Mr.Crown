import axios from 'axios';
import { Message, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
	category: 'Memes',
	description: 'Chad Dad',

	slash: 'both',
	//testOnly: true,

	callback: async ({ message, interaction, client }) => {
		if (message) {
			const jk = 'https://icanhazdadjoke.com/';
			axios
				.get(jk, {
					headers: {
						Accept: 'text/plain',
						'User-Agent': 'axios 0.21.4',
					},
				})
				.then((res) => {
					const emb = new MessageEmbed()
						.setColor('RANDOM')
						.setTitle('__Dad Joke__')
						.setDescription(`> **${res.data}**`)
						.setTimestamp();
					message
						.reply({
							embeds: [emb],
							allowedMentions: { repliedUser: false },
						})
						.then((resultMessage) => {
							resultMessage.react('😜');
						});
				})
				.catch((err) => {
					console.error('Error from dadjoke command: ' + err);
					client.users.fetch('444426639665790978').then((user) => {
						//Text the bot owner when bot has error
						user.send(
							`--- at --- <t:${Math.round(
								client.readyTimestamp! / 1000
							)}> ---\n\nError from dadjoke command: ${err}`
						);
					});
				});
		}
		if (interaction) {
			const jk = 'https://icanhazdadjoke.com/';
			axios
				.get(jk, {
					headers: {
						Accept: 'text/plain',
						'User-Agent': 'axios 0.21.4',
					},
				})
				.then((res) => {
					const emb = new MessageEmbed()
						.setColor('RANDOM')
						.setTitle('__Dad Joke__')
						.setDescription(`> **${res.data}**`)
						.setTimestamp();
					interaction.reply({
						embeds: [emb],
						allowedMentions: { repliedUser: false },
					});
					interaction.fetchReply().then((iReply) => {
						const msg = iReply as Message;
						msg.react('😜');
					});
				})
				.catch((err) => {
					console.error('Error from dadjoke command: ' + err);
					client.users.fetch('444426639665790978').then((user) => {
						//Text the bot owner when bot has error
						user.send(
							`--- at --- <t:${Math.round(
								client.readyTimestamp! / 1000
							)}> ---\n\nError from dadjoke command: ${err}`
						);
					});
				});
		} else {
			return;
		}
	},
} as ICommand;
