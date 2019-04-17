import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const generateUniqueID = () => {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}

const initialState = {
  gratitudes: {
    "gratitude-0": ""
  }
}

export const actionTypes = {
  ADD_GRATITUDE: 'ADD_GRATITUDE',
  UPDATE_GRATITUDE: 'UPDATE_GRATITUDE',
  REMOVE_GRATITUDE: 'REMOVE_GRATITUDE'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GRATITUDE:
      return Object.assign({}, state, {
        gratitudes: Object.assign({}, state.gratitudes, action.gratitude)
      })
    case actionTypes.UPDATE_GRATITUDE:
      state.gratitudes[action.gratitude.id] = action.gratitude.gratitudeText
      return state
    case actionTypes.REMOVE_GRATITUDE:
      if (action.key !== "gratitude-0") {
        delete state.gratitudes[action.key]
        return state
      }
    default:
      return state
  }
}

// ACTIONS
export const addGratitude = gratitudeValue => {
  let gratitude = {},
    gratitudeID = `gratitude-${generateUniqueID()}`
  gratitude[gratitudeID] = gratitudeValue
  return { type: actionTypes.ADD_GRATITUDE, gratitude }
}

export const removeGratitude = key => {
  return { type: actionTypes.REMOVE_GRATITUDE, key }
}

export const updateGratitude = gratitude => {
  return { type: actionTypes.UPDATE_GRATITUDE, gratitude }
}

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
