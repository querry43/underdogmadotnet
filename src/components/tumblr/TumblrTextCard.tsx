import * as React from 'react'

import styled from '../../styled-components'
import { ITumblrCardProps } from './TumblrCardHelper'

const Title = styled.p`
  color: black;
  text-decoration: none;
`

const Content = styled.div`
  ul { text-align: left; }
  img { max-width: 100%; }
`

const TumblrTextCard : React.SFC<ITumblrCardProps> = (props) => (
  <div>
    <Title>{props.post.title}</Title>
    <Content dangerouslySetInnerHTML={{ __html: props.post.body }} />
  </div>
)

export default TumblrTextCard
