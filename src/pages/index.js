import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BingoGrid from "../components/bingo-grid/BingoGrid";
import { BingoProvider, BingoConsumer } from "../bingo-context";
import styles from "./index.module.css";

const IndexPage = () => {
  useEffect(() => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    function guid() {
      return (
        s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4()
      );
    }

    (function() {
      var GIF =
        "https://ssl.google-analytics.com/collect?v=1&t=event" +
        "&ec=print&tid=UA-139725829-2&cid=" +
        guid() +
        "&z=" +
        Math.round(new Date().getTime() / 1000).toString() +
        "&ea=" +
        encodeURIComponent(document.title) +
        "&el=" +
        encodeURIComponent(document.location.pathname);

      var rule = "body:after{content:url(" + GIF + ")}";
      var head = document.head || document.getElementsByTagName("head")[0];
      var css = document.createElement("style");

      if (css && head) {
        css.setAttribute("type", "text/css");
        css.setAttribute("media", "print");
        if (css.styleSheet) {
          // For IE
          css.styleSheet.cssText = rule;
        } else {
          css.appendChild(document.createTextNode(rule));
        }
        head.appendChild(css);
        /* Written by Amit Agarwal - labnol.org */
      }
    })();
  });

  return (
    <Layout>
      <SEO
        title="Euroviisubingo"
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
};

export default IndexPage;
