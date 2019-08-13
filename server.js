const express = require("express");
const next = require("next");
var morgan = require("morgan");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, quiet: false });

const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(morgan("tiny"));
    server.use((req, res) => {
      req.url = req.url.replace("/golang-cheat-sheet", "");
      handle(req, res);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
