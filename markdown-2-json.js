#!/usr/bin/env node

var md2json = require("md-2-json");

let fs = require("fs");

// let filenames = ["Golang.md", "Gorm.md", "Credits.md"];
let filenames = [];
fs.readdirSync("./Cheatsheets/").forEach(file => {
  if (file.endsWith(".md")) {
    filenames.push(file);
  }
});

for (let filename of filenames) {
  let jsonObjOut = [];
  let content = fs
    .readFileSync(process.cwd() + "/Cheatsheets/" + filename)
    .toString();

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
  let json = JSON.stringify(jsonObjOut);

  fs.writeFile("Cheatsheets/json/" + filename + ".json", json, err => {
    if (err) console.log(err);
    console.log(
      "Successfully written ./Cheatsheets/" +
        filename +
        " to ./Cheatsheets/json/" +
        filename +
        ".json File."
    );
  });
}
