import { ICommand } from 'wokcommands';

export default {
	category: 'Configuration',
	description: 'DM a list of all servers the bot is in',

	// Make this command owner only.
	ownerOnly: true,
	hidden: true,

	callback: async ({ client, message }) => {
		const guildCount = client.guilds.cache.size;
		let tmembers = 0;

		message.author.send(`Number of guilds the bot is in : **${guildCount}**`);

		client.guilds.cache.forEach(async (guild) => {
			tmembers += guild.members.cache.size;
		});
		message.author.send(`Number of users the bot serves : **${tmembers}**`);
		message.author.send(`List of Servers :`);

		client.guilds.cache.forEach((guild) => {
			message.author.send(
				`**${guild.name}** has **${guild.memberCount}** members.`
			);
		});
		//TODO: Get server owner names.
	},
} as ICommand;

//Shilish "Accio" Vatsin
