import * as React from 'react'

import styled from '../../styled-components'
import TumblrCard from './TumblrCard'
import { IPostProps } from './TumblrCardHelper'

const Title = styled.p`
  color: black;
  text-decoration: none;
`

const Content = styled.div`
  ul { text-align: left; }
`

class TumblrTextCard extends React.Component<IPostProps> {
  public render() {
    return (
      <TumblrCard timestamp={this.props.post.timestamp}>
        <Title>{this.props.post.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
      </TumblrCard>
    )
  }
}

export default TumblrTextCard
