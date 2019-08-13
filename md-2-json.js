#!/usr/bin/env node

var md2json = require("md-2-json");

let fs = require("fs");

let filename = "Cheatsheets/Syntax.md";

let content = fs.readFileSync(process.cwd() + "/" + filename).toString();

let out = md2json.parse(content);
let json = JSON.stringify(out);

fs.writeFile("static/Syntax.json", json, err => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
