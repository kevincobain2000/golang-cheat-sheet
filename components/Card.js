import React from "react";

const Card = props => (
  <div className="card">
    <header className="card-header">
      <b className="card-header-title">{props.icon.name}</b>
      <a href="#" className="card-header-icon" aria-label="more options">
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true" />
        </span>
      </a>
    </header>
    <div className="card-content">
      <div className="content">
        {props.icon.contents.map((line, key) => (
          <ol key={key} type="1">
            <ul>{line}</ul>
          </ol>
        ))}
      </div>
    </div>
  </div>
);

export default Card;
