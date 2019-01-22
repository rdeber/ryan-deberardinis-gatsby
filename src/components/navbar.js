import { Link } from 'gatsby'
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaUserNinja } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'


class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (window.scrollY > 5) {
      document.getElementById("navbar").classList.add("navbar-solid");
    } else {
      document.getElementById("navbar").classList.remove("navbar-solid");
    }
  };

  render() {
    return (
      <header id="navbar" className="navbar">
        <div className="navbar-section">
          <nav className="navbar-nav" role="navigation">
            <span className="tooltip tooltip-bottom" data-tooltip="Who am I?">
              <AniLink to="/about/" activeClassName="active" fade>
                <FaUserNinja />
                <span className="text-wrap">About</span>
              </AniLink>
            </span>
            <span className="tooltip tooltip-bottom" data-tooltip="My Work">
              <AniLink to="/work/" activeClassName="active" fade>
                <FaCode />
                <span className="text-wrap">Work</span>
              </AniLink>
            </span>
            <span className="tooltip tooltip-bottom" data-tooltip="My Photography">
              <AniLink to="/photos/" activeClassName="active" fade>
                <FaCamera />
                <span className="text-wrap">Photos</span>
              </AniLink>
            </span>
            <span className="tooltip tooltip-bottom" data-tooltip="Get in Touch">
              <AniLink to="/contact/" activeClassName="active" fade>
                <FaEnvelope />
                <span className="text-wrap">Contact</span>
              </AniLink>
            </span>
          </nav>
        </div>

        <div className="navbar-center">
          <AniLink to="/" className="navbar-initials" activeClassName="active" fade>RD</AniLink>
        </div>

        <div className="navbar-section">
          <nav className="navbar-links">
            <div className="external-links">
              <a href="https://github.com/rdeber" className="tooltip tooltip-bottom" data-tooltip="View Source"><FaGithub /></a>
              <a href="https://codepen.io/rdeber/" className="tooltip tooltip-bottom" data-tooltip="Check out my Codepens"><FaCodepen /></a>
              <a href="https://www.instagram.com/r.deber/" className="tooltip tooltip-bottom" data-tooltip="Follow me on Instagram"><FaInstagram /></a>
            </div>
            <span className="internal-links">
              <span className="tooltip tooltip-bottom" data-tooltip="Who am I?">
                <AniLink to="/about/" activeClassName="active" fade>
                  <FaUserNinja />
                  <span className="text-wrap">About</span>
                </AniLink>
              </span>
              <span className="tooltip tooltip-bottom" data-tooltip="Get in Touch">
                <AniLink to="/contact/" activeClassName="active" fade>
                  <FaEnvelope />
                  <span className="text-wrap">Contact</span>
                </AniLink>
              </span>
            </span>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar
