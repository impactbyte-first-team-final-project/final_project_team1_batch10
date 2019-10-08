import React from "react";
import "./App.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import Homepage from "./main";
import { Provider } from "react-redux";
import store from "./redux/store";
import TabsSign from "../src/components/tabs_sign";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModalSign from "../src/components/modal_sign";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
      {/* <Router>
        {<Route path="/" exact component={TabsSign} />}
        {<Route path="/sign" exact component={ModalSign} />}
      </Router> */}
    </Provider>
  );
}

export default App;
