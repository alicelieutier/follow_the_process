import React, { Component } from 'react';
import './App.css';

import Step from './components/Step';
import Footer from './components/Footer';
import Header from './components/Header';

// these constants are stubs that will eventually be replaced by API calls
const graph = {
  a: {
    title: 'Describe the problem',
    description: 'Write down words that relate to the problem.',
    nextSteps: ['b', 'c']
  },
  b: {
    title: 'Google these words',
    description: 'Enter these terms in google and read through the results.',
    nextSteps: ['c']
  },
  c: {
    title: 'Draw a diagram of the system',
    description: 'Use these words to diagram what you believe might be happening.',
    nextSteps: ['a']
  }
}

const firstStepID = 'a'
// end of stubs

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [firstStepID],
    };
  }

  getCurrentStep() {
    return this.state.history.slice(-1)[0]
  }

  prev() {
    if (this.state.history.length <= 1) {
      throw new Error(`No step to go back to`)
    }
    const newHistory = this.state.history.slice(0,-1)
    this.setState({history: newHistory})
  }

  chooseNext(nextID) {
    if (!graph.hasOwnProperty(nextID)) {
      throw new Error(`Trying to navigate to non-existent step id "${nextID}"`)
    }
    const newHistory = this.state.history.concat([nextID])
    this.setState({history: newHistory})
  }

  render() {
    const currentStep = graph[this.getCurrentStep()];
    const nextSteps = currentStep.nextSteps.map((stepID) => ({
      id: stepID,
      title: graph[stepID].title,
    }))
    const navigationFunctions = {
      prev: () => this.prev(),
      next: (id) => this.chooseNext(id)
    }
    const canGoBack = (this.state.history.length > 1)
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Step
            {...currentStep}
            navigation={{
              ...navigationFunctions,
              nextSteps,
              canGoBack,
            }}
          />
        </div> 
        <Footer /> 
      </div>
    );
  }
}

export default App;
