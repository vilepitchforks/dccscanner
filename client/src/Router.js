import React from "react";
import {
  BrowserRouter as Router,
  Route /* , Redirect */
} from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Scan from "./views/Scan/Scan.js";
import Reports from "./views/Reports/Reports.js";

const routes = [
  // Example home route that redirects to /blog-overview by default
  // Rest of the routes are added as objects, without the "exact" attribute
  //   {
  //     path: "/",
  //     exact: true,
  //     layout: DefaultLayout,
  //     component: () => <Redirect to="/blog-overview" />
  //   },
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Scan
  },
  {
    path: "/reports",
    exact: true,
    layout: DefaultLayout,
    component: Reports
  }
];

const Routes = () => (
  <Router>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            }}
          />
        );
      })}
    </div>
  </Router>
);
export default Routes;
