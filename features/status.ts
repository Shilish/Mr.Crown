import { Client } from 'discord.js';

export default (client: Client) => {
	let tmembers = 0;
	client.guilds.cache.forEach(async (guild) => {
		tmembers += guild.members.cache.size;
	});
	const guildCount = client.guilds.cache.size;

	const statusOptions = ['for !help', `over ${tmembers} users ^_+`];

	let counter = 0;

	const updateStatus = () => {
		client.user?.setActivity({
			name: statusOptions[counter],
			type: 'WATCHING',
		});
		// client.user?.setPresence({
		//     status: 'idle',
		//     activities: [
		//         {
		//             name: statusOptions[counter]
		//         }
		//     ]
		// })

		if (++counter >= statusOptions.length) {
			counter = 0;
		}

		setTimeout(updateStatus, 1000 * 60 * 5);
	};
	updateStatus();
};
