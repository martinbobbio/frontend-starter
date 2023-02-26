// React
import React from 'react';
// Components
import {SEOWrapper} from './components';
// Style
import withStyle from './AppWrapper.styled';

// Component's props
export interface Props {
  className?: string;
  children?: React.ReactNode;
  tag: string;
}

/**
 * Functional component that render view home.
 *
 * @param className for style and adding classes.
 * @param children for render element.
 * @param tag for idenfify view.
 * @return React.ReactElement <AppWrapper/>
 */
const AppWrapper = ({children, className, tag}: Props): React.ReactElement<Props> => {
  // Functions

  // Render

  return (
    <div className={className}>
      <SEOWrapper tag={tag}/>
      {children}
    </div>
  );
};

export default React.memo(withStyle(AppWrapper));
