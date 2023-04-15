import { Client, Integration, Interaction } from "discord.js";
import { Events } from "../types/botTypes";
import { context } from "../context";

const event:Events = {
    name:"interactionCreate",
    once:false,
    execute:async (client:Client , interaction:Interaction) => {
        if(interaction.isCommand()){
          
            context.commands.get(interaction.commandName)?.execute(client,interaction)
        
    }
        

    
    }
}
module.exports =  event