import { combineReducers } from 'redux'

import { counter, CounterState } from './counter'

interface State {
  counter: CounterState
}

export default combineReducers<State>({
  counter
})
