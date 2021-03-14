import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu/Menu';
import Banner from './Components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import SelectedEvents from './Components/SelectedEvents/SelectedEvents';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Menu/>
      <Switch>
        <Route path="/banner">
            <Banner/>
        </Route>
        <Route exact path="/">
       <Banner></Banner>
        </Route>
        <Route path="/event">
          <SelectedEvents/>
        </Route>
        <PrivateRoute path="/register/:Id">
          <Register/>
        </PrivateRoute>
        <Route path="/login">
        <Login/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
