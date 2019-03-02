import React from 'react';
import './App.css';

import Process from './processes/Process';
import Footer from './footer/Footer';
import Header from './header/Header';

// these constants are stubs that will eventually be replaced by API calls
const processes = [
  {
    title: 'Unblock yourself',
    graph: {
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
    },
    firstStep: 'a'
  },
  {
    title: 'Debugging',
    graph: {
      a: {
        title: 'Describe the problem',
        description: 'Read the error message, or describe the action that went wrong.',
        nextSteps: ['c']
      },
      c: {
        title: 'Draw a diagram of the system',
        description: 'Use these words to diagram what you believe might be happening.',
        nextSteps: ['d']
      },
      d: {
        title: 'Get visibility',
        description: 'p everywhere. Write down what you\'d expect each p to return.',
        nextSteps: ['e']
      },
      e: {
        title: 'Tighten the loop',
        description: 'find the first p that went wrong. now reduce you search space to between the last that went right and the first that went well',
        nextSteps: ['d']
      }
    },
    firstStep: 'a'
  }
]

const App = () => (
  <div className="App">
    <Header />
    <div className="wrapper">
      {processes.map(({title, graph, firstStep}) => (
        <Process
          title={title}
          graph={graph}
          firstStep={firstStep}
        />
      ))}
    </div> 
    <Footer /> 
  </div>
)


export default App;
