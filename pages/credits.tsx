import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Fuse from "fuse.js";
import FuseOptions from "../variables/fuse";
import { connect } from "react-redux";

import {
  searchMarkdownJson,
  getMarkdownJson
} from "../store/actions/markdownActions";

const Credits = (props: any) => {
  const [items] = useState(props.items);

  let fuse = new Fuse(items, FuseOptions);

  let handleInputChange = (name: string): void => {
    props.searchMarkdownJson(fuse, items, name);
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
        {props.items.map((item: any, key: React.ReactText) => (
          <div className="column is-12" key={key}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

Credits.getInitialProps = async (ctx: any) => {
  const { items } = await ctx.store.dispatch(getMarkdownJson("Credits"));
  return { items };
};

const mapDispatchToProps = { searchMarkdownJson };

const mapStateToProps = (state: any) => ({
  items: state.markdownReducer.items
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Credits);
