import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BingoGrid from "../components/bingo-grid/BingoGrid";
import { BingoProvider, BingoConsumer } from "../bingo-context";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);

const IndexPage = () => (
  <Layout>
    <SEO
      keywords={[
        `euroviisut`,
        `tel aviv`,
        `2019`,
        `eurovision song contest`,
        `esc`,
        `euroviisaat`,
        `bingo`,
      ]}
    />
    <BingoProvider>
      <BingoConsumer>
        {context => (
          <React.Fragment>
            <header className={styles.header}>
              <h1>Euroviisubingo</h1>
              <h2>Tel Aviv 2019</h2>
            </header>
            <BingoGrid />
            <footer className={styles.footer}>
              <a href="https://euroviisubingo.fi">euroviisubingo.fi</a>
              <div className={cx(styles.madeBy, "hidden-print")}>
                made by <a href="https://mursu.dev">mursu.dev</a>
              </div>
            </footer>
          </React.Fragment>
        )}
      </BingoConsumer>
    </BingoProvider>
  </Layout>
);

export default IndexPage;
