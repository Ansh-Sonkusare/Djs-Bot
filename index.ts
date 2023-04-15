import { Client, GatewayIntentBits, Collection } from 'discord.js'
import fs from 'fs'
import { config } from 'dotenv'
import { Command, Context } from './types/botTypes'
import { handleEvents } from "./handlers/handleEvents"
import { handleCommands } from './handlers/handleCommands'
import express from "express"
config()
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")

})
const { token } = process.env
const client = new Client({ intents: GatewayIntentBits.Guilds })



handleEvents(client)

handleCommands(client)


app.listen(8001, () => console.log("ready"))
client.login(token)

