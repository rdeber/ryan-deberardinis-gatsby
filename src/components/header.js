//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../styles/header.module.scss'
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <header className="navbar custom container">
    <section className="navbar-section">
      <nav className="navbar-nav">
        <AniLink to="/" activeClassName="active" cover bg="#663399" duration={1}>Home</AniLink>
        <AniLink to="/about/" activeClassName="active" paintDrip duration={1}>About</AniLink>
      </nav>
    </section>

    <section className="navbar-center">
      <h5 className={styles.initials}>RD</h5>
    </section>

    <section className="navbar-section">
      <nav className="navbar-links">
        <a href="/" className="tooltip tooltip-bottom" data-tooltip="View Source"><FaGithub /></a>
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
