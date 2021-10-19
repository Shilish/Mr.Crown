"use strict";
// Code is not optimized for speed but will work on it when I have more time :)
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
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
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
    init: function (client) {
        client.on('interactionCreate', function (interaction) {
            var _a, _b, _c;
            if (!interaction.isSelectMenu()) {
                return;
            }
            var customId = interaction.customId, values = interaction.values, member = interaction.member;
            var x = (_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.members.cache.get((_b = client.user) === null || _b === void 0 ? void 0 : _b.id);
            var y = x === null || x === void 0 ? void 0 : x.roles.highest.position;
            var comp = interaction.component;
            var rolesInMenu = comp.options.filter(function () {
                return values;
            });
            var _loop_1 = function (id) {
                var roleo = (_c = interaction.guild) === null || _c === void 0 ? void 0 : _c.roles.cache.find(function (r) { return r.id === id.value; });
                var z = roleo === null || roleo === void 0 ? void 0 : roleo.position;
                if (z >= y) {
                    return { value: void 0 };
                }
            };
            for (var _i = 0, rolesInMenu_1 = rolesInMenu; _i < rolesInMenu_1.length; _i++) {
                var id = rolesInMenu_1[_i];
                var state_1 = _loop_1(id);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (customId === 'role_menu' && member instanceof discord_js_1.GuildMember) {
                var component = interaction.component;
                var removed = component.options.filter(function (option) {
                    return !values.includes(option.value);
                });
                for (var _d = 0, removed_1 = removed; _d < removed_1.length; _d++) {
                    var id = removed_1[_d];
                    member.roles.remove(id.value);
                }
                for (var _e = 0, values_1 = values; _e < values_1.length; _e++) {
                    var id = values_1[_e];
                    member.roles.add(id);
                }
                interaction.reply({
                    content: 'Roles Updated!',
                    ephemeral: true,
                });
            }
        });
    },
    callback: function (_a) {
        var message = _a.message, args = _a.args, client = _a.client, interaction = _a.interaction;
        return __awaiter(void 0, void 0, void 0, function () {
            var channel, iMsg, targetMessage, messageId, role, x, y, z, row, option, menu, _i, _b, opt, err_1;
            var _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 6, , 7]);
                        channel = message.mentions.channels.first();
                        if (!channel ||
                            (channel.type !== 'GUILD_TEXT' && channel.type !== 'GUILD_NEWS')) {
                            return [2 /*return*/, 'Please tag a `#Text` channel'];
                        }
                        iMsg = void 0;
                        targetMessage = void 0;
                        messageId = void 0;
                        if (!!args[2]) return [3 /*break*/, 3];
                        return [4 /*yield*/, channel.send({
                                content: '\u200b',
                            })];
                    case 1:
                        iMsg = _g.sent();
                        return [4 /*yield*/, channel.messages.fetch(iMsg.id, {
                                cache: true,
                                force: true,
                            })];
                    case 2:
                        targetMessage = _g.sent();
                        if (!targetMessage) {
                            return [2 /*return*/, 'Unknown `messageID` - If you see this, Please take a screenshot, join the support server and contact a `Admin`'];
                        }
                        if (targetMessage.author.id !== ((_c = client.user) === null || _c === void 0 ? void 0 : _c.id)) {
                            return [2 /*return*/, '`ERROR` - If you see this, Please take a screenshot, join the support server and contact a `Admin`'];
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        messageId = args[2];
                        return [4 /*yield*/, channel.messages.fetch(messageId, {
                                cache: true,
                                force: true,
                            })];
                    case 4:
                        targetMessage = _g.sent();
                        if (!targetMessage) {
                            return [2 /*return*/, 'Unknown `messageID`'];
                        }
                        if (targetMessage.author.id !== ((_d = client.user) === null || _d === void 0 ? void 0 : _d.id)) {
                            return [2 /*return*/, "Please provide a `messageID` of a `message` that was sent from <@" + ((_e = client.user) === null || _e === void 0 ? void 0 : _e.id) + ">"];
                        }
                        _g.label = 5;
                    case 5:
                        role = message.mentions.roles.first();
                        x = (_f = message.guild) === null || _f === void 0 ? void 0 : _f.members.cache.get('885279374704787456');
                        y = x === null || x === void 0 ? void 0 : x.roles.highest.position;
                        z = role.position;
                        if (!role) {
                            return [2 /*return*/, 'Mention a valid `Role`'];
                        }
                        if (z >= y) {
                            return [2 /*return*/, "Mention a `Role` below the bots `Highest Role`<@&" + (x === null || x === void 0 ? void 0 : x.roles.highest) + ">"];
                        }
                        row = targetMessage.components[0];
                        if (!row) {
                            row = new discord_js_1.MessageActionRow();
                        }
                        option = [
                            {
                                label: role.name,
                                value: role.id,
                            },
                        ];
                        menu = row.components[0];
                        if (menu) {
                            for (_i = 0, _b = menu.options; _i < _b.length; _i++) {
                                opt = _b[_i];
                                if (opt.value === option[0].value) {
                                    return [2 /*return*/, {
                                            custom: true,
                                            content: "<@&" + opt.value + "> is already part of this role menu",
                                            allowedMentions: { roles: [] },
                                        }];
                                }
                            }
                            menu.addOptions(option);
                            menu.setMaxValues(menu.options.length);
                        }
                        else if (!menu) {
                            row.addComponents(new discord_js_1.MessageSelectMenu()
                                .setCustomId('role_menu')
                                .setMinValues(0)
                                .setMaxValues(1)
                                .setPlaceholder('Click Here for Roles...')
                                .addOptions(option));
                        }
                        targetMessage.edit({
                            components: [row],
                        });
                        return [2 /*return*/, {
                                custom: true,
                                content: "Added <@&" + role.id + "> \n> -`This Message can be deleted`",
                                allowedMentions: { roles: [] },
                            }];
                    case 6:
                        err_1 = _g.sent();
                        return [2 /*return*/, 'Error with format/messageID, Please read `Docs` using `!help` or `/help`'];
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
};
