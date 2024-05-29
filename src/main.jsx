import React from 'react'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reducer from './redux/reducers.jsx'
const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
)
