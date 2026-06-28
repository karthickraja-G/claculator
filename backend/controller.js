function handleCalculation(req, res) {
  let body = "";
  //chunk gets the json input and add it to the body sting
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      //data will seperate the body like num1    num2   opee
      const data = JSON.parse(body);
      const a = Number(data.num1);
      const b = Number(data.num2);
      const ope = data.operation;

      let result = 0;

      switch (ope) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          if (b === 0) {
            res.writeHead(404, { "Content-type": "text/Plain" });
            res.end("Divison by zero not possible");
            return;
          } else {
            result = a / b;
            break;
          }
        default:
          res.writeHead(404, { "Content-type": "text/Plain" });
          res.end("enter vaild operator");
          return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      //returns as the json file
      res.end(JSON.stringify({ success: true, result: result }));
    } catch (error) {
      res.writeHead(404, { "Content-type": "text/Plain" });
      res.end(`not the natural structure of json  ${error}`);
    }
  });
}

module.exports = { handleCalculation };
