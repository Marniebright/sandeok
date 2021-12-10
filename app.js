const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.TOKEN);

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Welcome to The Red Sleeve - SanDeok Brainrot', {
    })
})

bot.command('sandeok', ctx => {
    console.log(ctx.from)
    let animalMessage = `Whose picture would you like to see?`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "Yisan",
                        callback_data: 'yisan'
                    },
                    {
                        text: "Deokim",
                        callback_data: 'deokim'
                    }
                ],

            ]
        }
    })
})

bot.action('yisan', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/yisan.jpeg"
    })
})

bot.action('deokim', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/deokim.jpeg"
    })
})

bot.launch()
