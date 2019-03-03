import * as React from 'react'

import styled from '../styled-components'
import { RoundedCornerStyle } from './StyleHelper'

const CardDiv = styled.div`
  ${props => RoundedCornerStyle};
  background: white;
  font-family: sans-serif;
  margin: 10px;
  padding: 10px;
`

const DateTag = styled.p`
  font-size: x-small;
`

interface ICardProps {
  timestamp : number
}

class Card extends React.Component<ICardProps> {
  public render() {
    return (
      <CardDiv>
        {this.props.children}
        <DateTag>{new Date(this.props.timestamp * 1000).toLocaleString()}</DateTag>
      </CardDiv>
    )
  }
}

export default Card
