import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const Credits = (props: any) => {
  const [items, setItems] = useState(props.items);

  return (
    <Layout>
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

Credits.getInitialProps = (): Object => {
  const items = require("../Cheatsheets/json/Credits.md.json");
  return { items };
};

export default Credits;
