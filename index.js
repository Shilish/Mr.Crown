"use strict";
// npm run dev - for running nodemon
// npm run tsc - for running ts to js compiler
// Remove typeScript: true, from index.js after compiling
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importStar(require("discord.js"));
var wokcommands_1 = __importDefault(require("wokcommands"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ],
});
client.on('ready', function () {
    console.log('Bot active and online.');
    client.users.fetch('444426639665790978').then(function (user) {
        user.send('Bot was restarted --- ' + client.readyAt);
    });
    new wokcommands_1.default(client, {
        commandsDir: path_1.default.join(__dirname, 'commands'),
        featuresDir: path_1.default.join(__dirname, 'features'),
        testServers: ['884501544815452180', '547372410664517632'],
    })
        .setBotOwner('444426639665790978') // Sets Bot's Owner.
        .setCategorySettings([
        {
            name: 'Configuration',
            emoji: '⚙️',
            hidden: true
        },
        {
            name: 'Misc',
            emoji: '🛠️'
        },
        {
            // You can also use custom emojis by specifying the ID
            // NOTE: Bot MUST be in the same server as the emoji
            name: 'Fun',
            emoji: '🎭',
            //customEmoji: true
        },
    ]);
});
client.on('messageCreate', function (message) {
    if (message.content === 'status') {
        message.reply({
            content: 'Active & Online!'
        });
    }
});
client.login(process.env.HEROKU_TOKEN);
