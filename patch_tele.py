import re

with open('api/send-telegram.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add logging
old_bot = r'''    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {'''

new_bot = r'''    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    console.log("--- TELEGRAM API CALL ---");
    console.log("Bot Token exists?", !!botToken);
    console.log("Chat ID exists?", !!chatId);
    
    if (!botToken || !chatId) {'''
content = content.replace(old_bot, new_bot)

with open('api/send-telegram.js', 'w', encoding='utf-8') as f:
    f.write(content)
