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
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Moderation',
    description: 'Delete `n` number of messages from the `channel` and/or a `specified user`',
    aliases: ['delete', 'cc'],
    requiredPermissions: ['ADMINISTRATOR'],
    slash: false,
    guildOnly: true,
    minArgs: 1,
    maxArgs: 2,
    expectedArgs: '<Amount(Number)> <Target-User>',
    expectedArgsTypes: ['STRING', 'USER'],
    callback: function (_a) {
        var message = _a.message, channel = _a.channel, args = _a.args;
        return __awaiter(void 0, void 0, void 0, function () {
            var amount, messages, size, emb, targetUser_1, messages, filteredmsgs, i_1, size, emb;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        amount = parseInt(args.shift());
                        if (isNaN(amount)) {
                            return [2 /*return*/, 'You must specify a `NUMBER`!'];
                        }
                        if (!message) return [3 /*break*/, 2];
                        return [4 /*yield*/, message.delete()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!!args[0]) return [3 /*break*/, 4];
                        return [4 /*yield*/, channel.messages.fetch({ limit: amount }, {
                                cache: true,
                                force: true,
                            })];
                    case 3:
                        messages = _b.sent();
                        size = messages.size;
                        messages.forEach(function (msg) {
                            if (msg.deletable) {
                                msg.delete();
                            }
                        });
                        emb = new discord_js_1.MessageEmbed()
                            .setColor('RED')
                            .setTitle("Deleted `" + size + "` messages")
                            .setDescription("in <#" + channel.id + ">");
                        channel.send({
                            embeds: [emb],
                        });
                        _b.label = 4;
                    case 4:
                        if (!args[0]) return [3 /*break*/, 6];
                        targetUser_1 = message.mentions.users.first();
                        return [4 /*yield*/, channel.messages.fetch({}, {
                                cache: true,
                                force: true,
                            })];
                    case 5:
                        messages = _b.sent();
                        filteredmsgs = messages.filter(function (msgs) { return msgs.author.id === (targetUser_1 === null || targetUser_1 === void 0 ? void 0 : targetUser_1.id); });
                        i_1 = 0;
                        filteredmsgs.forEach(function (msg) {
                            if (msg.deletable && amount > i_1) {
                                msg.delete();
                                i_1++;
                            }
                        });
                        size = i_1;
                        emb = new discord_js_1.MessageEmbed()
                            .setColor('RED')
                            .setTitle("Deleted `" + size + "` messages")
                            .setDescription("by <@" + (targetUser_1 === null || targetUser_1 === void 0 ? void 0 : targetUser_1.id) + "> \n in <#" + channel.id + ">");
                        channel.send({
                            embeds: [emb],
                        });
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
};
//Shilish "Accio" Vatsin
