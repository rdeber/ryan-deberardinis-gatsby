import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
//import TransitionLink from 'gatsby-plugin-transition-link'
import Background from './background'
import Header from './header'
import Navbar from './navbar'
import ScrollUp from './scrollUp'
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
        <Background />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navbar />

        <div className="container wrap">
          {children}
        </div>

        <ScrollUp />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
