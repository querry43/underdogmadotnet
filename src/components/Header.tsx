import styled from '../styled-components'
import { RoundedCornerStyle } from './StyleHelper'

const Header = styled.div`
  ${props => RoundedCornerStyle};
  background-color: #999999;
  border: solid 3px;
  border-color: #cccccc;
  font-family: sans-serif;
  font-size: 2.5em;
  margin: 10px;
  padding: 5px;
  text-align: center;
`

export default Header
