import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add honeypot field
old_form_top = r'''<form name="rendez-vous" method="POST" data-netlify="true" netlify-honeypot="bot-field" onsubmit="handleFormSubmit(event)">
        <input type="hidden" name="form-name" value="rendez-vous" />
        
        <!-- Accessibility Fix for Spam Trap -->
        <p class="visually-hidden-honeypot" aria-hidden="true" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; display: none !important;">
          <label>Ne pas remplir si vous êtes humain : <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
        </p>'''

new_form_top = r'''<form name="rendez-vous" method="POST" data-netlify="true" netlify-honeypot="bot-field" onsubmit="handleFormSubmit(event)">
        <input type="hidden" name="form-name" value="rendez-vous" />
        
        <!-- Accessibility Fix for Spam Trap & Custom Honeypot -->
        <p class="visually-hidden-honeypot" aria-hidden="true" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; display: none !important;">
          <label>Ne pas remplir si vous êtes humain : <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
          <input type="text" name="website_url" id="honeypot" tabindex="-1" autocomplete="off">
        </p>'''

content = content.replace(old_form_top, new_form_top)

# 2. Add honeypot variable to handleFormSubmit fetch
old_fetch = r'''        const response = await fetch('/api/send-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: fallbackMsg })
        });'''

new_fetch = r'''        const websiteUrl = form.elements['website_url'] ? form.elements['website_url'].value : '';
        const response = await fetch('/api/send-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: fallbackMsg, website_url: websiteUrl })
        });'''

content = content.replace(old_fetch, new_fetch)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
