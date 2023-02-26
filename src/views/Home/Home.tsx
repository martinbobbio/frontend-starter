// React
import React from 'react';
import {useNavigate} from 'react-router-dom';
// Componetns
import {Button} from '@components';
// Style
import withStyle from './Home.styled';

// Component's props
export interface Props {
  className?: string;
}

/**
 * Functional component that render view home.
 *
 * @param className for style and adding classes.
 * @return React.ReactElement <Home/>
 */
const Home = ({className}: Props): React.ReactElement<Props> => {
  // Vars
  const navigate = useNavigate();

  // Render

  return (
    <div className={className}>
      <Button className='bg-green-700 m-5' onClick={() => navigate('/')}>Home</Button>
    </div>
  );
};

export default React.memo(withStyle(Home));
