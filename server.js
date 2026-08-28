import express from 'express';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

async function runNetlifyFunction(handlerPath, req, res) {
  try {
    const fullPath = resolve(__dirname, handlerPath);
    // dynamically import the ES module
    const module = await import(pathToFileURL(fullPath).href);
    const handler = module.handler;
    
    const event = {
      httpMethod: req.method,
      body: JSON.stringify(req.body),
      headers: req.headers
    };
    const context = {};
    const result = await handler(event, context);
    
    if (result.headers) {
      for (const [key, value] of Object.entries(result.headers)) {
        res.setHeader(key, value);
      }
    }
    res.status(result.statusCode).send(result.body);
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

app.post('/api/ai-diagnostic-engine', (req, res) => {
  runNetlifyFunction('./api/ai-diagnostic-engine.js', req, res);
});

app.post('/api/ai-assistant', (req, res) => {
  runNetlifyFunction('./api/ai-assistant.js', req, res);
});

app.post('/api/ai-summarize', (req, res) => {
  runNetlifyFunction('./api/ai-summarize.js', req, res);
});

app.post('/api/send-telegram', (req, res) => {
  runNetlifyFunction('./api/send-telegram.js', req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
