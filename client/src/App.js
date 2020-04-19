import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import DetailTask from './components/DetailTask';
import ShowTask from './components/ShowTask'
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

function App() {

  const doRedirect = () =>{
    let loggedIn = sessionStorage.getItem("loginData");
          if(loggedIn)
          {
            return <Redirect to='/home'/>
        }else{
            return <Redirect to='/'/>                        
        }
  }
      
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path='/home' component={Home}/> 
        <Route path='/details' component={DetailTask}/> 
        <Route path='/task' component={ShowTask}/> 
        {doRedirect()}
      </Switch>
</Router>
  );
}

export default App;
