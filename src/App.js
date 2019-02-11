import React, { Component } from 'react';
import './App.css';

import Step from './components/Step';

class App extends Component {
  render() {
    const stubStep = {
      title: 'Describe the problem',
      description: 'Write down words that relate to the problem.',
    }
    return (
      <div className="App">
        <div className="wrapper">
        <Step {...stubStep} />
        </div>  
      </div>
    );
  }
}

export default App;
