const { CallbackQuery } = require('../../enum/CallbackQuery');
const dedent = require(`dedent`);

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
              text: 'Main page',
              web_app: {
                url: 'https://telegram-web-app-interface.vercel.app',
              },
            },
          ],
          [
            {
              text: 'view ad!',
              web_app: {
                url: 'https://telegram-web-app-interface.vercel.app/view_ad/0',
              },
            },
            {
              text: 'upload ad',
              web_app: {
                url: 'https://telegram-web-app-interface.vercel.app/insert_ad',
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
