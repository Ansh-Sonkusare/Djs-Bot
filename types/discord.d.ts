import { Client } from 'discord.js';

declare module 'discord.js' {
  export interface Client {
    handleCommands(): Promise<void> | void;
  }
}
