import * as React from 'react'

import styled from '../../styled-components'
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
      <div>
        <Title>{this.props.post.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
      </div>
    )
  }
}

export default TumblrTextCard
