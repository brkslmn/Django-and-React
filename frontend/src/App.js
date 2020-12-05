import React, {Component} from "react";
import Root from "./Root";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Singup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import requireAuth from "./utils/RequireAuth"

axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends Component{
  render() {
    return (
      <div>
        <Root>
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <Switch>
            <Route path="/signup" component={Singup}/>
            <Route path="/login" component={Login}/>            
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
          </Switch>
        </Root>
      </div>
    );
  }
}

export default App;