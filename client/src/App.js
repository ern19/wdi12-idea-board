import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import LoginPage from "./components/Login/LoginPage"
import IdeaPage from "./components/Idea/IdeaPage"


class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/idea">Ideas</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>       
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/idea/:userId" component={IdeaPage}/>
            <Route exact path="/login" component={LoginPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;