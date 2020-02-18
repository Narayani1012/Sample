import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Message from "./component/Message";
import Eventbinds from "./component/Eventbinds";
import ParentComponent from "./component/ParentComponent";
import Form from "./component/Form";
import Purecomponent from "./component/Purecomponent";
import Parentcomp from "./component/Parentcomp";
import Listrendering from "./component/Listrendering";
import Memocomp from "./component/Memocomp";
import Refsdemo from "./component/Refsdemo";
import Login from './login_page/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from "./login_page/Register";
import Home from "./login_page/Home";
import history from './history.js'
import Postlist from "./component/Postlist";
import Hookcounter from "./component/Hookcounter";

const App = () => {
  return (
    <Router  history={history}>
    <div className="App">
      {/* <Eventbinds /> */}
      {/* <ParentComponent /> */}
      {/* <Form /> */}
      <Route exact path="/" component={Login}>
        <Login />
      </Route>
      
      {/* <Form /> */}
      {/* <Purecomponent /> */}
      {/* <Parentcomp /> */}
      {/* <Eventbinds /> */}
      {/* <Listrendering /> */}
      {/* <Memocomp /> */}
      {/* <Refsdemo /> */}
      <Route exact path="/Register" component={Register}> 
        
      </Route>
      <Route exact path="/Home" component={Home}> 
        <Home/>
      </Route>
      {/* <Login /> */}
      {/* <Postlist /> */}
      {/* <Hookcounter /> */}
    </div>
    </Router>
  );
}

export default App;