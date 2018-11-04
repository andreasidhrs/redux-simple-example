import React from 'react';
import ClickButton from './ClickButton';
import renderer from 'react-test-renderer';

describe('ClickButton', () => {

  beforeEach(() => console.log('before'));
  afterEach(() => console.log('after'));

  it('should render correctly', () => {
    const tree = renderer
      .create(<clickbutton/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
