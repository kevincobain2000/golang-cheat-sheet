import React from "react";

import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import PropTypes from "prop-types";

const MarkdownContent = (props: any): any => {
  return (
    <div>
      <ReactMarkdown
        source={props.raw}
        escapeHtml={false}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  );
};

MarkdownContent.propTypes = {
  raw: PropTypes.string.isRequired
};

export default MarkdownContent;
