import React, { Component } from 'react'
import { ReactRouter, BrowserRouter as Router, Route}  from 'react-router-dom'
import { Switch } from 'react-router'

import Menu from './components/Menu'
// import Stateless from './components/StatelessComponent'
// import State from './components/Stateful'
import Nav from './components/Nav'
import Home from './components/Home'
import Battle from './components/Battle'
import Results from './components/Results'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {

    return (
      <Router>
      <div className='container'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/battle' component={Battle} />
        <Route path='/battle/results' component={Results} />
        <Route render={ () => <p className='not-found'> Not Found </p> } />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
