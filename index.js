const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// take an input from params and return it
app.get("/:input", (req, res) => {
  const userInput = req.params.input;
  res.send(`Hello World ${userInput}`);
});

// only listen if not in test environment
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;