
import './App.css';
import Renewable from './components/Renewable';
import Header from './components/Header';
import Home from './components/Home';
import Solutions from './components/Solutions';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <Header/>
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/renewable' component={Renewable}></Route>
        <Route exact path='/sol' component={Solutions}></Route>
        {/* <Route exact path='/signup' component={Signup}></Route> */}


      </Switch>
    
    </Router>
  );
}

export default App;
