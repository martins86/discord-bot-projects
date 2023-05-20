const { REST, Routes } = require("discord.js");

// dotenv configuration
const dotenv = require("dotenv");
dotenv.config();

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// import commands
const fs = require("node:fs");
const path = require("node:path");
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

const commands = [];

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ("data" in command && "execute" in command) {
      commands.push(command.data.toJSON());
    } else {
      console.log(
        `O Comando ${command.data.name} não possue "data" ou "execute".`,
      );
    }
  }
}

const rest = new REST().setToken(TOKEN);

(async () => {
  try {
    console.log("Iniciando registro dos comandos (/).");

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });

    console.log(`${commands.length} Comandos registrados com sucesso!.`);
  } catch (error) {
    console.error(error);
  }
})();
