const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => {
  console.log("JSDOM Error:", err.message, err.stack);
});
virtualConsole.on("jsdomError", (err) => {
  console.log("JSDOM Exception:", err.message, err.stack);
});

const dom = new JSDOM(html, { 
  runScripts: "dangerously", 
  virtualConsole,
  url: "http://localhost/",
  resources: "usable"
});

setTimeout(() => {
   console.log("JSDOM test complete. If no errors above, it parsed OK.");
}, 3000);
