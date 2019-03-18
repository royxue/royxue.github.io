module.exports = {
  siteMetadata: {
    title: 'Roy Xue',
    description: 'Roy Xue personal website',
    keywords: 'Roy Xue, Lijun Xue',
    navigation: [
      {link: '/', name: 'index', color: '#f44336'},
      {link: '/blog', name: 'blog', color: '#03A9F4'},
      {link: '/vlog', name: 'vlog', color: '#ff7034'},
      {link: '/about', name: 'about', color: '#AB47BC'}
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
