import React from 'react';
import ReactDOM from 'react-dom';
import Step from './Step';

const stepData = {
  title: 'Title',
  description: 'Description',
  navigation: {
    nextSteps: [],
    canGoBack: true,
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Step {...stepData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
