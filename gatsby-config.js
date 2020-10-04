module.exports = {
  siteMetadata: {
    title: `僕は一寸`,
    author: {
      name: `Misoni`,
      summary: `色々なことに中途半端に手を出す性格。趣味は読書や音楽・アニメ鑑賞など。このサイトには基本的に怪文書、たまに技術的なことを書く予定。`,
    },
    description: `俺は空洞　でかい空洞`,
    siteUrl: `https://misoni.me`,
    social: {
      twitter: `MISONLN41`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 560,
              linkImagesToOriginal: true,
              loading: 'auto',
              wrapperStyle: 'margin-top: 20px; margin-bottom: 20px;',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
              resolve: `gatsby-remark-prismjs`,
              options: {
                  showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer external"
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
  ],
}
