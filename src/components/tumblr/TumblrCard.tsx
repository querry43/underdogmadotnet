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
  timestamp : number
}

class TumblrCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <Card>
        {this.props.children}
        <DateTag>{new Date(this.props.timestamp * 1000).toLocaleString()}</DateTag>
      </Card>
    )
  }
}

export default TumblrCard
