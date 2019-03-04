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
  timestamp? : number
}

const Card : React.SFC<ICardProps> = (props) => {
  const dateTag = props.timestamp
    ? <DateTag>{new Date(props.timestamp * 1000).toLocaleString()}</DateTag>
    : ""

  return (
    <CardDiv>
      {props.children}
      {dateTag}
    </CardDiv>
  )
}

export default Card
