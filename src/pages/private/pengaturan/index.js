import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import pengguna from "./pengguna";

export default function Pengaturan() {
  return (
    <Switch>
      <Route path="/pengaturan/pengguna" component={pengguna} />
      <Route path="/pengaturan/events" />
      <Redirect to="/pengaturan/pengguna" />
    </Switch>
  );
}
