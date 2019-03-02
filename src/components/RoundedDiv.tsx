import styled from '../styled-components'

interface IRoundedDivProps {
  radius? : string,
  spread? : string
}

const RoundedDiv = styled('div')<IRoundedDivProps>`
  moz-border-radius: ${props => props.radius || '3px'};
  webkit-border-radius: ${props => props.radius || '3px'};
  border-radius: ${props => props.radius || '3px'};

  moz-box-shadow: inset 0 0 {${props => props.spread || '5px'}} black;
  webkit-box-shadow: inset 0 0 {${props => props.spread || '5px'}} black;
  box-shadow: inset 0 0 {${props => props.spread || '5px'}} black;
`

export default RoundedDiv
