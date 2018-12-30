import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from '../styles/header.module.scss'
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <header className="navbar custom container">
    <section className="navbar-section">
      <nav className="navbar-nav">
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/page-2/" activeClassName="active">Work</Link>
      </nav>
    </section>

    <section className="navbar-center">
      <h5 className={styles.initials}>RD</h5>
    </section>

    <section className="navbar-section">
      <nav className="navbar-links">
        <a href="/" className="tooltip tooltip-bottom" data-tooltip="See how this site was made"><FaGithub /></a>
        <a href="/" className="tooltip tooltip-bottom" data-tooltip="Follow me on Instagram"><FaInstagram /></a>
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
