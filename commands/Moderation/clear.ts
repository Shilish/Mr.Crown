import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
	category: 'Moderation',
	description:
		'Delete `n` number of messages from the `channel` and/or a `specified user`',
	aliases: ['delete', 'cc', 'purge'],
	requiredPermissions: ['ADMINISTRATOR'],
	slash: false,
	guildOnly: true,

	minArgs: 1,
	maxArgs: 2,
	expectedArgs: '<Amount(Number)> <Target-User>',
	expectedArgsTypes: ['STRING', 'USER'],

	callback: async ({ message, channel, args }) => {
		const amount = parseInt(args.shift()!);
		if (isNaN(amount)) {
			return 'You must specify a `NUMBER`!';
		}

		if (message) {
			await message.delete();
		}

		if (!args[0]) {
			const messages = await channel.messages.fetch(
				{ limit: amount },
				{
					cache: true,
					force: true,
				}
			);
			const { size } = messages;
			messages.forEach((msg) => {
				if (msg.deletable) {
					msg.delete();
				}
			});

			//const reply = `Deleted ${size} messages`;
			const emb = new MessageEmbed()
				.setColor('RED')
				.setTitle(`Deleted \`${size}\` messages`)
				.setDescription(`in <#${channel.id}>`);
			channel.send({
				embeds: [emb],
			});
		}

		if (args[0]) {
			const targetUser = message.mentions.users.first();
			const messages = await channel.messages.fetch(
				{},
				{
					cache: true,
					force: true,
				}
			);
			const filteredmsgs = messages.filter(
				(msgs) => msgs.author.id === targetUser?.id
			);
			//const { size } = filteredmsgs;
			let i = 0;
			filteredmsgs.forEach((msg) => {
				if (msg.deletable && amount > i) {
					msg.delete();
					i++;
				}
			});
			const size = i;
			//const reply = `Deleted ${size} messages by <@${targetUser?.id}> in <#${channel.id}>`;
			const emb = new MessageEmbed()
				.setColor('RED')
				.setTitle(`Deleted \`${size}\` messages`)
				.setDescription(`by <@${targetUser?.id}> \n in <#${channel.id}>`);
			channel.send({
				embeds: [emb],
			});
		}
	},
} as ICommand;

//Shilish "Accio" Vatsin
