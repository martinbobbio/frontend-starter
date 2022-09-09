// React
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
// Components
import {Button} from '@components';
// Context
import {AppContext} from '@contexts';
// Libraries
import {fireEvent} from '@testing-library/react';

describe('Unit Tests - Button Component', () => {
  let container: HTMLDivElement;
  const onClickEvent = jest.fn();

  const createElement = (element: React.ReactElement) => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(wrapElementWithContext(element), container);
  };

  const removeElement = () => {
    document.body.removeChild(container);
    container.remove();
  };

  const wrapElementWithContext = (element: React.ReactElement) => (
    <AppContext>
      <Suspense fallback="">
        {element}
      </Suspense>
    </AppContext>
  );

  beforeEach(() => createElement(
      <Button className='button' onClick={onClickEvent}>
        Test Button
      </Button>,
  ));

  afterEach(() => removeElement());

  it('should handle health: ', () => {
    expect(container).toBeInTheDocument();
  });

  it('should handle elements: ', () => {
    const elementTargeted = container.getElementsByClassName('button')[0];
    expect(elementTargeted).toBeInTheDocument();
    expect(elementTargeted.hasChildNodes).toBeTruthy();
    expect(elementTargeted.innerHTML).toBe('Test Button');
  });

  it('should handle styles basics: ', () => {
    const styles = window.getComputedStyle(container.children[0]);
    expect(styles.width).toBe('100px');
    expect(styles.height).toBe('50px');
    expect(styles.background).toBe('red');
  });

  it('should handle events: ', () => {
    fireEvent.click(container.children[0]);
    expect(onClickEvent).toHaveBeenCalled();
  });
});
