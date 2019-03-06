import * as React from 'react'

import styled from '../styled-components'

const NavBarContainer = styled.div`
  text-align: center;
`

const NavBarUL = styled.ul`
  font-family: sans-serif;
  font-size: 1.2em;
  list-style-type: none;
  margin: auto;
  overflow: hidden;
  display: inline-block;
  padding: 0;
`

const NavBar : React.SFC = (props) => (
  <NavBarContainer>
    <NavBarUL>
      {props.children}
    </NavBarUL>
  </NavBarContainer>
)

export default NavBar
