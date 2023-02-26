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
 * Functional component that render view welcome.
 *
 * @param className for style and adding classes.
 * @return React.ReactElement <Welcome/>
 */
const Welcome = ({className}: Props): React.ReactElement<Props> => {
  // Vars
  const navigate = useNavigate();

  // Render

  return (
    <div className={className}>
      <Button className='bg-green-700 m-5' onClick={() => navigate('/home')}>Welcome</Button>
    </div>
  );
};

export default React.memo(withStyle(Welcome));
