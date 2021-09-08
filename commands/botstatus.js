"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setStatus = function (client, status) {
    var _a;
    (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        status: 'online',
        activities: [
            {
                name: status,
            },
        ],
    });
};
exports.default = {
    // Best practice for the built-in help menu
    category: 'Configuration',
    description: 'Updates the status of the bot',
    // We need at least 1 word for the status.
    // maxArgs is -1 by default which means no limit.
    minArgs: 1,
    expectedArgs: '<status>',
    // Make this command owner only.
    // We will set the owner ID(s) in the next code snippet.
    ownerOnly: true,
    hidden: true,
    // This method is invoked only once whenever the command is registered
    init: function (client) {
        // TODO: Load the status from the database
        var status = "Under Development"; // Would come from the database
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
