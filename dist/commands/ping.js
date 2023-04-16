"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const command = {
    data: new discord_js_1.SlashCommandBuilder().setName("ping").setDescription("check your ping"),
    execute: async (client, interaction) => {
        if (interaction.isCommand()) {
            await interaction.deferReply({ fetchReply: true, ephemeral: true });
            await interaction.editReply({ content: "pong" });
        }
    }
};
module.exports = command;
