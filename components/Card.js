import React from "react";
import MarkdownContent from "../components/MarkdownContent";

const Card = props => {
  return (
    <div className="card">
      <header className="card-header">
        <span className="card-header-title">
          <b>{props.item.subtitle}</b>
          <span className="ml-2 mono">({props.item.title})</span>
        </span>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          {(() => {
            if (props.item.subtitle != props.item.subsubtitle) {
              <h3>{props.item.subsubtitle}</h3>;
            }
          })()}
          <MarkdownContent raw={props.item.raw} />
        </div>
      </div>
    </div>
  );
};

export default Card;
