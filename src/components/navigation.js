import { Link } from 'gatsby'
import React from 'react'

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link
          to="/"
          activeStyle={{
            color: "red",
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/page-2/"
          activeStyle={{
            color: "red",
          }}
        >
          Page2
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
