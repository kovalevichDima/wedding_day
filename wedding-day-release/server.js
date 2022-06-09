const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.static(`${__dirname}/src`));

app.use("/", proxy("http://localhost:81"));
//app.use("/", proxy("http://kzz.by:81"));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
