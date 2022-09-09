// React
import React from 'react';
// Style
import withStyle from './Button.styled';

// Component's props
export interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void | Promise<void | boolean>;
}

/**
 * @function Button
 * @param object className for styled component
 * @return Functional component with the button and redirect or logic
 */
const Button = ({children, className, onClick}: Props): React.ReactElement<Props> => {
  // Functions

  const _onClick = (): void => {
    onClick && onClick();
  };

  // Render

  return (
    <button className={className} onClick={_onClick}>
      {children}
    </button>
  );
};

export default React.memo(withStyle(Button));
