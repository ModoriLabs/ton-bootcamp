const { CallbackQuery } = require('../../enum/CallbackQuery');
const dedent = require(`dedent`);

function index(bot, chat) {
  const { id, first_name } = chat;

  bot.sendMessage(
    id,
    dedent`
    👋 Greetings, *${first_name} !!!
    Show our function below:
    `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Launchpad',
              callback_data: CallbackQuery.LAUNCHPAD,
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
