import React from "react";

import ReactMarkdown from "react-markdown";

const MarkdownContent = (props: any): JSX.Element => {
  return (
    <div>
      <ReactMarkdown source={props.raw} escapeHtml={false} />
    </div>
  );
};

export default MarkdownContent;
