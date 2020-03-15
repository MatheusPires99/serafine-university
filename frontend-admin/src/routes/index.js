import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";

import Documents from "../pages/Documents/List";

import Categories from "../pages/Categories/List";
import CreateCategory from "../pages/Categories/Form";

import Users from "../pages/Users/List";

import Error404 from "../pages/Error404";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/documents" component={Documents} isPrivate />

      <Route path="/categories" component={Categories} isPrivate />
      <Route path="/category/new" component={CreateCategory} isPrivate />
      <Route path="/category/edit/:id" component={CreateCategory} isPrivate />

      <Route path="/users" component={Users} isPrivate />

      <Route path="/" component={Error404} />
    </Switch>
  );
}
