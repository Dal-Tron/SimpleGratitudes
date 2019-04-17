import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  gratitudes: [{ gratitude: "" }]
}

export const actionTypes = {
  ADD_GRATITUDE: 'ADD_GRATITUDE',
  REMOVE_GRATITUDE: 'REMOVE_GRATITUDE'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GRATITUDE:
      return Object.assign({}, state, {
        gratitudes: [...state.gratitudes, action.gratitude]
      })
    case actionTypes.REMOVE_GRATITUDE:
      return Object.assign({}, state, {
        gratitudes: state.gratitudes.filter(gratitude => gratitude != state.gratitudes[action.index])
      })
    default:
      return state
  }
}

// ACTIONS
export const addGratitude = gratitude => {
  return { type: actionTypes.ADD_GRATITUDE, gratitude }
}

export const removeGratitude = index => {
  return { type: actionTypes.REMOVE_GRATITUDE, index }
}

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
