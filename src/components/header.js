import PropTypes from 'prop-types'
import React from 'react'


const Header = ({ siteTitle }) => (
  <header className="navbar custom container">

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
