const TelegramBot = require("node-telegram-bot-api");
const dotenv = require(`dotenv`);
const dedent = require(`dedent`);
const { CallbackQuery } = require("./src/enum/CallbackQuery");
const { index } = require("./src/components/Start");
const {
  launchpad,
} = require("./src/components/callbackQuery/Launchpad/launchpad");

dotenv.config();

const token =
  process.env.ENV === "DEV"
    ? process.env.TELEGRAM_TOKEN_DEV
    : process.env.TELEGRAM_TOKEN_PROD;

const bot = new TelegramBot(token, {
  polling: true,
});

bot.on("message", (query) => {
  console.log("Message received: %o", query);

  const {
    text,
    chat: { id, first_name },
  } = query;

  if (text.startsWith("/start")) {
    index(bot, query.chat);
    return;
  }
});

// bot.on('callback_query', (query) => {
//   if (!query.message) return;
//   console.log('Query received: %o', query);

//   const {
//     message: { chat },
//     data,
//   } = query;

//   if (data.startsWith(CallbackQuery.LAUNCHPAD)) {
//     launchpad(bot, chat);
//     return;
//   }
// });

bot.on("polling_error", (error) => {
  console.log(error.code);
});
bot.on("error", (error) => {
  console.log(error.code);
});
