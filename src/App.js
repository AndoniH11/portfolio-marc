import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './styles.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Flip from './components/Flip';
import Catalunya from './components/Catalunya';
import SpaceTravel from './components/SpaceTravel';
import About from './components/About';

class App extends React.Component{
  render(){
      return(
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/flip" component={Flip}/>
            <Route exact path="/catalunya" component={Catalunya}/>
            <Route exact path="/space-travel" component={SpaceTravel}/>
            <Route exact path="/about-me" component={About}/>
          </Switch>
        </div> 
      )
  }
}

export default App;
