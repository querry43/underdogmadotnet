import * as React from 'react'

import {insetShadowStyles, roundCornersStyles} from './StyleHelper'

const headerStyle : React.CSSProperties = {
  ...roundCornersStyles('3px'),
  ...insetShadowStyles('1px'),
  backgroundColor: '#999999',
  border: 'solid 3px',
  borderColor: '#cccccc',
  fontFamily: 'sans-serif',
  fontSize: '2.5em',
  margin: '10px',
  padding: '5px',
  textAlign: 'center'
}

class Header extends React.Component {
  public render() {
    return (
      <header style={headerStyle}>Matt Harrington's Stuff</header>
    )
  }
}

export default Header
