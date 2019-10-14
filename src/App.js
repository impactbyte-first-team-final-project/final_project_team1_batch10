import React from "react";
import "./App.css";
import "./assets/css/testhero1.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import Mainpage from "./components/mainpage";
import FormEo from "./components/formEo";
import NavHeader from "./components/navheader";
import Footer from "./components/footer";
import ModalLoading from "./components/loading";
import ModalSign from "./components/modal_sign";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import TabsSign from "../src/components/tabs_sign";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <ModalSign />
      <ModalLoading />
      <NavHeader />
      <Router>
          <Switch>
            <Route exact path="/">
              <Mainpage />
            </Route>
            <Route path="/createevent">
              <FormEo />
            </Route>
          </Switch>
      </Router>
      <Footer />
      {/* <Router>
        {<Route path="/tabs" exact component={TabsSign} />}
      </Router> */}
    </Provider>
  );
}

export default App;
