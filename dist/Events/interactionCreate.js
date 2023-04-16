"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../context");
const event = {
    name: "interactionCreate",
    once: false,
    execute: async (client, interaction) => {
        if (interaction.isCommand()) {
            context_1.context.commands.get(interaction.commandName)?.execute(client, interaction);
        }
    }
};
module.exports = event;
