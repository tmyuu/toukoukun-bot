const cron = require("node-cron");
const postDailyTask = require("./daily-task.js");
const postMonthlyTask = require("./monthly-task.js");
const postWeeklyTask1 = require("./weekly-task-1.js");
const postWeeklyTask2 = require("./weekly-task-2.js");
const postWeeklyTask3 = require("./weekly-task-3.js");

console.log("Bot is online!");
cron.schedule("* * * * *", postDailyTask);
cron.schedule("0 0 0 1 * *", postMonthlyTask);
cron.schedule("0 0 0 * * 1", postWeeklyTask1);
cron.schedule("0 0 0 * * 1", postWeeklyTask2);
cron.schedule("0 0 0 * * 1,5", postWeeklyTask3);
