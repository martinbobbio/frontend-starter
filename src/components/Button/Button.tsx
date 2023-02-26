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
 * Functional component that render component button.
 *
 * @param className for style and adding classes.
 * @param children for render element.
 * @param onClick for handle on click event.
 * @return React.ReactElement <Button/>
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
