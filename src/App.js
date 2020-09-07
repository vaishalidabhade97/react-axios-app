import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CreateUser from './components/create-user.component';
import Login from './components/login.component';
import './components/create.css';
function App() {
  return (
    <Router>
      <div className="App1" style={{marginLeft:"30%", marginRight:"30%"}}>
        <header>
         
          <div id="bg">
            <div className="logo"><img src={logo} alt=""/></div>
            <div className="text-dark">Glabbr</div>
            <div className="text-light">Infniti</div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path='/' component={CreateUser}/>
                <Route path="/create-user" component={CreateUser}/>
                <Route path="/login" component={Login}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="copyright">
        © 2019 Glabbr. All rights reserved.
        </div>
      </div>
    </Router>
  );
}

export default App;
