module.exports = {
  siteMetadata: {
    title: `Element 6`,
    description: `Element 6 is a forward thinking, user centered digital agency with strong roots in traditional media and publishing.`,
    author: `@ryan.moreau`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-118368516-1`,
      },
    },
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },      
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `react-scrollspy`,
    `gatsby-plugin-sharp`,
    `react-bootstrap`,
    `framer-motion`,
    `react-intersection-observer`,
    `react-countup`,
    `react-cookie-consent`,
    `gatsby-plugin-react-helmet`,
    `react-google-maps`,
    `react-svg-drawing`,
    `pure-react-carousel`,
    `animejs`,
    `smooth-scroll`,
  ],
}
