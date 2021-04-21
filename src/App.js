import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import NavBar from './containers/NavBar'
import Router from './Router'
import store from './redux/store'

import './App.cs'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}