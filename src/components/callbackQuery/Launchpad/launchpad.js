const dedent = require(`dedent`);
const { CallbackQuery } = require('../../../enum/CallbackQuery');

function launchpad(bot, chat) {
  const { id } = chat;

  bot.sendMessage(
    id,
    dedent`
      Hello world!
    `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'external link',
              web_app: {
                url: 'https://forty-shrimps-deny.loca.lt/',
              },
            },
          ],
          [
            {
              text: 'add an ad?',
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
  launchpad,
};
