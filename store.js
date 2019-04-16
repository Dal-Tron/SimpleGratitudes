import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  lastUpdate: 0,
}

export const actionTypes = {
  TICK: 'TICK',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
      })
    default:
      return state
  }
}

// ACTIONS
export const setClock = () => {
  const time = new Date(Date.now()).toTimeString()
  const H = time.substr(0, 2)
  const h = H % 12 || 12
  const ampm = (H < 12 || H === 24) ? " AM" : " PM"
  const timestring = h + time.substr(2, 3) + ampm
  return { type: actionTypes.TICK, ts: timestring }
}

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
