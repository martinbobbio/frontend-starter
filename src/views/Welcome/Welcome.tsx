// React
import React from 'react';
import {useNavigate} from 'react-router-dom';
// Componetns
import {Button} from '@components';
// Style
import withStyle from './Welcome.styled';


// Component's props
export interface Props {
  className?: string;
}

/**
 * @function Welcome
 * @param object className for styled component
 * @return Functional component
 */
const Welcome = ({className}: Props): React.ReactElement<Props> => {
  // Vars
  const navigate = useNavigate();

  // Render

  return (
    <div className={className}>
      <Button onClick={():void => navigate('/home')}>Welcome</Button>
    </div>
  );
};

export default React.memo(withStyle(Welcome));
