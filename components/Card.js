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
        {Object.keys(props.item).map((subtitle, key) => (
          <ol key={key} type="1">
            <ul>
              <p>
                <b>{subtitle}</b>
              </p>
              <MarkdownContent item={props.item[subtitle]} />
            </ul>
          </ol>
        ))}
      </div>
    </div>
  </div>
);

export default Card;
