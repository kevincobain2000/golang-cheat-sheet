import React from "react";
import MarkdownContent from "../components/MarkdownContent";

const Card = props => (
  <div className="card">
    <header className="card-header">
      <b className="card-header-title">{props.title}</b>
      <a href="#" className="card-header-icon" aria-label="more options">
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true" />
        </span>
      </a>
    </header>
    <div className="card-content">
      <div className="content">
        {Object.keys(props.item).map((item, key) => (
          <ol key={key} type="1">
            <ul>
              {item}
              <pre>Test</pre>
              <MarkdownContent item={props.item[item]} />
            </ul>
          </ol>
        ))}
      </div>
    </div>
  </div>
);

export default Card;
