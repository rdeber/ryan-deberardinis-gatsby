import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
//import TransitionLink from 'gatsby-plugin-transition-link'

import Background from './background'
import Header from './header'
import Box from './box'

import '../styles/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Box />
        <Background />
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="container wrap">
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
