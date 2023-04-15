import fs from "fs";
import { Context, Events } from "../types/botTypes";
import { Client, Interaction } from "discord.js";
import { context } from '../context'

export async function handleEvents(client: Client) {

    const files = fs.readdirSync("./Events").filter((f) => f.endsWith('ts'))
    for (const file of files) {
        const filename = file.substring(0, (file.length - 3))

        const event: Events = require(`../Events/${filename}`)
        if (event.once) {
            client.on(event.name, (...args) => event.execute(client, ...args))
        }
        else {
            client.once(event.name, (...args) => event.execute(client, ...args))

        }


    }


}