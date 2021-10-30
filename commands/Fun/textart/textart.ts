import { ICommand } from 'wokcommands';
import figlet, { Fonts } from 'figlet';
import fs from 'fs';
import { ButtonInteraction, MessageActionRow, MessageButton } from 'discord.js';

export default {
	category: 'Fun',
	description: 'Cool looking text formater',
	slash: 'both',
	//testOnly: true,

	minArgs: 0,
	expectedArgs: '<FONT> <Enter Some TEXT>',
	expectedArgsTypes: ['STRING', 'STRING'],

	options: [
		{
			name: 'font',
			description: 'Enter Font',
			required: true,
			type: 'STRING',
		},
		{
			name: 'text',
			description: 'Enter Some Text',
			required: true,
			type: 'STRING',
		},
	],

	callback: async ({ channel, message, interaction, args }) => {
		try {
			if (message) {
				if (!args[0]) {
					message
						.reply({
							content: `Please use \`!textart\` \`<Font>\` \`<Enter Some Text>\`\n`,
							files: [
								{
									attachment: 'commands/Fun/textart/fonts.txt',
									name: 'Fonts.txt',
								},
							],
						})
						.catch((err) => {
							console.error();
						});
					return;
				}
				if (
					args[0].toLowerCase() == 'font' ||
					args[0].toLowerCase() == 'fonts'
				) {
					message
						.reply({
							content: `Here's a list of available fonts\nPlease use \`!textart\` \`<Font>\` \`<Enter Some Text>\``,
							files: [
								{
									attachment: 'commands/Fun/textart/fonts.txt',
									name: 'Fonts.txt',
								},
							],
						})
						.catch((err) => {
							console.error();
						});
					return;
				}
				const multifont = args[0].replace(/\+/g, ' ');
				let customfont = multifont as Fonts;
				args.shift();
				if (!args[0]) {
					return ` Please use !textart <Font:\`${customfont.toString()}\`> <Enter Some Text>`;
				}
				const fontbutton = new MessageButton()
					.setCustomId('font_btn')
					.setStyle('PRIMARY')
					.setLabel('List All Fonts');

				const row = new MessageActionRow().addComponents(fontbutton);
				figlet.text(
					args.join(' '),
					{
						font: customfont,
						horizontalLayout: 'fitted',
						verticalLayout: 'fitted',
						width: 80,
						whitespaceBreak: true,
					},
					async (err, data) => {
						if (err) {
							// const fonttxt = fs.writeFileSync(   //this is code to store all fonts on to a txt file
							// 	'commands/Fun/textart/Raw-fonts.txt',
							// 	figlet.fontsSync().join('\n')
							// );
							channel
								.send({
									content: `<@${
										message.author.id
									}> Enter a valid \`Font\`\n[\`${customfont.toString()}\`] is not a valid font`,
									files: [
										{
											attachment: 'commands/Fun/textart/fonts.txt',
											name: 'Fonts.txt',
										},
									],
								})
								.catch((err) => {
									console.error();
								});
							return;
						}
						const asciitxt = fs.writeFileSync('../asciitxt.txt', data!); //creates a txt file of the ascii text
						await channel //Sending AsciiText Raw
							.send({
								content: `\`\`\`${data}\`\`\``,
								allowedMentions: { repliedUser: false },
							})
							.catch((err) => {
								message.reply(
									'Error - `Too many words/letters` ```Discord only allows messages to be 2000 charcters long ¯\\_(ツ)_/¯ \nEven I have to follow these rules :(\nFind the `.txt` instead```'
								);
							});
						await channel //Sending asciitext.txt
							.send({
								content: `**Text File**\nFont : \`${customfont.toString()}\``,
								files: [
									{
										attachment: '../asciitxt.txt',
										name: 'Text Art.txt',
									},
								],
							})
							.catch((err) => {
								console.error();
							});
						await channel //Sending Font Button
							.send({
								content: '\u200b',
								components: [row],
							})
							.catch((err) => {
								console.error();
							});
					}
				);

				const collector = channel.createMessageComponentCollector();
				collector.on('collect', (interaction: ButtonInteraction) => {
					if (interaction.customId === 'font_btn') {
						interaction
							.reply({
								content: `Here's a list of available fonts\nPlease use \`!textart\` \`<Font>\` \`<Enter Some Text>\``,
								files: [
									{
										attachment: 'commands/Fun/textart/fonts.txt',
										name: 'Fonts.txt',
									},
								],
							})
							.catch((err) => {
								console.error();
							});
					}
				});
			}

			//Interaction code starts here
			if (interaction) {
				if (!args[0]) {
					interaction
						.reply({
							content: `Please use \`!textart\` \`<Font>\` \`<Enter Some Text>\`\n`,
							files: [
								{
									attachment: 'commands/Fun/textart/fonts.txt',
									name: 'Fonts.txt',
								},
							],
						})
						.catch((err) => {
							console.error();
						});
					return;
				}
				if (
					args[0].toLowerCase() == 'font' ||
					args[0].toLowerCase() == 'fonts'
				) {
					interaction
						.reply({
							content: `Here's a list of available fonts\nPlease use \`!textart\` \`<Font>\` \`<Enter Some Text>\``,
							files: [
								{
									attachment: 'commands/Fun/textart/fonts.txt',
									name: 'Fonts.txt',
								},
							],
						})
						.catch((err) => {
							console.error();
						});
					return;
				}
				const multifont = args[0].replace(/\+/g, ' ');
				let customfont = multifont as Fonts;
				args.shift();
				if (!args[0]) {
					return ` Please use !textart <Font:\`${customfont.toString()}\`> <Enter Some Text>`;
				}
				const fontbutton = new MessageButton()
					.setCustomId('font_btn')
					.setStyle('PRIMARY')
					.setLabel('List All Fonts');

				const row = new MessageActionRow().addComponents(fontbutton);
				figlet.text(
					args.join(' '),
					{
						font: customfont,
						horizontalLayout: 'fitted',
						verticalLayout: 'fitted',
						width: 80,
						whitespaceBreak: true,
					},
					async (err, data) => {
						if (err) {
							// const fonttxt = fs.writeFileSync(   //this is code to store all fonts on to a txt file
							// 	'commands/Fun/textart/Raw-fonts.txt',
							// 	figlet.fontsSync().join('\n')
							// );
							interaction
								.reply({
									content: `<@${
										interaction.user.id
									}> Enter a valid \`Font\`\n[\`${customfont.toString()}\`] is not a valid font`,
									files: [
										{
											attachment: 'commands/Fun/textart/fonts.txt',
											name: 'Fonts.txt',
										},
									],
								})
								.catch((err) => {
									console.error();
								});
							return;
						}
						const asciitxt = fs.writeFileSync('../asciitxt.txt', data!); //creates a txt file of the ascii text
						await interaction.reply('_ _');
						await channel //Sending AsciiText Raw
							.send({
								content: `\`\`\`${data}\`\`\``,
								allowedMentions: { repliedUser: false },
							})
							.catch((err) => {
								channel.send(
									'Error - `Too many words/letters` ```Discord only allows messages to be 2000 charcters long ¯\\_(ツ)_/¯ \nEven I have to follow these rules :(\nFind the `.txt` instead```'
								);
							});
						await channel //Sending asciitext.txt
							.send({
								content: `**Text File**\nFont : \`${customfont.toString()}\``,
								files: [
									{
										attachment: '../asciitxt.txt',
										name: 'Text Art.txt',
									},
								],
							})
							.catch((err) => {
								console.error();
							});
						await channel //Sending Font Button
							.send({
								content: '\u200b',
								components: [row],
							})
							.catch((err) => {
								console.error();
							});
					}
				);

				const collector = channel.createMessageComponentCollector();
				collector.on('collect', (interaction: ButtonInteraction) => {
					if (interaction.customId === 'font_btn') {
						interaction
							.reply({
								content: `Here's a list of available fonts\nPlease use \`!textart\` \`<Font>\` \`<Enter Some Text>\``,
								files: [
									{
										attachment: 'commands/Fun/textart/fonts.txt',
										name: 'Fonts.txt',
									},
								],
							})
							.catch((err) => {
								console.error();
							});
					}
				});
			}
		} catch {
			console.error();
			return 'Unexpected Error `Caught...`, Check format';
		}
	},
} as ICommand;

//Shilish "Accio" Vatsin
