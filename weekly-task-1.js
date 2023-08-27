const token = require("./token.json");
const { Client, Intents, MessageEmbed } = require("discord.js");
const cron = require("node-cron");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const tasks = {
  掃除セクション: [
    {
      emoji: "<:toire:1141400048077373531>",
      task: "トイレ清掃",
    },
  ],
};

async function postWeeklyTask1() {
  console.log("Bot is starting to post weekly tasks...");

  // クライアントが準備完了しているか確認します
  if (!client.readyAt) {
    console.log("Client is not ready yet, waiting...");
    await new Promise((resolve) => client.once("ready", resolve));
  }

  const sections = Object.keys(tasks);
  for (const currentSection of sections) {
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

    for (const currentTask of tasks[currentSection]) {
      await taskMessage.react(currentTask.emoji);
    }
  }
}

client.login(token.DISCORD_BOT_TOKEN);

module.exports = postWeeklyTask1;
