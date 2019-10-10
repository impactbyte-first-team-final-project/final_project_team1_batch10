import React from "react";
import "./App.css";
import "./assets/font-awesome/css/font-awesome.min.css";
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
  );
}

export default App;
