import * as React from 'react'

import Tab from './Tab'

const navbarStyle : React.CSSProperties = {
  fontFamily: 'sans-serif',
  fontSize: '1.2em',
  listStyleType: 'none',
  margin: 'auto',
  overflow: 'hidden',
  padding: '0',
  paddingBottom: '10px',
  width: '80%'
}

class NavBar extends React.Component {
  public render() {
    return (
      <ul style={navbarStyle}>
        <Tab name="Interests" tag="#interests" selected={true} />
        <Tab name="Projects" tag="#projects" selected={false} />
      </ul>
    )
  }
}

export default NavBar
