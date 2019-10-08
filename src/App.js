import React from "react";
import "./App.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import Homepage from "./main";
import { Provider } from "react-redux";
import store from "./redux/store";
import TabsSign from "../src/components/tabs_sign";
import { BrowserRouter as Router, Route } from "react-router-dom";




function App() {
  return (
    <Provider store={store}>
      <Homepage />
      {/* <Router>
        {<Route path="/tabs" exact component={TabsSign} />}
      </Router> */}
     </Provider>
  );
}

export default App;
