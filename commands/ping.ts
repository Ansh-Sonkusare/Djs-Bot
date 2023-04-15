import { Client, Interaction, SlashCommandBuilder } from "discord.js";
import { Command } from "../types/botTypes";

const command:Command = {
    data: new SlashCommandBuilder().setName("ping").setDescription("check your ping"),
    execute:async (client:Client , interaction:Interaction) => {
            if(interaction.isCommand()){
               await interaction.deferReply({fetchReply:true,ephemeral:true})
                await interaction.editReply({content:"pong"})
                
                
            }
    }
}
module.exports = command