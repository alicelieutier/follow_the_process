import React, { Component } from 'react';
// import './Process.css';

import Step from './Step';

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [this.props.firstStep],
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
    const graph = this.props.graph;
    if (!graph.hasOwnProperty(nextID)) {
      throw new Error(`Trying to navigate to non-existent step id "${nextID}"`)
    }
    const newHistory = this.state.history.concat([nextID])
    this.setState({history: newHistory})
  }

  render() {
    const graph = this.props.graph;
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
      <div className="Process">
        <h1>{this.props.title}</h1>
          <Step
            {...currentStep}
            navigation={{
              ...navigationFunctions,
              nextSteps,
              canGoBack,
            }}
          />
      </div>
    );
  }
}

export default Process;
