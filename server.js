const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 8080;
const dataPath = './company-products.json';
var fs = require("fs");

app.use(cors());


app.get("/products", function(req, res) {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
  
      res.send(JSON.parse(data));
    });
  });

  app.use(express.static(path.join(__dirname, "/dist/MarketAssign")));
  // Anything that doesn't match the above, send back index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/MarketAssign/index.html"));
  });
app.listen(port, () => console.log(`listening at ${port}`));