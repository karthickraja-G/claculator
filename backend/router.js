const { handleCalculation } = require("./controller");

function calculateRouter(req, res) {
  if (req.method === "POST") {
    //controller
    handleCalculation(req, res);
  } 
  else {
    res.writeHead(405, { "Content-Type": "Text/plain" });
    res.end("method not found");
  }
}

module.exports = calculateRouter;
