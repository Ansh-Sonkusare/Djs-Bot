"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const handleEvents_1 = require("./handlers/handleEvents");
const handleCommands_1 = require("./handlers/handleCommands");
const express_1 = __importDefault(require("express"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send("Hello World");
});
const { token } = process.env;
const client = new discord_js_1.Client({ intents: discord_js_1.GatewayIntentBits.Guilds });
(0, handleEvents_1.handleEvents)(client);
(0, handleCommands_1.handleCommands)(client);
console.log(1);
app.listen(8001, () => console.log("ready"));
client.login(token);
