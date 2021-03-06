import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav } from 'react-bootstrap';
import { NavLink, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Doc from "./pages/doc/Doc";
import Home from './pages/home/Home';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Container className="border-bottom">        
            <Nav className="justify-content-center border-top" activeKey="/home">
              <Nav.Item>
                <NavLink to="/" activeClassName="font-weight-light p-3" >Home</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/doc" activeClassName="font-weight-light p-3">Documentation</NavLink> 
              </Nav.Item>
            </Nav>      
        </Container>

        <Switch>
          <Route path="/doc" component={Doc} />
          <Route path="/" component={Home} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
