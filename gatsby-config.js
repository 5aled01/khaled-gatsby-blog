module.exports = {
  siteMetadata: {
    title: `Khaled Ihitt Blog`,
    author: {
      name: `Khaled Ihitt`,
      summary: `Khaled cool blog`,
    },
    description: `Cool Blog`,
    siteUrl: `http://localhost:8000/`,
    social: {
      twitter: `KhaledEsc_`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
};
