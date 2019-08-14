import React from "react";
import Link from "next/link";

import "../css/styles.scss";
import "../css/styles.css";

const Layout = (props: any): JSX.Element => {
  console.log(process.env.NODE_ENV);
  return (
    <div className="container is-widescreen is-mobile">
      <h1>
        <img className="icon-image" src="./static/logo.png" alt="logo icon" />
        <span className="ml-4">Go lang Cheat Sheet</span>
      </h1>
      <p>Simple and easy way to navigate through the cheatsheet</p>
      <p className="mb-10 nav-links">
        <Link prefetch as="./" href="/golang-cheat-sheet/">
          Golang
        </Link>{" "}
        |{" "}
        <Link prefetch as="./gorm" href="/golang-cheat-sheet/gorm">
          Gorm
        </Link>{" "}
        |{" "}
        <Link prefetch as="./credits" href="/golang-cheat-sheet/credits">
          Credits
        </Link>
      </p>
      <section>{props.children}</section>
    </div>
  );
};

export default Layout;
