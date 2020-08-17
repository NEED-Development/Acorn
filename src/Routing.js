import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './Components/Navigation/NavBar';
import { Navbar } from 'reactstrap';

const Routing = () => {
  const signedOutRoutes = [
    { Component: Home, path: '/' },
    { Component: About, path: '/about'}
  ];

  return (
    <Router>
      <Switch>
        {signedOutRoutes.map(
          ({Component, path}, index) => {
            return (
              <Route
                key={index}
                exact
                path={path}
                component={Component}
                render={props => (
                   <NavBar/>
                )}
              />
            );
          }
        )}
        <Redirect  to='/'/>
      </Switch>
    </Router>
  );
}

export default Routing;