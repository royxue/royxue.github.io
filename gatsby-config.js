module.exports = {
  siteMetadata: {
    title: 'Roy Xue',
    description: 'Roy Xue personal website',
    keywords: 'Roy Xue, Lijun Xue',
    navigation: [
      {link: '/', name: 'Index', color: '#f44336'},
      {link: '/blog', name: 'Blog', color: '#03A9F4'},
      {link: '/about', name: 'About', color: '#AB47BC'}
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-transformer-orga',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    }
  ]
};
