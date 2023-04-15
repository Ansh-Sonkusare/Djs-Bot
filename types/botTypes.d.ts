import { Collection , SlashCommandBuilder} from "discord.js";


export interface Events{
    name:string  | symbol,
    once:Boolean,
    execute :    (...args: any[]) => Promise<void>
}

export interface Context{
    commands: Collection<String,Command>,
    
    commandArray: any[]
}

export interface Command {
    data: SlashCommandBuilder,
    execute : (...args: any[]) => Promise<void>

}