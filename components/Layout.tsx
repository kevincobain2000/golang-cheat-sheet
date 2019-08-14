import React from "react";
import Link from "next/link";

import "../css/styles.scss";
import "../css/styles.css";

const Layout = (props: any): JSX.Element => (
  <div className="container is-widescreen is-mobile">
    <h1>
      <img className="icon-image" src="./static/logo.png" alt="logo icon" />
      <span className="ml-4">Go lang Cheat Sheet</span>
    </h1>
    <p>Simple and easy way to navigate through the cheatsheet</p>
    <p>
      <Link href="/">
        <a className="color-link">Golang</a>
      </Link>{" "}
      |{" "}
      <Link href="/gorm">
        <a className="color-link">Gorm</a>
      </Link>
    </p>
    <section>{props.children}</section>
  </div>
);

export default Layout;
