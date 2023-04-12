import { Client, GatewayIntentBits ,  Collection } from 'discord.js'
import fs from 'fs'
import { config } from 'dotenv'
import { Command, Context } from './types/botTypes'
config()
const { token } = process.env
const client = new Client({ intents: GatewayIntentBits.Guilds })
// const context:Context = {
// commands:  new Collection<String, Command>(),
// commandArray: []
// }
// const handleFiles = fs.readdirSync('./handlers').filter(f => f.endsWith('.ts'))

// for(const file of handleFiles){
    
  
//    let handleFiles =  require(`./handlers/${file}`)
//    handleFiles.default(client , context)

   
// }
client.handleCommands = () => {
console.log("Test")
}


client.login(token)