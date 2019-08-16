import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Fuse from "fuse.js";
import FuseOptions from "../variables/fuse";

const Gorm = (props: any) => {
  const [items, setItems] = useState(props.items);

  let fuse = new Fuse(props.items, FuseOptions);

  let handleInputChange = (name: string): void => {
    let items = name && name.trim() ? fuse.search(name) : [...props.items];
    return setItems(items);
  };

  return (
    <Layout>
      <input
        autoFocus
        type="text"
        className="input is-info"
        placeholder="Type here..."
        onChange={e => handleInputChange(e.target.value)}
      />
      <br />
      <br />
      <div className="columns is-multiline">
        {items.map((item: any, key: React.ReactText) => (
          <div className="column is-12" key={key}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

Gorm.getInitialProps = (): Object => {
  const items = require("../Cheatsheets/json/Gorm.md.json");
  return { items };
};

export default Gorm;
