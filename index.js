const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '7037516293:AAH5FcJ1FRVL1JWn0nfhlBrpM7UDO6XwW6A';
const webAppUrl = 'https://airdrop-rose-iota.vercel.app/';

const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'Welcome to AirDropBPM!', {
            reply_markup: {
               inline_keyboard: [
                    [{text: 'Tap', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }

  
})

