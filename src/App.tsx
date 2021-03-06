import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import AuthService from './services/auth';
import AdminPage from './modules/admin/page';
import LoginPage from './modules/login/page';

function App() {
  return (
    <Switch>
      <Route exact path="(/login|/)" render={(props) => (
        AuthService.isAuthenticated()
          ? <Redirect to='/admin' />
          : <LoginPage />
      )} />
      <Route path="/admin" render={(props) => {
        const { history: { location } } = props;
        AuthService.setIntendedRoute(location.pathname);

        return (
          AuthService.isAuthenticated()
            ? <AdminPage />
            : <Redirect to='/login' />
        )
      }} />
      <Route render={(props) => (
        <div>page not found</div>
      )} />
    </Switch>
  );
}

export default App;
