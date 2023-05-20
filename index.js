const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");

// dotenv configuration
const dotenv = require("dotenv");
dotenv.config();

const { TOKEN } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// import commands
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `O Comando ${command.data.name} não possue "data" ou "execute".`,
    );
  }
}

client.once(Events.ClientReady, (c) => {
  console.log(`Carregado! ${c.user.tag} já está on-line!`);
});

client.login(TOKEN);
