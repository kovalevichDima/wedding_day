const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/src`));

const port = 85;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
