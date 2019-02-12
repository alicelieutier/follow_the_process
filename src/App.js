import React, { Component } from 'react';
import './App.css';

import Step from './components/Step';

const flow = [
  {
    title: 'Describe the problem 1',
    description: 'Write down words that relate to the problem.',
  },
  {
    title: 'Describe the problem 2',
    description: 'Write down words that relate to the problem.',
  },
  {
    title: 'Describe the problem 3',
    description: 'Write down words that relate to the problem.',
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentStep: 0};
  }

  next() {
    if (this.state.currentStep < flow.length - 1) {
      this.setState({currentStep: this.state.currentStep + 1})
      return true;
    }
    return false;
  }

  prev() {
    if (this.state.currentStep > 0) {
      this.setState({currentStep: this.state.currentStep - 1})
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
        <Step {...flow[this.state.currentStep]} prev={() => this.prev()} next={() => this.next()} />
        </div>  
      </div>
    );
  }
}

export default App;
