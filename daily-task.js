const token = require("./token.json");
const { Client, Intents, MessageEmbed } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const tasks = {
  掃除セクション: [
    { emoji: "<:soujiki:1141391975149469806>", task: "掃除機がけ" },
    {
      emoji: "<:sankaku:1141392636536701099>",
      task: "台所清掃",
    },
    {
      emoji: "<:tearai:1141395269213237298>",
      task: "洗面台清掃",
    },
    {
      emoji: "<:kansouki:1141395787381739617>",
      task: "フィルター清掃",
    },
    { emoji: "<:furo:1141397221930188841>", task: "風呂清掃" },
  ],
  家事セクション: [
    { emoji: "<:kome:1141399150097875015>", task: "炊飯" },
    {
      emoji: "<:sentaku:1141398417080324116>",
      task: "洗濯",
    },
  ],
};

async function postDailyTask() {
  console.log("Bot is starting to post daily tasks...");

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

module.exports = postDailyTask;
