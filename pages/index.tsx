import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Fuse from "fuse.js";
import FuseOptions from "../variables/fuse";
import { connect } from "react-redux";
import { useRouter } from 'next/router'
import { updateRouterUrl } from '../lib/window';

import {
  searchMarkdownJson,
  getMarkdownJson
} from "../store/actions/markdownActions";

const Index = (props: any) => {
  const router = useRouter()
  const [items] = useState(props.items);
  let [keyword, setKeyword] = useState(router.query.keyword );

  let fuse = new Fuse(items, FuseOptions);

  useEffect(() => {
    props.searchMarkdownJson(fuse, items, keyword)
    // updateRouterUrl({keyword: keyword})
  }, [keyword])

  return (
    <Layout>
      <input
        autoFocus
        type="text"
        defaultValue={keyword}
        className="input is-info"
        placeholder="Type here..."
        onChange={(event): any => setKeyword(event.target.value)}
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

Index.getInitialProps = async (ctx: any) => {
  const { items } = await ctx.store.dispatch(getMarkdownJson("Golang"));
  return { items };
};

const mapDispatchToProps = { searchMarkdownJson };

const mapStateToProps = (state: any) => ({
  items: state.markdownReducer.items
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
