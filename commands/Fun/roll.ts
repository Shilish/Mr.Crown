import { Message, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
	category: 'Fun',
	description: 'Roll a Die',

	slash: 'both',
	//testOnly: true,

	callback: ({ message, interaction }) => {
		const val = Math.floor(Math.random() * (6 * 1) + 1).toString();
		if (message) {
			var uName = message.author.tag.toString();
			const m1 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022051363901440/1die.png'
				)
				.setDescription(`:one:`)
				.setFooter('' + uName)
				.setTimestamp();
			const m2 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022053997928468/2die.png'
				)
				.setDescription(`:two:`)
				.setFooter('' + uName)
				.setTimestamp();
			const m3 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022056048930856/3die.png'
				)
				.setDescription(`:three:`)
				.setFooter('' + uName)
				.setTimestamp();
			const m4 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022058175451156/4die.png'
				)
				.setDescription(`:four:`)
				.setFooter('' + uName)
				.setTimestamp();
			const m5 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022059882520586/5die.png'
				)
				.setDescription(`:five:`)
				.setFooter('' + uName)
				.setTimestamp();
			const m6 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022061585420308/6die.png'
				)
				.setDescription(`:six:`)
				.setFooter('' + uName)
				.setTimestamp();
			if (val === '1') {
				message.reply({
					embeds: [m1],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '2') {
				message.reply({
					embeds: [m2],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '3') {
				message.reply({
					embeds: [m3],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '4') {
				message.reply({
					embeds: [m4],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '5') {
				message.reply({
					embeds: [m5],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '6') {
				message.reply({
					embeds: [m6],
					allowedMentions: { repliedUser: false },
				});
			}
		}

		if (interaction) {
			var uName = interaction.user.tag.toString();
			const i1 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022051363901440/1die.png'
				)
				.setDescription(`:one:`)
				.setFooter('' + uName)
				.setTimestamp();
			const i2 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022053997928468/2die.png'
				)
				.setDescription(`:two:`)
				.setFooter('' + uName)
				.setTimestamp();
			const i3 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022056048930856/3die.png'
				)
				.setDescription(`:three:`)
				.setFooter('' + uName)
				.setTimestamp();
			const i4 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022058175451156/4die.png'
				)
				.setDescription(`:four:`)
				.setFooter('' + uName)
				.setTimestamp();
			const i5 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022059882520586/5die.png'
				)
				.setDescription(`:five:`)
				.setFooter('' + uName)
				.setTimestamp();
			const i6 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('__Roll a Die.__')
				.setThumbnail(
					'https://cdn.discordapp.com/attachments/561917883958034444/888022061585420308/6die.png'
				)
				.setDescription(`:six:`)
				.setFooter('' + uName)
				.setTimestamp();
			if (val === '1') {
				interaction.reply({
					embeds: [i1],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '2') {
				interaction.reply({
					embeds: [i2],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '3') {
				interaction.reply({
					embeds: [i3],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '4') {
				interaction.reply({
					embeds: [i4],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '5') {
				interaction.reply({
					embeds: [i5],
					allowedMentions: { repliedUser: false },
				});
			}
			if (val === '6') {
				interaction.reply({
					embeds: [i6],
					allowedMentions: { repliedUser: false },
				});
			}
		}
	},
} as ICommand;

//Shilish "Accio" Vatsin
