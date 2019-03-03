import * as React from 'react'

import styled from '../../styled-components'
import Card from '../Card'
import { ITumblrCardProps } from './TumblrCardHelper'

const Title = styled.p`
  color: black;
  text-decoration: none;
`

const Content = styled.div`
  ul { text-align: left; }
`

class TumblrTextCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <Card timestamp={this.props.post.timestamp}>
        <Title>{this.props.post.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
      </Card>
    )
  }
}

export default TumblrTextCard
