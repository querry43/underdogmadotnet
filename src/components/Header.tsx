import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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

const mapStateToProps = (state : any, props : any) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch : any) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
