import * as React from 'react'

import styled from '../../styled-components'
import { RoundedCornerStyle } from '../StyleHelper'

const Card = styled.div`
  ${props => RoundedCornerStyle};
  background: white;
  font-family: sans-serif;
  margin: 10px;
  padding: 10px;
`

const DateTag = styled.p`
  font-size: x-small;
`

interface ITumblrCardProps {
  post : any
}

class TumblrCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <Card data-card-type={this.props.post.type}>
        {this.content()}
        <DateTag>{new Date(this.props.post.timestamp * 1000).toLocaleString()}</DateTag>
      </Card>
    )
  }

  protected content() {
    return (<div />)
  }
}

export default TumblrCard
