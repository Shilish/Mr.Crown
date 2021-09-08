"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Testing',
    description: 'Latency between client and server',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        return 'pong';
    },
};
