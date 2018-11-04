import * as React from 'react'

import './NavBar.css'


class NavBar extends React.Component {
  public render() {
    return (
      <ul id="navbar">
        <li>
          <a href="#interests" rel="interests">Interests</a>
        </li>
        <li>
          <a href="#projects" rel="projects">Projects</a>
        </li>
      </ul>
    )
  }
}

export default NavBar
