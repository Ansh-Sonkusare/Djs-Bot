"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const discord_js_1 = require("discord.js");
exports.context = {
    commands: new discord_js_1.Collection(),
    commandArray: []
};
