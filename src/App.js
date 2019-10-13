import React from "react";
import "./App.css";
import "./assets/font-awesome/css/font-awesome.min.css";
<<<<<<< HEAD
import Homepage from "./main";
import NavHeader from "./components/navheader";
import ModalLoading from "./components/loading";
import ModalSign from "./components/modal_sign";
import { Provider } from "react-redux";
import store from "./redux/store";
// import TabsSign from "../src/components/tabs_sign";
// import { BrowserRouter as Router, Route } from "react-router-dom";




function App() {
  return (
    <Provider store={store}>
      <ModalSign />
      <ModalLoading />
      <NavHeader />
      <Homepage />
      {/* <Router>
        {<Route path="/tabs" exact component={TabsSign} />}
      </Router> */}
     </Provider>
=======
import Homepage from "./pages/home";
import EventPage from "./pages/events";
import NewsPage from "./pages/news";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/events" component={EventPage} />
          <Route path="/news" component={NewsPage} />
        </Switch>
      </Router>
    </Provider>
>>>>>>> fc9524bd6f49f3031ae6613181d343048fdad5f2
  );
}

export default App;
