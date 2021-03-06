// npm run ts/js - for running nodemon
// npm run tsc - for running ts to js compiler
// Remove typeScript: true, from index.js after compiling

import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';
//import mongo from './mongo'
dotenv.config();

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_PRESENCES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_VOICE_STATES,
	],
});

client.on('ready', async () => {
	console.log('Bot Loading...');
	client.users.fetch('444426639665790978').then((user) => {
		//Text the bot owner when bot start/restarts
		user.send(
			`Ping: ${Math.round(
				client.ws.ping
			)}ms\nBot was restarted --- <t:${Math.round(
				client.readyTimestamp! / 1000
			)}>`
		);
	});

	new WOKCommands(client, {
		commandsDir: path.join(__dirname, '../commands'),
		featuresDir: path.join(__dirname, '../features'),
		mongoUri: process.env.MONGO_URI,
		botOwners: ['444426639665790978'], // Sets Bot's Owner.
		typeScript: true, // ~~~ Remove in index.js after compiling.
		//testServers: ['884501544815452180'],
		disabledDefaultCommands: [
			//'help',
			//'command',
			'language',
			//'prefix',
			//'requiredrole'
		],
	}).setCategorySettings([
		{
			name: 'Configuration',
			emoji: '⚙️',
			hidden: true,
		},
		{
			name: 'Admin Only',
			emoji: '🔐',
		},
		{
			name: 'Moderation',
			emoji: '⚒️',
		},
		{
			name: 'Memes',
			emoji: '🐸',
		},
		{
			name: 'Fun',
			emoji: '🎭',
		},
		{
			name: 'Misc',
			emoji: '⚗️',
		},
	]);
	//await mongo();
});

client.on('messageCreate', (message) => {
	if (message.content === 'status') {
		message.reply({
			content: `Active & Online!\nUp Since: <t:${Math.round(
				client.readyTimestamp! / 1000
			)}:R>`,
		});
	}
});

client.login(process.env.HEROKU_TOKEN);

//Shilish "Accio" Vatsin <3
