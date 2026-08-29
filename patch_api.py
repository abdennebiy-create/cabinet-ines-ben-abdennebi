import re

with open('api/send-telegram.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_body = r'''    const { message } = body;
    
    if (!message) {'''

new_body = r'''    const { message, website_url } = body;
    
    if (website_url) {
      console.warn("Honeypot triggered, ignoring request.");
      return { statusCode: 200, body: JSON.stringify({ success: true }) }; // Pretend it worked
    }

    if (!message) {'''

content = content.replace(old_body, new_body)

with open('api/send-telegram.js', 'w', encoding='utf-8') as f:
    f.write(content)
