import React from "react";

import "../css/styles.scss";
import "../css/styles.css";

const Layout = props => (
  <div className="container is-widescreen is-mobile">
    <section>{props.children}</section>
  </div>
);

export default Layout;
