const express = require("express");

const app = express();

//  rouotes
app.get("/", (req, res) => {
  res.send("Hello Api");
});

app.listen(3000, () => {
  console.log("server runing on port 3000..");
});
