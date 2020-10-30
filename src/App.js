import './App.css';
import React from 'react'
import {Route, Switch, } from "react-router-dom";
import UserList from './Components/UserList/UserList';
import Details from './Components/Details/Details';
import PageNotFound from './Components/PageNotFound/PageNotFound';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={UserList} />
        <Route exact path= '/users/:id' component ={Details} />
        <Route component= {PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
