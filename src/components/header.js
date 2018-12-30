import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from '../styles/header.module.scss'

const Header = ({ siteTitle }) => (
  <header className="navbar custom">
    <section className="navbar-section">
      <nav className="navbar-nav">
        <Link to="/" exact={true} activeClassName="active">Home</Link>
        <Link to="/page-2/" exact={true} activeClassName="active">Work</Link>
        <Link to="/about/" exact={true} activeClassName="active">About</Link>
        <Link to="/contact/" exact={true} activeClassName="active">Contact</Link>
      </nav>
    </section>

    <section className="navbar-center">
      <h5 className={styles.initials}>RD</h5>
    </section>

    <section className="navbar-section">
      <nav>
test
      </nav>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
