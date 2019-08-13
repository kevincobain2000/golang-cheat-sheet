import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Fuse from "fuse.js";

const Index = props => {
  const [items, setItems] = useState(props.items);

  let options = {
    keys: [
      {
        title: "raw",
        weight: 0.7
      },
      {
        title: "contents",
        weight: 0.3
      }
    ]
  };
  console.log(props.items);

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
        List of Anything
      </h1>
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
        {Object.keys(items).map((title, key) => (
          <div className="column is-12" key={key}>
            <Card title={title} item={items[title]} />
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
