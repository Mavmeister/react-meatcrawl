import React, { Component } from 'react';
import Menu from './components/Menu'
import Stateless from './components/StatelessComponent'
import State from './components/Stateful'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {

    return (
      <div>
        <Menu />
        <Stateless  />
        <State />
      </div>
    );
  }
}

export default App;
