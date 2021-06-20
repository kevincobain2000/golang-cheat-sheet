import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

//https://gist.github.com/ibrahima/d21950a95aee3212e991a8404e238093
export default function CodeBlock({ language, value }) {
  if (!language) language = "javascript";
  return <SyntaxHighlighter style={atomOneDark} language={language}>{value}</SyntaxHighlighter>;
}
