const handler = require('./api/ai-diagnostic-engine.js').handler;
handler({httpMethod: 'POST', body: JSON.stringify({target: 'moi', conditions: ['fatigue_step1']})}, {}).then(console.log).catch(console.error);
