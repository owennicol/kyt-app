import React from 'react'
import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import routes from '../routes'

// Redux setup
const initialState = (window.state) ? JSON.parse(window.state) : {}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const reducers = require('../reducers')

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// We need a Root component for React Hot Loading.
function Root () {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  )
}

export default Root
