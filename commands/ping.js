"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Fun',
    description: 'Latency between You and Mr. 👑',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction;
        // message.react('🤔')
        if (message) {
            message.reply(':satellite: :globe_with_meridians: :satellite_orbital:').then(function (resultMessage) {
                var ping = resultMessage.createdTimestamp - message.createdTimestamp;
                resultMessage.edit('Pong : ' + ping);
            });
        }
        if (interaction) {
            interaction.reply(':satellite: :globe_with_meridians: :satellite_orbital:');
            interaction.fetchReply().then(function (iReply) {
                var msg = iReply;
                var ping = msg.createdTimestamp - interaction.createdTimestamp;
                interaction.editReply('Pong : ' + ping);
            });
        }
    },
};
