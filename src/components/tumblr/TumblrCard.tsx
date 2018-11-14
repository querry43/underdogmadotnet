import * as React from 'react'

import { insetShadowStyles, roundCornersStyles } from './../StyleHelper'

const tumblrCardStyle : React.CSSProperties = {
  ...insetShadowStyles('3px'),
  ...roundCornersStyles('5px'),
  background: 'white',
  margin: '0 10px 0 10px'
}

interface ITumblrCardProps {
  post : any
}

class TumblrCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <div style={tumblrCardStyle}>
        {this.content()}
      </div>
    )
  }

  protected content() {
    return (<div />)
  }
}

export default TumblrCard
