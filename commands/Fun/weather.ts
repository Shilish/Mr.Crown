import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
	category: 'Fun',
	description: 'Provides weather forecast',
	slash: 'both',
	minArgs: 1,
	expectedArgs: '<LOCATION>',

	callback: async ({ client, args, message, interaction }) => {
		if (message) {
			var uName = message.author.tag.toString();
			const target = args.join('+');
			var link = `https://wttr.in/${target}.png?m`;
			const emb = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Weather Forecast__')
				.setImage(`${link}`)
				.setFooter('' + uName)
				.setTimestamp();
			message
				.reply({
					embeds: [emb],
					allowedMentions: { repliedUser: false },
				})
				.catch((err) => {
					console.error('Error from weather command: ' + err);
					client.users.fetch('444426639665790978').then((user) => {
						//Text the bot owner when bot has error
						user.send(
							`--- at --- <t:${Math.round(
								client.readyTimestamp! / 1000
							)}> ---\n\nError from weather command: ${err}`
						);
					});
				});
		}

		if (interaction) {
			var uName = interaction.user.tag.toString();
			const target = args.toString().split(' ').join('+');
			var link = `https://wttr.in/${target}.png?m`;
			const emb = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Weather Forecast__')
				.setImage(`${link}`)
				.setFooter('' + uName)
				.setTimestamp();
			interaction
				.reply({
					embeds: [emb],
					allowedMentions: { repliedUser: false },
				})
				.catch((err) => {
					console.error('Error from weather command: ' + err);
					client.users.fetch('444426639665790978').then((user) => {
						//Text the bot owner when bot has error
						user.send(
							`--- at --- <t:${Math.round(
								client.readyTimestamp! / 1000
							)}> ---\n\nError from weather command: ${err}`
						);
					});
				});
		}
	},
} as ICommand;
