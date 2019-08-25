import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import ParticlesBg from '../components/particles'

import '../assets/css/flex.css'
import '../assets/css/royxue.less'
import '../assets/css/animate.min.css'

import favicon from '../assets/imgs/icon.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
      link={[
          { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon}` },
          { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon}` },
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
      ]}
    />
    <Header nav={data.site.siteMetadata.navigation} />
    {/* <ParticlesBg /> */}
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
