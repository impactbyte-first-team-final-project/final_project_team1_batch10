import React from 'react';
import './App.css';
import './assets/font-awesome/css/font-awesome.min.css';
import Homepage from './main';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
