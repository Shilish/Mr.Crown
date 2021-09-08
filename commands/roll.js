"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Fun',
    description: 'Roll a Die',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        return (Math.floor(Math.random() * (6 * 1) + 1)).toString();
    },
};
