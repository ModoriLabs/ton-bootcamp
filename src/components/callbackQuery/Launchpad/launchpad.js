const dedent = require(`dedent`);
const { CallbackQuery } = require('../../../enum/CallbackQuery');

function launchpad(bot, chat) {
  const { id } = chat;

  bot.sendMessage(
    id,
    dedent`
      Hello world!
    `
  );
}

module.exports = {
  launchpad,
};
