import React from "react";
import { Switch, Route } from "react-router-dom";
import Pengaturan from "./pengaturan";
import Kegiatan from "./event";
import Follow from "./follow";
import Home from "./home";
export default function Private() {
  return (
    <Switch>
      <Route path="/pengaturan" component={Pengaturan} />
      <Route path="/kegiatan" component={Kegiatan} />
      <Route path="/follow" component={Follow} />
      <Route component={Home} />
    </Switch>
  );
}
