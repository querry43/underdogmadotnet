import * as React from 'react'
import ReactPlayer from 'react-player'

import styled from '../../styled-components'
import TumblrCard from './TumblrCard'
import { IPostProps } from './TumblrCardHelper'

const Player = styled(ReactPlayer)`
  margin: auto;
`

class TumblrVideoCard extends React.Component<IPostProps> {
  public render() {
    return (
      <TumblrCard timestamp={this.props.post.timestamp}>
        <Player url={this.props.post.permalink_url} />
      </TumblrCard>
    )
  }
}

export default TumblrVideoCard

// <iframe width="560" height="315" src="https://www.youtube.com/embed/DLxw6x9lTwM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
