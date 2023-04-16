"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommands = void 0;
const fs_1 = __importDefault(require("fs"));
const discord_js_1 = require("discord.js");
const context_1 = require("../context");
const v10_1 = require("discord-api-types/v10");
async function handleCommands(client) {
    if (!process.env.token) {
        process.env.token = '';
    }
    const files = fs_1.default.readdirSync("./commands").filter((f) => f.endsWith('ts'));
    for (const file of files) {
        const filename = file.substring(0, (file.length - 3));
        console.log(filename);
        const command = require(`../commands/${filename}`);
        context_1.context.commands.set(command.data.name, command);
        context_1.context.commandArray.push(command.data.toJSON());
    }
    const rest = new discord_js_1.REST({ version: "10" }).setToken(process.env.token);
    rest.put(v10_1.Routes.applicationCommands('1063904562936819833'), {
        body: context_1.context.commandArray
    });
}
exports.handleCommands = handleCommands;
