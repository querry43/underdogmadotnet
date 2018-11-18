import * as React from 'react'

import { insetShadowStyles, roundCornersStyles } from './../StyleHelper'

const tumblrCardStyle : React.CSSProperties = {
  ...insetShadowStyles('3px'),
  ...roundCornersStyles('5px'),
  background: 'white',
  fontFamily: 'sans-serif',
  margin: '10px',
  padding: '10px'
}

interface ITumblrCardProps {
  post : any
}

class TumblrCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <div data-card-type={this.props.post.type} style={tumblrCardStyle}>
        {this.content()}
      </div>
    )
  }

  protected content() {
    return (<div />)
  }
}

export default TumblrCard
