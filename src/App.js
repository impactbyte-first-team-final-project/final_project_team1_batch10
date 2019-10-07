import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { home } from "./components/home";
import { events } from "./components/events";
import { news } from "./components/news";
import { login } from "./components/login";
import { NavigationBar } from "./components/NavigationBar";
import { Layout } from "./components/Layout";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/events" component={events} />
              <Route path="/news" component={news} />
              <Route path="/login" component={login} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
