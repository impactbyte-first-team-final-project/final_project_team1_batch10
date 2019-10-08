import React from "react";
import { Switch, Route } from "react-router-dom";
import EditEvent from "./edit";
import GridEvent from "./grid";
export default function Kegiatan() {
  return (
    <Switch>
      <Route path="/event/edit/:eventId" component={EditEvent} />
      <Route component={GridEvent} />
    </Switch>
  );
}
