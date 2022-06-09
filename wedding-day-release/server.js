const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.static(`${__dirname}/src`));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
