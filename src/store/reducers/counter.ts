interface IncrementAction {
  type: 'INCREMENT'
}

interface DecrementAction {
  type: 'DECREMENT'
}

type Action = IncrementAction | DecrementAction

export interface CounterState {
  c : number
}

export const counter = (state : CounterState = { c: 0 }, action : Action) : CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, c: state.c + 1 }
    case 'DECREMENT':
      return { ...state, c: state.c - 1 }
    default:
      return state
  }
}
