import * as React from 'react'
import ReactPlayer from 'react-player'

import styled from '../../styled-components'
import { ITumblrCardProps } from './TumblrCardHelper'

const Player = styled(ReactPlayer)`
  margin: auto;
  max-width: 100%;
`

const TumblrVideoCard : React.SFC<ITumblrCardProps> = (props) =>
  <Player url={props.post.permalink_url} />

export default TumblrVideoCard

// <iframe width="560" height="315" src="https://www.youtube.com/embed/DLxw6x9lTwM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
