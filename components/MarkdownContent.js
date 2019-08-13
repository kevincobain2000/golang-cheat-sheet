import React from "react";

const ReactMarkdown = require("react-markdown");

const MarkdownContent = props => {
  return (
    <div>
      {Object.keys(props.item).map((subitem, key) => {
        let subItemTitle;
        if (subitem != "raw") {
          subItemTitle = (
            <p>
              <b>{subitem}</b>
              <br />
            </p>
          );
        }
        return (
          <div key={key}>
            {subItemTitle}
            <ReactMarkdown
              source={props.item[subitem].raw}
              escapeHtml={false}
            />
          </div>
        );
      })}
      <ReactMarkdown source={props.item.raw} escapeHtml={false} />
    </div>
  );
};

export default MarkdownContent;
