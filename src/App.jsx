import React, { Component } from "react";
import { Link } from "react-router-dom";
import Users from "./containers/Users";

const Pizza = React.lazy(() => import("./containers/Pizza"));

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> |<Link to="/pizza">Pizza</Link>
          <div>
            <Route path="/" exact component={Users} />
            <Route
              path="/pizza"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Pizza />
                </Suspense>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
