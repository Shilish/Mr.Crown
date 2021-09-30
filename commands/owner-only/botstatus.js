"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setStatus = function (client, status) {
    var _a, _b;
    (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        status: 'online',
        activities: [
            {
                name: status,
            },
        ],
    });
    (_b = client.user) === null || _b === void 0 ? void 0 : _b.setActivity({
        name: status,
        type: 'WATCHING'
    });
};
exports.default = {
    category: 'Configuration',
    description: 'Updates the status of the bot',
    minArgs: 1,
    expectedArgs: '<status>',
    ownerOnly: true,
    hidden: true,
    // This method is invoked only once whenever the command is registered
    init: function (client) {
        // TODO: Load the status from the database
        var status = "for !help"; // Would come from the database
        setStatus(client, status);
    },
    // This method is invoked anytime the command is ran
    callback: function (_a) {
        var client = _a.client, text = _a.text, message = _a.message;
        setStatus(client, text);
        // TODO: Store the status (text variable) to a database
        message.reply({
            content: 'Status set!'
        });
    },
};
