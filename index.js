const express = require("express");
const morgan = require("morgan");

const app = express();

const requestLogger = (req, res, next) => {
  console.log("pass");
  next();
};

app.use(morgan("combined"));

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Aman verma");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
