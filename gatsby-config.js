module.exports = {
  siteMetadata: {
    title: `Euroviisubingo 2019`,
    titleTemplate: "%s",
    description: `Luo itsellesi viisubingo vuoden 2019 euroviisuihin`,
    author: `@sakarimursu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          // require("postcss-custom-media")({
          //   importFrom: "src/assets/css/variables.css",
          // }),
          require("postcss-nested"),
          require("postcss-hexrgba"),
          require("autoprefixer"),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139725829-2",
        head: false,
      },
    },
  ],
};
