"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEvents = void 0;
const fs_1 = __importDefault(require("fs"));
async function handleEvents(client) {
    const files = fs_1.default.readdirSync("./Events").filter((f) => f.endsWith('ts'));
    for (const file of files) {
        const filename = file.substring(0, (file.length - 3));
        const event = require(`../Events/${filename}`);
        if (event.once) {
            client.on(event.name, (...args) => event.execute(client, ...args));
        }
        else {
            client.once(event.name, (...args) => event.execute(client, ...args));
        }
    }
}
exports.handleEvents = handleEvents;
