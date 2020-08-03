import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ShowMoreButton from './show-more-button';

configure({
  adapter: new Adapter(),
});

describe(`ShowMoreButton e2e tests`, () => {
  it(`Should button be clicked`, () => {
    const onShowMoreButtonClick = jest.fn();

    const mainComponent = shallow(<ShowMoreButton
      onShowMoreButtonClick={onShowMoreButtonClick}
    />);

    const showMoreButton = mainComponent.find(`.catalog__button`);
    showMoreButton.simulate(`click`, {
      preventDefault: onShowMoreButtonClick
    });

    expect(onShowMoreButtonClick.mock.calls.length).toBe(2);
  });
});
