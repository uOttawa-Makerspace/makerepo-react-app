import "./index.css";
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import useErrorBoundary from "use-error-boundary";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Profile from "./screens/Profile";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";
import { getToken, removeUserSession, setUserSession } from "./utils/Common";
import Help from "./screens/Help";
import * as HTTPRequest from "./utils/HTTPRequests";
import { LoggedInContext } from "./utils/Contexts";

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<Record<string, any> | null>(null);

  const airbrake = HTTPRequest.airbrake();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setAuthLoading(false);
      return;
    }

    HTTPRequest.get("check_signed_in")
      .then((response) => {
        setUserSession(response.token, response.user);
        setLoggedIn(true);
        setAuthLoading(false);
        setUser(response.user);
      })
      .catch((error) => {
        console.error(error);
        setLoggedIn(false);
        setAuthLoading(false);
        removeUserSession();
      });
  }, []);

  const { ErrorBoundary } = useErrorBoundary({
    onDidCatch: (error, errorInfo) => {
      airbrake.notify({
        error,
        params: { info: errorInfo },
      });
    },
  });

  if (authLoading) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <ErrorBoundary>
      <Router>
        {/* eslint-disable-next-line max-len,react/jsx-no-constructed-context-values */}
        <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
          <div className="main">
            <div className="content">
              <Switch>
                <PublicRoute path="/login" component={<Login />} />
                <PublicRoute path="/help" component={<Help />} />
                <PrivateRoute
                  path="/profile/:username"
                  component={<Profile />}
                />
                <PrivateRoute
                  user={user}
                  path="/"
                  component={<Home user={user} />}
                />
              </Switch>
            </div>
            {loggedIn && user && <Navbar user={user} />}
          </div>
        </LoggedInContext.Provider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
