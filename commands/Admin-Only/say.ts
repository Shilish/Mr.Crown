import { ICommand } from 'wokcommands';

export default {
	category: 'Admin Only',
	description: 'Send a embed based on provided JSON data',
	requiredPermissions: ['ADMINISTRATOR'],
	slash: false,

	minArgs: 1,
	expectedArgs: '<JSON Data>',

	callback: ({ message, channel, args }) => {
		try {
			const json = JSON.parse(args.join(' '));

			// if (!json?.embeds && !json?.embeds.description) {
			// 	return '`JSON Data` is invalid as no embed exists. Please visit [https://discohook.org/] for designing your embed';
			// }

			channel.send(json).catch((err1) => {
				message.reply(
					'`JSON Data` is invalid. Please copy `JSON Data` from [https://discohook.org/]'
				);
			});

			setTimeout(() => {
				if (message.deletable) {
					message.delete();
				}
			}, 2500);
		} catch (err) {
			return `\`JSON Data\` is invalid. Please visit [https://discohook.org/] for designing your embed`;
		}
	},
} as ICommand;

//Shilish "Accio" Vatsin
