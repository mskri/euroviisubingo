import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./404.module.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 &middot; Not found" />
    <main className={styles.notFound}>
      <div className={styles.fof}>
        <h1>Sivua ei löytynyt</h1>
        <p>
          <Link aria-label="Palaa etusivulle" to="/">
            Palaa etusivulle.
          </Link>
        </p>
      </div>
    </main>
  </Layout>
);

export default NotFoundPage;
