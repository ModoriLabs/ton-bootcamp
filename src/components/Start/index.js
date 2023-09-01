const { CallbackQuery } = require("../../enum/CallbackQuery");
const dedent = require(`dedent`);

const baseLink =
  process.env.ENV === "DEV"
    ? process.env.LOCAL_TUNNEL_URL
    : "https://telegram-web-app-interface.vercel.app";

function index(bot, chat) {
  const { id, first_name } = chat;

  bot.sendMessage(
    id,
    dedent`
    👋 Greetings, ${first_name}!!!

    Click the button below to connect to TWA!
    `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Main page",
              web_app: {
                url: baseLink,
              },
            },
          ],
          [
            {
              text: "view ad!",
              web_app: {
                url: baseLink + "/view_ad/0",
              },
            },
            {
              text: "upload ad",
              web_app: {
                url: baseLink + "/insert_ad",
              },
            },
          ],
        ],
      },
    }
  );
}

module.exports = {
  index,
};
