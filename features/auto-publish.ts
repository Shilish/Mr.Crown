import { Client } from 'discord.js';

export default (client: Client) => {
	// Listen for new messages
	client.on('messageCreate', (messageCreate) => {
		// console.log(messageCreate.channel.type)

		// try{
		//   if (messageCreate.crosspostable === true){
		//     messageCreate.crosspost()
		//     console.log('Crossposted/Published message - '+messageCreate.createdAt)
		// }
		// } catch(err){
		//   console.error(`...`+err)
		// }

		if (messageCreate.channel.type === 'GUILD_NEWS') {
			if (messageCreate.crosspostable) {
				messageCreate
					.crosspost()
					//.then(() => console.log('Crossposted/Published message - '+messageCreate.createdAt))
					.catch(() => {
						return;
					});
			}
		}
	});
};
