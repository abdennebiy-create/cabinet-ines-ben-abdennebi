import { handler } from './api/ai-assistant.js';
async function test() {
  const event = {
    httpMethod: "POST",
    body: JSON.stringify({ message: "bonjour", history: [] })
  };
  console.log(await handler(event, {}));
}
test();
