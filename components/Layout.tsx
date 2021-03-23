import React from "react";
import Link from "next/link";
import "../css/styles.scss";
import "../css/styles.css";

const Layout = (props: any): any => {
  return (
    <div className="container is-widescreen is-mobile">
      <h1>
        <img className="icon-image" src="./static/logo.png" alt="logo icon" />
        <b className="ml-4">Go lang Cheat Sheet</b>
      </h1>
      <p>Consolidated and Comprehensive guide to Go Lang.</p>
      <p className="mt-5 mb-10 nav-links">
        <Link as="./" href="/">
          <a title="Blog">Go Lang</a>
        </Link>{" "}
        |{" "}
        <Link as="./gorm" href="/gorm">
          <a title="Gorm">GORM</a>
        </Link>{" "}
        |{" "}
        <Link as="./credits" href="/credits">
          <a title="Credits">CREDITS</a>
        </Link>
      </p>
      <section>{props.children}</section>
    </div>
  );
};

export default Layout;
