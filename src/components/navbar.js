//import { Link } from 'gatsby'
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../styles/header.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (window.scrollY > 25) {
      document.getElementById("navbar").classList.add("navbar-solid");
    } else {
      document.getElementById("navbar").classList.remove("navbar-solid");
    }
  };

  render() {
    return (
      <header id="navbar" className="navbar container">
        <div className="navbar-section">
          <nav className="navbar-nav">
            <AniLink to="/" activeClassName="active" fade bg="#663399" duration={1}>Home</AniLink>
            <AniLink to="/about/" activeClassName="active" fade bg="#663399" duration={1}>About</AniLink>
            <AniLink to="/work/" activeClassName="active" fade bg="#663399" duration={1}>Work</AniLink>
          </nav>
        </div>

        <div className="navbar-center">
          <h5 className={styles.initials}>RD</h5>
        </div>

        <div className="navbar-section">
          <nav className="navbar-links">
            <a href="/" className="tooltip tooltip-bottom" data-tooltip="View Source"><FaGithub /></a>
            <a href="/" className="tooltip tooltip-bottom" data-tooltip="Follow me on Instagram"><FaInstagram /></a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar
