const Discord = require('discord.js');
const config = require(`./config.json`);
const db = require('quick.db')
const handler = require("./handlers/loadslash");

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES', 'GUILD_BANS'], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

console.log("index runing . . .")

client.snipes = new Discord.Collection();
client.commands = new Discord.Collection();
client.slash = new Discord.Collection();
client.events = new Discord.Collection();
global.userData = new db.table("userData");
global.serverCount = new db.table("FreeServerCount");
global.invinfo = new db.table("InviteInfo")
global.invitedBy = new db.table("InvitedByInfo")
global.domains = new db.table("ProxiedDomains")
global.codes = new db.table('Codes')
global.blacklist = new db.table('Blacklist')
global.dir = __dirname;
client.embedColor = "#0099ff"

global.error = "<:no:989996359002230847>"
global.success = "<a:yes:989996226764222464>"

require("./handlers/music")(client);
require(`./handlers/event_handler`)(client);
require(`./handlers/command_handler`)(client);
require(`./handlers/anti_crash`)(process);
handler.loadSlashCommands(client);

if(config.settings.consoleSave) require(`./logs/console.log`)()

client.login(config.bot.token);
