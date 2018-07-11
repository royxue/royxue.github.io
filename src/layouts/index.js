import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import ParticlesBg from '../components/particles'

import '../assets/css/index.css'
import '../assets/css/flex.css'
import '../assets/css/royxue.less'
import '../assets/css/animate.min.css'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header nav={data.site.siteMetadata.navigation} />
    <ParticlesBg />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        navigation {
          link
          name
          color
        }
      }
    }
  }
`
