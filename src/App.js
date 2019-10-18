import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/testhero1.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import NavBarAdmin from "./components/navbaradmin";
import SignInAdmin from "./components/loginadmin";
import Ceklogin from "./components/ceklogin";
import Eventlist from "./components/eventlist";
import DetailEvents from "./components/detailEvents";
import Mainpage from "./components/mainpage";
import FormEo from "./components/formEo";
import FormDetail from "./components/formDetail";
import NavHeader from "./components/navheader";
// import Stickynavbar from "./components/stickynavbar";
import Footer from "./components/footer";
import ModalLoading from "./components/loading";
import ModalSign from "./components/modal_sign";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Ceklogin />
      <ModalSign />
      <ModalLoading />
      {/* <Stickynavbar /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <NavHeader />
            <Mainpage />
            <Footer />
          </Route>
          <Route path="/eventlist">
            <NavHeader />
            <Eventlist />
            <Footer />
          </Route>
          <Route path="/eventdetail/:id">
            <NavHeader />
            <DetailEvents />
            <Footer />
          </Route>
          <Route path="/createevent">
            <NavHeader />
            <FormEo />
            <Footer />
          </Route>
          <Route path="/admin">
            <SignInAdmin />
          </Route>
          <Route path="/admin-dashboard">
            <NavBarAdmin />
          </Route>
          <Route path="/formeventdetail/:id">
            <NavHeader />
            <FormDetail />
            <Footer />
          </Route>
        </Switch>
      </Router>
      {/* <Router>
        {<Route path="/tabs" exact component={TabsSign} />}
      </Router> */}
    </Provider>
  );
}

export default App;
