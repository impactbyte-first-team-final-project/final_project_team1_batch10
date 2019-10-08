import React from "react";
import "./App.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import TabsSign from "../src/components/tabs_sign";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModalSign from '../src/components/modal_sign'

function App() {
  return(
   <Router>
  {<Route path="/" exact component={TabsSign} />}
  {<Route path="/sign" exact component={ModalSign} />}
  </Router>
  )
}

export default App;
