import { ICommand } from 'wokcommands';

export default {
	category: 'Admin Only',
	description: 'Simulates a User joining the server',
	requiredPermissions: ['ADMINISTRATOR'],
	guildOnly: true,

	callback: async ({ message, client }) => {
		client.emit('guildMemberAdd', message.member!);

		message
			.reply({
				content: 'Simulated user joining the server.',
				allowedMentions: { repliedUser: false },
			})
			.then((resultMessage) => {
				setTimeout(() => {
					if (message.deletable && resultMessage.deletable) {
						message.delete();
						resultMessage.delete();
					}
					// if(!message.deletable && resultMessage.deletable){
					//     return
					// }
				}, 3000);
			})
			.catch(console.error);
	},
} as ICommand;
