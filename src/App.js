import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Nav from './containers/Nav'
import Router from './Router'
import store from './redux/store'

import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}