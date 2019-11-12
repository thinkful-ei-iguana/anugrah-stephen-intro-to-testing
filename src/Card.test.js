import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Card 
      key={Card.id}
      title={Card.title}
      content={Card.content}
      />, div);

      ReactDOM.unmountComponentAtNode(div);
  });
});

describe('<Card />', () => {
  it('renders the UI as expected', () => {
    const card = renderer.create(<Card />).toJSON();
    expect(card).toMatchSnapshot();
  });
});