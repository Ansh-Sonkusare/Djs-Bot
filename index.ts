import { Client, GatewayIntentBits ,  Collection } from 'discord.js'
import fs from 'fs'
import { config } from 'dotenv'
import { Command, Context } from './types/botTypes'
config()
const { token } = process.env
const client = new Client({ intents: GatewayIntentBits.Guilds })

client.handleCommands = () => {
console.log("Test")
}


client.login(token)
