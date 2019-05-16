import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BingoGrid from "../components/bingo-grid/BingoGrid";
import { BingoProvider, BingoConsumer } from "../bingo-context";
import styles from "./index.module.css";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Euroviisubingo 2019"
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
            </footer>
          </React.Fragment>
        )}
      </BingoConsumer>
    </BingoProvider>
  </Layout>
);

export default IndexPage;
