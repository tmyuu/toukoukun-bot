const token = require("./token.json");
const { Client, Intents, MessageEmbed } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const tasks = {
  掃除セクション: [
    {
      emoji: "<:kanen:1141400655999811774>",
      task: "ゴミ出し（燃えるごみ）",
    },
  ],
};

function postWeeklyTask3() {
  console.log("Bot is starting to post burnable trash tasks...");

  client.once("ready", async () => {
    console.log("Bot is online!");

    const sections = Object.keys(tasks);
    while (sections.length > 0) {
      const currentSection = sections.shift();

      const embed = new MessageEmbed()
        .setTitle(currentSection)
        .setColor("#0099ff")
        .setDescription(
          tasks[currentSection]
            .map((item) => `${item.emoji} ${item.task}`)
            .join("\n")
        );

      const taskMessage = await client.channels.cache
        .get(token.DISCORD_CH_ID)
        .send({ embeds: [embed] });

      const allTasks = tasks[currentSection];
      while (allTasks.length > 0) {
        const currentTask = allTasks.shift();
        await taskMessage.react(currentTask.emoji);
      }
    }

    client.destroy();
  });

  client.login(token.DISCORD_BOT_TOKEN);
}

module.exports = postWeeklyTask3;
