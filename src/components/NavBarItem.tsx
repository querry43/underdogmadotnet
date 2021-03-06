import * as React from 'react'
import { NavLink } from 'react-router-dom'

import { RoundedCornerStyle } from './StyleHelper'
import styled from '../styled-components'

const NavBarLinkContainer = styled.li`
  display: inline-block;
`

// should have radius 1px
const NavBarLink = styled(NavLink)`
  ${props => RoundedCornerStyle};
  background-color: #999999;
  border-color: #cccccc;
  border-style: solid;
  border-width: 1px;
  display: block;
  margin: 0 4px 0 4px;
  padding: 4px 0 4px 0;
  text-align: center;
  text-decoration: none;
  width: 300px;
  color: black;

  &:hover {
    background-color: #539A52;
  }

  &.active {
    background-color: #7FA77E;
  }
`

interface INavBarItemProps {
  to : string
}

const NavBarItem : React.SFC<INavBarItemProps> = (props) => (
  <NavBarLinkContainer>
    <NavBarLink exact={true} to={props.to}>
      {props.children}
    </NavBarLink>
  </NavBarLinkContainer>
)

export default NavBarItem
