import React, { Component } from 'react';
import Home from "./pages/home/Home"
import "./assets/styles/reset.css"
import store from './store/'
import {Provider} from "react-redux"
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home ></Home>
      </Provider>
         
    )
  }
}
export default App