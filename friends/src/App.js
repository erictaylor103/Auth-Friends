import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
          <li>
            <Link to="/addfriend">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" component={FriendsList} />
          
          <PrivateRoute path='/AddFriend'> 
            <AddFriend />
          </PrivateRoute>
          
          <Route path="/login" component={Login} />
          <Route component={Login} />
          <Route path="/addfriend" component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

