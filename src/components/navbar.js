import { Link } from 'gatsby'
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaUserNinja } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
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
            <span className="tooltip tooltip-right" data-tooltip="Who am I?">
              <AniLink to="/about/" activeClassName="active" paintDrip bg="#663399" duration={1}>
                <FaUserNinja />
                <span className="text-wrap">About</span>
              </AniLink>
            </span>
            <span className="tooltip tooltip-right" data-tooltip="My Work">
              <AniLink to="/work/" activeClassName="active" fade bg="#663399" duration={1}>
                <FaCode />
                <span className="text-wrap">Work</span>
              </AniLink>
            </span>
            <span className="tooltip tooltip-right" data-tooltip="My Photography">
              <Link to="/photos/" activeClassName="active">
                <FaCamera />
                <span className="text-wrap">Photos</span>
              </Link>
            </span>
          </nav>
        </div>

        <div className="navbar-center">
          <AniLink to="/" className="navbar-initials" activeClassName="active" fade bg="#663399" duration={1}>RD</AniLink>
        </div>

        <div className="navbar-section">
          <nav className="navbar-links">
            <a href="/" className="tooltip tooltip-left" data-tooltip="View Source"><FaGithub /></a>
            <a href="/" className="tooltip tooltip-left" data-tooltip="Check out my Codepens"><FaCodepen /></a>
            <a href="/" className="tooltip tooltip-left" data-tooltip="Follow me on Instagram"><FaInstagram /></a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar
