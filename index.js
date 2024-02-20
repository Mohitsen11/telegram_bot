const { Telegraf } = require('telegraf');
const {linearSearch, BinarySearch} = require('./searchingAlgo');
const axios = require('axios');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);


try {
    bot.start((ctx) => ctx.reply('Welcome to the Mohi World!\nAsk me about Searching algos'));

    bot.command('linearsearch', (ctx) => ctx.reply(linearSearch));
    bot.command('binarysearch', (ctx) => ctx.reply(BinarySearch));
    bot.command('arraydemo', async (ctx) => {
        const response = await axios.get('https://raw.githubusercontent.com/Mohitsen11/JS_From_Scratch/main/arrayDemo.js');
        ctx.reply(response.data); 
    })

    bot.on('sticker', (ctx) => ctx.reply('❤️'));
    bot.on('message', (ctx) => {
        if(ctx.update.message.text === 'I love algos'){
            ctx.reply('I love you man!!');
        } else {
            ctx.reply("I don't understand human language\n\nAsk me about algos.");
        }
    });


    bot.launch();
} catch (error) {
    console.log(error);
}

