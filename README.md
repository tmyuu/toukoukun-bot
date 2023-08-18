## About
The `toukoukun-bot` is designed for Discord, aiming to automate the posting of tasks at scheduled intervals. The core functionality centers around three primary schedules: daily, weekly, and monthly. All bots are set to run automatically at precise times using the node-cron package. After completing their tasks, the bots shut down, optimizing resource consumption.

## How to Use
Before running the bot, you'll need to set up your Discord token.
### Step 0: Install discord.js and node-cron
Install the recommended version 13 of discord.js and latest version of node-cron to your local repository.
```
npm install discord.js@v13-lts
npm install node-cron
```
### Step 1: Create the Configuration File
Create a new file named `token.json` in the root directory of your project.
### Step 2: Add the Token
You can easily get the channel ID by setting dev mode in Discord app.
Copy and paste the following content into `token.json`:
```json
{
  "DISCORD_BOT_TOKEN": "YOUR_DISCORD_BOT_TOKEN",
  "DISCORD_CH_ID": "YOUR_DISCORD_CH_ID"
}
```
⚠️ Warning: Never commit your token.json with your actual token to any public repositories. It's crucial to keep your Discord bot token confidential.
### Step 3: Run the Bot
Once you have set up your token in the token.json file, you can run your bot using the following command:
```
node kanri-kun.js
```
