import * as React from 'react'

const navbarStyle : React.CSSProperties = {
  fontFamily: 'sans-serif',
  fontSize: '1.2em',
  listStyleType: 'none',
  margin: 'auto',
  overflow: 'hidden',
  width: '75%'
}

class NavBar extends React.Component {
  public render() {
    return (
      <ul style={navbarStyle}>
        {this.props.children}
      </ul>
    )
  }
}

export default NavBar
