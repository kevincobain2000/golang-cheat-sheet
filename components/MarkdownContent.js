import React from "react";

const ReactMarkdown = require("react-markdown");

const MarkdownContent = props => {
  return (
    <div>
      <ReactMarkdown source={props.raw} escapeHtml={false} />
    </div>
  );
};

export default MarkdownContent;
