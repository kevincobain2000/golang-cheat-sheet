#!/usr/bin/env node

var md2json = require("md-2-json");

let fs = require("fs");

let jsonObjOut = [];

let filenames = ["Cheatsheets/Credits.md", "Cheatsheets/Syntax.md"];

for (let filename of filenames) {
  let content = fs.readFileSync(process.cwd() + "/" + filename).toString();

  let contentItems = md2json.parse(content);

  for (let title in contentItems) {
    for (let subtitle in contentItems[title]) {
      for (let subsubtitle in contentItems[title][subtitle]) {
        if (subsubtitle == "raw") {
          let pushItem = {
            title: title,
            subtitle: subtitle
          };
          pushItem["subsubtitle"] = subtitle;
          pushItem["raw"] = contentItems[title][subtitle][subsubtitle];
          jsonObjOut.push(pushItem);
        } else {
          for (let raw in contentItems[title][subtitle][subsubtitle]) {
            let pushItem = {
              title: title,
              subtitle: subtitle
            };
            pushItem["subsubtitle"] = subsubtitle;
            pushItem["raw"] = contentItems[title][subtitle][subsubtitle][raw];
            jsonObjOut.push(pushItem);
          }
        }
      }
    }
  }
}

let json = JSON.stringify(jsonObjOut);

fs.writeFile("static/Syntax.json", json, err => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
