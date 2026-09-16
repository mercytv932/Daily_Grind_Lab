const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
}); //Someone requests home page? send them home Page.

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact.html"));
}); //Someone requests contact page? send them contact page.

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); //Turn the server on or run it.
