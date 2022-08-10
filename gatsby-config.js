module.exports = {
  siteMetadata: {
    title: `Nice to meet you`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image', 
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      }
    }
],
};
