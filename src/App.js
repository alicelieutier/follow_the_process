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
        <Step {...stubStep} />
      </div>
    );
  }
}

export default App;
