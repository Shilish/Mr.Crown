import { Client, TextChannel, MessageEmbed } from 'discord.js';
import schema from '../models/welcomeschema';

const welcomeData = {} as {
	//[GuildID]: [Channel, MessageContent]
	[key: string]: [TextChannel, string];
};
export default (client: Client) => {
	client.on('guildMemberAdd', async (member) => {
		const { guild } = member;

		//let data = welcomeData[guild.id]
		// if(!data){
		//   const results = await schema.findById(guild.id)
		//   if(!results){
		//     return
		//   }

		//   const {channelId,text} = results
		//   const channel = guild.channels.cache.get(channelId) as TextChannel
		//   data = welcomeData[guild.id] = [channel, text]
		// }

		let results = await schema.findById(guild.id);
		if (!results) {
			return;
		}
		const { channelId, text } = results;
		const channel = guild.channels.cache.get(channelId) as TextChannel;
		results = welcomeData[guild.id] = [channel, text];

		// Ensure a/the channel exists
		// if (!data[0]) {
		//   return
		// }

		const embedwelcomemsg = new MessageEmbed() // Welcome Message itself.
			.setColor('#303233')
			.setTitle(`**Welcome to __${guild.name}__**`)
			.setDescription(
				`Hey <@${member.id}>
      
       ${results[1]}
       
       > *You're member - ${guild.memberCount}*
       ​​​\u200b`
			)
			.setAuthor(`${member.user.tag}`, `${member.user.displayAvatarURL()}`)
			.setThumbnail('' + guild.iconURL())
			.setFooter(
				'Have a nice stay!',
				'https://cdn.discordapp.com/attachments/561917883958034444/887810413994049576/Discord-Logo-White.png'
			);

		// Send the welcome message
		results[0].send({
			embeds: [embedwelcomemsg],
		});
	});
};
