import React from 'react';
import logo from './logo.svg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CreateUser from './components/create-user.component';
import Users from './components/users.component';
import './components/create.css';
// import logo from './logo.png';
function App() {
  return (
    <Router>
      <div className="App" style={{marginLeft:"30%", marginRight:"30%"}}>
        <header>
         
          <div id="bg" style={{backgroundColor:"#f2f4f8", marginLeft:"20%", marginTop:"5%" }}>
            <div className="logo" style={{float:"left"}}><img src={logo} alt=""/></div>
            <div className="text-dark" style={{color:"#161537 !important", padding:"5px",fontSize: "1.33rem", fontWeight:"900", fontFamily:"'Source Sans Pro',sans-serif", lineHeight:"1", textTransform:"uppercase"}}>Glabbr</div>
            <div className="text-light" style={{color:"#786fa4", fontSize: ".7rem",fontVariant:"tabular-nums",fontFeatureSettings:"tnum", fontWeight:"400",letterSpacing:"1px", fontFamily:"'Source Sans Pro',sans-serif", lineHeight:"normal", textTransform:"uppercase"}}>Infniti</div>
            
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/create-user"}>Create User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/users"}>Create User</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path='/' component={CreateUser}/>
                <Route path="/create-user" component={CreateUser}/>
                <Route path="/users" component={Users}/>
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
