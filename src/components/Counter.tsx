import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { increment } from '../store/reducers/actions'

export interface ICounterProps {
  counter : number,
  increment : typeof increment
}

class Counter extends React.Component<ICounterProps> {
  public render() {
    return (
      <button onClick={() => this.props.increment()}>
        Counter: {this.props.counter}
      </button>
    )
  }
}

const mapStateToProps = (state : any) => ({
  counter: state.counter.c
})

const mapDispatchToProps = (dispatch : Dispatch) => ({
  increment: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
