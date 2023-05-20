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
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `O Comando ${command.data.name} não possue "data" ou "execute".`,
      );
    }
  }
}

client.once(Events.ClientReady, (c) => {
  console.log(`Carregado! ${c.user.tag} já está on-line!`);
});

client.login(TOKEN);

// on interactions with the bot
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`Comando ${interaction.commandName} não foi encontrado!.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);

    const message = `Ops! Erro ao executar o comando ${interaction.commandName}`;

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: message, ephemeral: true });
    } else {
      await interaction.reply({ content: message, ephemeral: true });
    }
  }
});
