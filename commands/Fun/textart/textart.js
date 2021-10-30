"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var figlet_1 = __importDefault(require("figlet"));
var fs_1 = __importDefault(require("fs"));
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Fun',
    description: 'Cool looking text formater',
    slash: 'both',
    testOnly: true,
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
    callback: function (_a) {
        var channel = _a.channel, message = _a.message, interaction = _a.interaction, args = _a.args;
        return __awaiter(void 0, void 0, void 0, function () {
            var multifont, customfont_1, fontbutton, row_1, collector, multifont, customfont_2, fontbutton, row_2, collector;
            return __generator(this, function (_b) {
                try {
                    if (message) {
                        if (!args[0]) {
                            message
                                .reply({
                                content: "Please use `!textart` `<Font>` `<Enter Some Text>`\n",
                                files: [
                                    {
                                        attachment: 'commands/Fun/textart/fonts.txt',
                                        name: 'Fonts.txt',
                                    },
                                ],
                            })
                                .catch(function (err) {
                                console.error();
                            });
                            return [2 /*return*/];
                        }
                        if (args[0].toLowerCase() == 'font' ||
                            args[0].toLowerCase() == 'fonts') {
                            message
                                .reply({
                                content: "Here's a list of available fonts\nPlease use `!textart` `<Font>` `<Enter Some Text>`",
                                files: [
                                    {
                                        attachment: 'commands/Fun/textart/fonts.txt',
                                        name: 'Fonts.txt',
                                    },
                                ],
                            })
                                .catch(function (err) {
                                console.error();
                            });
                            return [2 /*return*/];
                        }
                        multifont = args[0].replace(/\+/g, ' ');
                        customfont_1 = multifont;
                        args.shift();
                        if (!args[0]) {
                            return [2 /*return*/, " Please use !textart <Font:`" + customfont_1.toString() + "`> <Enter Some Text>"];
                        }
                        fontbutton = new discord_js_1.MessageButton()
                            .setCustomId('font_btn')
                            .setStyle('PRIMARY')
                            .setLabel('List All Fonts');
                        row_1 = new discord_js_1.MessageActionRow().addComponents(fontbutton);
                        figlet_1.default.text(args.join(' '), {
                            font: customfont_1,
                            horizontalLayout: 'fitted',
                            verticalLayout: 'fitted',
                            width: 80,
                            whitespaceBreak: true,
                        }, function (err, data) { return __awaiter(void 0, void 0, void 0, function () {
                            var asciitxt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (err) {
                                            // const fonttxt = fs.writeFileSync(   //this is code to store all fonts on to a txt file
                                            // 	'commands/Fun/textart/Raw-fonts.txt',
                                            // 	figlet.fontsSync().join('\n')
                                            // );
                                            channel
                                                .send({
                                                content: "<@" + message.author.id + "> Enter a valid `Font`\n[`" + customfont_1.toString() + "`] is not a valid font",
                                                files: [
                                                    {
                                                        attachment: 'commands/Fun/textart/fonts.txt',
                                                        name: 'Fonts.txt',
                                                    },
                                                ],
                                            })
                                                .catch(function (err) {
                                                console.error();
                                            });
                                            return [2 /*return*/];
                                        }
                                        asciitxt = fs_1.default.writeFileSync('../asciitxt.txt', data);
                                        return [4 /*yield*/, channel //Sending AsciiText Raw
                                                .send({
                                                content: "```" + data + "```",
                                                allowedMentions: { repliedUser: false },
                                            })
                                                .catch(function (err) {
                                                message.reply('Error - `Too many words/letters` ```Discord only allows messages to be 2000 charcters long ¯\\_(ツ)_/¯ \nEven I have to follow these rules :(\nFind the `.txt` instead```');
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, channel //Sending asciitext.txt
                                                .send({
                                                content: "**Text File**\nFont : `" + customfont_1.toString() + "`",
                                                files: [
                                                    {
                                                        attachment: '../asciitxt.txt',
                                                        name: 'Text Art.txt',
                                                    },
                                                ],
                                            })
                                                .catch(function (err) {
                                                console.error();
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, channel //Sending Font Button
                                                .send({
                                                content: '\u200b',
                                                components: [row_1],
                                            })
                                                .catch(function (err) {
                                                console.error();
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        collector = channel.createMessageComponentCollector();
                        collector.on('collect', function (interaction) {
                            if (interaction.customId === 'font_btn') {
                                interaction
                                    .reply({
                                    content: "Here's a list of available fonts\nPlease use `!textart` `<Font>` `<Enter Some Text>`",
                                    files: [
                                        {
                                            attachment: 'commands/Fun/textart/fonts.txt',
                                            name: 'Fonts.txt',
                                        },
                                    ],
                                })
                                    .catch(function (err) {
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
                                content: "Please use `!textart` `<Font>` `<Enter Some Text>`\n",
                                files: [
                                    {
                                        attachment: 'commands/Fun/textart/fonts.txt',
                                        name: 'Fonts.txt',
                                    },
                                ],
                            })
                                .catch(function (err) {
                                console.error();
                            });
                            return [2 /*return*/];
                        }
                        if (args[0].toLowerCase() == 'font' ||
                            args[0].toLowerCase() == 'fonts') {
                            interaction
                                .reply({
                                content: "Here's a list of available fonts\nPlease use `!textart` `<Font>` `<Enter Some Text>`",
                                files: [
                                    {
                                        attachment: 'commands/Fun/textart/fonts.txt',
                                        name: 'Fonts.txt',
                                    },
                                ],
                            })
                                .catch(function (err) {
                                console.error();
                            });
                            return [2 /*return*/];
                        }
                        multifont = args[0].replace(/\+/g, ' ');
                        customfont_2 = multifont;
                        args.shift();
                        if (!args[0]) {
                            return [2 /*return*/, " Please use !textart <Font:`" + customfont_2.toString() + "`> <Enter Some Text>"];
                        }
                        fontbutton = new discord_js_1.MessageButton()
                            .setCustomId('font_btn')
                            .setStyle('PRIMARY')
                            .setLabel('List All Fonts');
                        row_2 = new discord_js_1.MessageActionRow().addComponents(fontbutton);
                        figlet_1.default.text(args.join(' '), {
                            font: customfont_2,
                            horizontalLayout: 'fitted',
                            verticalLayout: 'fitted',
                            width: 80,
                            whitespaceBreak: true,
                        }, function (err, data) { return __awaiter(void 0, void 0, void 0, function () {
                            var asciitxt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (err) {
                                            // const fonttxt = fs.writeFileSync(   //this is code to store all fonts on to a txt file
                                            // 	'commands/Fun/textart/Raw-fonts.txt',
                                            // 	figlet.fontsSync().join('\n')
                                            // );
                                            interaction
                                                .reply({
                                                content: "<@" + interaction.user.id + "> Enter a valid `Font`\n[`" + customfont_2.toString() + "`] is not a valid font",
                                                files: [
                                                    {
                                                        attachment: 'commands/Fun/textart/fonts.txt',
                                                        name: 'Fonts.txt',
                                                    },
                                                ],
                                            })
                                                .catch(function (err) {
                                                console.error();
                                            });
                                            return [2 /*return*/];
                                        }
                                        asciitxt = fs_1.default.writeFileSync('../asciitxt.txt', data);
                                        return [4 /*yield*/, interaction.reply('_ _')];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, channel //Sending AsciiText Raw
                                                .send({
                                                content: "```" + data + "```",
                                                allowedMentions: { repliedUser: false },
                                            })
                                                .catch(function (err) {
                                                channel.send('Error - `Too many words/letters` ```Discord only allows messages to be 2000 charcters long ¯\\_(ツ)_/¯ \nEven I have to follow these rules :(\nFind the `.txt` instead```');
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, channel //Sending asciitext.txt
                                                .send({
                                                content: "**Text File**\nFont : `" + customfont_2.toString() + "`",
                                                files: [
                                                    {
                                                        attachment: '../asciitxt.txt',
                                                        name: 'Text Art.txt',
                                                    },
                                                ],
                                            })
                                                .catch(function (err) {
                                                console.error();
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, channel //Sending Font Button
                                                .send({
                                                content: '\u200b',
                                                components: [row_2],
                                            })
                                                .catch(function (err) {
                                                console.error();
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        collector = channel.createMessageComponentCollector();
                        collector.on('collect', function (interaction) {
                            if (interaction.customId === 'font_btn') {
                                interaction
                                    .reply({
                                    content: "Here's a list of available fonts\nPlease use `!textart` `<Font>` `<Enter Some Text>`",
                                    files: [
                                        {
                                            attachment: 'commands/Fun/textart/fonts.txt',
                                            name: 'Fonts.txt',
                                        },
                                    ],
                                })
                                    .catch(function (err) {
                                    console.error();
                                });
                            }
                        });
                    }
                }
                catch (_c) {
                    console.error();
                    return [2 /*return*/, 'Unexpected Error `Caught...`, Check format'];
                }
                return [2 /*return*/];
            });
        });
    },
};
//Shilish "Accio" Vatsin
