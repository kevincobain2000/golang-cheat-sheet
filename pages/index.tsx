import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Fuse from "fuse.js";
import FuseOptions from "../variables/fuse";
import { connect } from "react-redux";
import { getMarkdownJson } from "../store/actions/markdownActions";

const Index = (props: any) => {
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

// Index.getInitialProps = async (): Promise<any> => {
//   const items = require("../Cheatsheets/json/Golang.md.json");
//   return { items };
// };
// export default Index;

Index.getInitialProps = async (ctx: any) => {
  const { items } = await ctx.store.dispatch(getMarkdownJson("Golang"));
  return { items };
};

const mapStateToProps = (state: any) => ({
  items: state.usersReducer.items
});
export default connect(mapStateToProps)(Index);
