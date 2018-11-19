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

const dateStyle : React.CSSProperties = {
  fontSize: 'x-small'
}

interface ITumblrCardProps {
  post : any
}

class TumblrCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <div data-card-type={this.props.post.type} style={tumblrCardStyle}>
        {this.content()}
        <p style={dateStyle}>{new Date(this.props.post.timestamp * 1000).toLocaleString()}</p>
      </div>
    )
  }

  protected content() {
    return (<div />)
  }
}

export default TumblrCard
