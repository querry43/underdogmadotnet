import * as React from 'react'
import { NavLink } from 'react-router-dom'

import { insetShadowStyles, roundCornersStyles } from './StyleHelper'

const navbarLiStyle : React.CSSProperties = {
  display: 'inline',
  float: 'left'
}

const navbarAStyle : React.CSSProperties = {
  ...insetShadowStyles('1px'),
  ...roundCornersStyles('1px'),
  backgroundColor: '#999999',
  borderColor: '#cccccc',
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'block',
  margin: '0 4px 0 4px',
  padding: '4px 0 4px 0',
  textAlign: 'center',
  textDecoration: 'none',
  width: '300px'
}

const navbarASelectedStyle : React.CSSProperties = {
  ...navbarAStyle,
  backgroundColor: '#7FA77E'
}

const navbarAHoverStyle : React.CSSProperties = {
  ...navbarAStyle,
  backgroundColor: '#539A52'
}

interface ITabProps {
  name : string,
  path : string
}

interface ITabState {
  hover: boolean
}

class Tab extends React.Component<ITabProps, ITabState> {
  public state : ITabState = { hover: false }
  public hoverOn = (e: React.MouseEvent<HTMLAnchorElement>) : void => this.setState({ hover: true })
  public hoverOff = (e: React.MouseEvent<HTMLAnchorElement>) : void => this.setState({ hover: false })

  public render() {
    return (
      <li style={navbarLiStyle}>
        <NavLink
            exact={true}
            to={this.props.path}
            style={
              this.state.hover
                ? navbarAHoverStyle
                : navbarAStyle}
            activeStyle={navbarASelectedStyle}
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
        >
          {this.props.name}
        </NavLink>
      </li>
    )
  }
}

export default Tab
