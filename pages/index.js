import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Fuse from "fuse.js";

const Index = props => {
  const [items, setItems] = useState(props.items);

  let options = {
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
  let filterItems = name => {
    let items = name && name.trim() ? fuse.search(name) : [...props.items];
    setItems(items);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Layout>
      <h1>
        <img className="icon-image" src="./static/logo.png" alt="logo icon" />
        <span className="ml-4">Go lang Cheat Sheet</span>
      </h1>
      <p>Simple and easy way to navigate through the cheatsheet</p>
      <br />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            autoFocus
            type="text"
            className="input is-info"
            placeholder="Type here..."
            onChange={e => filterItems(e.target.value)}
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

Index.getInitialProps = () => {
  const items = require("../static/Syntax.json");
  return { items };
};

export default Index;
