import React from "react"
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'

export default ({ children }) => (
  <footer>
    <span className="external-links">
      <a href="/" className="tooltip tooltip-bottom" data-tooltip="View Source"><FaGithub /></a>
      <a href="/" className="tooltip tooltip-bottom" data-tooltip="Check out my Codepens"><FaCodepen /></a>
      <a href="/" className="tooltip tooltip-bottom" data-tooltip="Follow me on Instagram"><FaInstagram /></a>
    </span>
  </footer>
)