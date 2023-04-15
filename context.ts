import { Collection } from "discord.js";
import { Command, Context } from "./types/botTypes";

export const context:Context = {
    commands : new Collection<String , Command>(),
    commandArray: [] 
}


