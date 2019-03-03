import * as React from 'react'
import ReactPlayer from 'react-player'

import styled from '../../styled-components'
import { ITumblrCardProps } from './TumblrCardHelper'

const Player = styled(ReactPlayer)`
  margin: auto;
`

class TumblrVideoCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <div>
        <Player url={this.props.post.permalink_url} />
      </div>
    )
  }
}

export default TumblrVideoCard

// <iframe width="560" height="315" src="https://www.youtube.com/embed/DLxw6x9lTwM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
