// React
import React, {Suspense} from 'react';
import {render} from 'react-dom';
// Components
import {AppWrapper} from '@components';
// Context
import {AppContext} from '@contexts';

describe('Unit Tests - AppWrapper Component', () => {
  let container: HTMLDivElement;

  const createElement = (element: React.ReactElement) => {
    container = document.createElement('div');
    document.body.appendChild(container);
    render(wrapElementWithContext(element), container);
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
      <AppWrapper className='app-wrapper'>
        Test AppWrapper
      </AppWrapper>,
  ));

  afterEach(() => removeElement());

  it('should handle health: ', () => {
    expect(container).toBeInTheDocument();
  });
});
