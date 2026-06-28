const http = require("http");
const calculator = require("./router");

const port = 3000;

const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  const url = req.url;

  if (url === "/calculate") {
    calculator(req, res);
  } else {
    res.write("no no no");
    res.end();
  }
});
// });
server.listen(port, () => {
  console.log(`server is running in the port ${port} `);
});
