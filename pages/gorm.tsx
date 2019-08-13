import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Fuse from "fuse.js";
import Link from "next/link";

const Gorm = (props: any) => {
  const [items, setItems] = useState(props.items);

  let options: object = {
    keys: [
      {
        name: "title",
        weight: 0.2
      },
      {
        name: "subtitle",
        weight: 0.3
      },
      {
        name: "subsubtitle",
        weight: 0.3
      },
      {
        name: "raw",
        weight: 0.2
      }
    ]
  };

  let fuse = new Fuse(props.items, options);

  let handleInputChange = (name: string): void => {
    let items = name && name.trim() ? fuse.search(name) : [...props.items];
    return setItems(items);
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
  };

  return (
    <Layout>
      <h1>
        <img className="icon-image" src="./static/logo.png" alt="logo icon" />
        <span className="ml-4">Go lang Cheat Sheet</span>
      </h1>
      <p>Simple and easy way to navigate through the cheatsheet</p>
      <p>
        <a className="color-link" href="">
          Golang
        </a>{" "}
        |{" "}
        <Link href="/post">
          <a className="color-link">Gorm</a>
        </Link>
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            autoFocus
            type="text"
            className="input is-info"
            placeholder="Type here..."
            onChange={e => handleInputChange(e.target.value)}
          />
          <br />
          <br />
        </fieldset>
      </form>
      <div className="columns is-multiline">
        {items.map((item, key) => (
          <div className="column is-12" key={key}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

Gorm.getInitialProps = (): Object => {
  const items = require("../static/Golang.json");
  return { items };
};

export default Gorm;
