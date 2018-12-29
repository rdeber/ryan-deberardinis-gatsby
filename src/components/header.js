import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <section className="navbar-section">
      <nav>
        <Link
          to="/"
          activeStyle={{
            color: "red",
          }}
        >
          Home
        </Link>
        <Link
          to="/page-2/"
          activeStyle={{
            color: "red",
          }}
        >
          Work
        </Link>
        <Link
          to="/"
          activeStyle={{
            color: "red",
          }}
        >
          About
        </Link>
        <Link
          to="/"
          activeStyle={{
            color: "red",
          }}
        >
          Contact
        </Link>
      </nav>
    </section>

    <section className="navbar-center">
      <div className="initials">RD</div>
    </section>

    <section className="navbar-section">
      <nav>
        <Link
          to="/"
          activeStyle={{
            color: "red",
          }}
        >
          Home
        </Link>
        <Link
          to="/page-2/"
          activeStyle={{
            color: "red",
          }}
        >
          Work
        </Link>
        <Link
          to="/"
          activeStyle={{
            color: "red",
          }}
        >
          About
        </Link>
        <Link
          to="/"
          activeStyle={{
            color: "red",
          }}
        >
          Contact
        </Link>
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
