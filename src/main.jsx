import React from 'react'
import { Provider,connect } from 'react-redux'
import {createStore} from 'redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import priceListHolders from './redux/reducers.jsx'

const store = createStore(priceListHolders)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
