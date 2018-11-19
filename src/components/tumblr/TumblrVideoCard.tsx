import * as React from 'react'
import ReactPlayer from 'react-player'

import TumblrCard from './TumblrCard'

const playerStyle : React.CSSProperties = {
  margin: 'auto'
}

class TumblrVideoCard extends TumblrCard {
  protected content() {
    return (
      <ReactPlayer style={playerStyle} url={this.props.post.permalink_url} />
    )
  }
}

export default TumblrVideoCard

// <iframe width="560" height="315" src="https://www.youtube.com/embed/DLxw6x9lTwM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
