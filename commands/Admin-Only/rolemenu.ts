// Code is not optimized for speed but will work on it when I have more time :)

import {
	Client,
	GuildMember,
	Message,
	MessageActionRow,
	MessageSelectMenu,
	MessageSelectOptionData,
	Role,
	TextChannel,
} from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
	category: 'Admin Only',
	description: 'Role Menu to select custom roles',
	requiredPermissions: ['ADMINISTRATOR'],

	minArgs: 2,
	maxArgs: 3,
	expectedArgs: '<Channel> <Role> <MessageID>',
	expectedArgsTypes: ['CHANNEL', 'ROLE', 'STRING'],

	//testOnly: true,
	slash: false,
	guildOnly: true,

	init: (client: Client) => {
		client.on('interactionCreate', (interaction) => {
			if (!interaction.isSelectMenu()) {
				return;
			}

			const { customId, values, member } = interaction;

			const x = interaction.guild?.members.cache.get(client.user?.id!);
			const y = x?.roles.highest.position;

			const comp = interaction.component as MessageSelectMenu;
			const rolesInMenu = comp.options.filter(() => {
				return values;
			});
			for (const id of rolesInMenu) {
				let roleo = interaction.guild?.roles.cache.find(
					(r) => r.id === id.value
				);
				const z = roleo?.position;
				if (z! >= y!) {
					return;
				}
				//here for each of the roleID(id.value) make sure it's position is less than 'y'
			}

			if (customId === 'role_menu' && member instanceof GuildMember) {
				const component = interaction.component as MessageSelectMenu;
				const removed = component.options.filter((option) => {
					return !values.includes(option.value);
				});
				for (const id of removed) {
					member.roles.remove(id.value);
				}

				for (const id of values) {
					member.roles.add(id);
				}
				interaction.reply({
					content: 'Roles Updated!',
					ephemeral: true,
				});
			}
		});
	},

	callback: async ({ message, args, client, interaction }) => {
		try {
			const channel = message.mentions.channels.first() as TextChannel;
			if (
				!channel ||
				(channel.type !== 'GUILD_TEXT' && channel.type !== 'GUILD_NEWS')
			) {
				return 'Please tag a `#Text` channel';
			}

			let iMsg;
			let targetMessage: Message;
			let messageId;
			if (!args[2]) {
				iMsg = await channel.send({
					content: '\u200b',
				});

				targetMessage = await channel.messages.fetch(iMsg.id, {
					cache: true,
					force: true,
				});
				if (!targetMessage) {
					return 'Unknown `messageID` - If you see this, Please take a screenshot, join the support server and contact a `Admin`';
				}

				if (targetMessage.author.id !== client.user?.id) {
					return '`ERROR` - If you see this, Please take a screenshot, join the support server and contact a `Admin`';
				}
			} else {
				messageId = args[2];
				targetMessage = await channel.messages.fetch(messageId, {
					cache: true,
					force: true,
				});
				if (!targetMessage) {
					return 'Unknown `messageID`';
				}

				if (targetMessage.author.id !== client.user?.id) {
					return `Please provide a \`messageID\` of a \`message\` that was sent from <@${client.user?.id}>`;
				}
			}

			const role = message.mentions.roles.first() as Role;
			const x = message.guild?.members.cache.get('885279374704787456');
			const y = x?.roles.highest.position; //Fetch the position of Highest role the bot has in guild --- y has to be greater than the role being provided
			const z = role.position;
			if (!role) {
				return 'Mention a valid `Role`';
			}
			if (z >= y!) {
				return `Mention a \`Role\` below the bots \`Highest Role\`<@&${x?.roles.highest}>`;
			}

			let row = targetMessage.components[0] as MessageActionRow;
			if (!row) {
				row = new MessageActionRow();
			}

			const option: MessageSelectOptionData[] = [
				{
					label: role.name,
					value: role.id,
				},
			];

			let menu = row.components[0] as MessageSelectMenu;
			if (menu) {
				for (const opt of menu.options) {
					if (opt.value === option[0].value) {
						return {
							custom: true,
							content: `<@&${opt.value}> is already part of this role menu`,
							allowedMentions: { roles: [] },
						};
					}
				}

				menu.addOptions(option);
				menu.setMaxValues(menu.options.length);
			} else if (!menu) {
				row.addComponents(
					new MessageSelectMenu()
						.setCustomId('role_menu')
						.setMinValues(0)
						.setMaxValues(1)
						.setPlaceholder('Click Here for Roles...')
						.addOptions(option)
				);
			}

			targetMessage.edit({
				components: [row],
			});
			return {
				custom: true,
				content: `Added <@&${role.id}> \n> -\`This Message can be deleted\``,
				allowedMentions: { roles: [] },
			};
		} catch (err) {
			return 'Error with format/messageID, Please read `Docs` using `!help` or `/help`';
		}
	},
} as ICommand;
