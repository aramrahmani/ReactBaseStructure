import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import { NotFound } from "navigation/NotFound";
import { ROOT, DASHBOARD, PAGE1, USERPROFILE } from "navigation/CONSTANTS";
import { Page1 } from "pages/Page1";
import Login from "./Auth/Login";
import { UserProfile } from "pages/UserProfile";
import PrivateRoute from "./Auth/PrivateRoute";

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                {/* List all public routes here */}
                <Route exact path={ROOT} component={Home} />
                <Route exact path={DASHBOARD} component={Dashboard} />
                <Route exact path={PAGE1} component={Page1} />
                <Route path="/login">
                    <Login />
                </Route>

                {/* List all private/auth routes here */}
                <PrivateRoute path={USERPROFILE}>
                    <UserProfile />
                </PrivateRoute>
                {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
                {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

                {/* List a generic 404-Not Found route here */}
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
};
