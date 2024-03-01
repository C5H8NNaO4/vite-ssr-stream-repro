import React from "react";
import { Route } from "react-router";

export const routes = [
  <Route path="/" Component={React.lazy(() => import("./pages/Root"))} />,
];
