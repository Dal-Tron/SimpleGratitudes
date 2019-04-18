import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

export const actionTypes = {}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// ACTIONS
// none

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
