import fs from "fs";
import { Command, Context, Events } from "../types/botTypes";
import { ApplicationCommand, Client, Interaction, REST, } from "discord.js";
import { context } from '../context'
import { Routes } from 'discord-api-types/v10'

export async function handleCommands(client: Client) {
    if (!process.env.token) {
        process.env.token = ''
    }
    const files = fs.readdirSync("./commands").filter((f) => f.endsWith('ts'))
    for (const file of files) {
        const filename = file.substring(0, (file.length - 3))
        console.log(filename);


        const command: Command = require(`../commands/${filename}`)
        context.commands.set(command.data.name, command)
        context.commandArray.push(command.data.toJSON())


    }
    const rest = new REST({ version: "10" }).setToken(process.env.token)
    rest.put(Routes.applicationCommands('1063904562936819833'), {
        body: context.commandArray
    })


}