import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";

import { DocumentList } from "../pages/Document";
import { CategoryList, CategoryForm } from "../pages/Category";
import { UserList } from "../pages/User";

import Error404 from "../pages/404Error";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/documents" component={DocumentList} isPrivate />

      <Route path="/categories" component={CategoryList} isPrivate />
      <Route path="/category/new" component={CategoryForm} isPrivate />
      <Route path="/category/edit/:id" component={CategoryForm} isPrivate />

      <Route path="/users" component={UserList} isPrivate />

      <Route path="/" component={Error404} />
    </Switch>
  );
}
