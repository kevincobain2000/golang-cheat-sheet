import React from "react";

const MarkdownContent = props => {
  console.log(props.item);
  return <p>{props.item.raw}</p>;
};

export default MarkdownContent;
