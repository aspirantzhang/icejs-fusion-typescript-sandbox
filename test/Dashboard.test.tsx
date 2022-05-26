import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../src/pages/Dashboard';

describe('unit test', () => {
  test('snapshot test', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
