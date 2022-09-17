import React from 'react';
import renderer from 'react-test-renderer';
import { Template } from './index';

describe('TemplateComponent', () => {
  it('itself render', () => {
    const component = renderer.create(
      <Template slot='test_name'>content</Template>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
