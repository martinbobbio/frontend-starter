// React
import React from 'react';
import {useNavigate} from 'react-router-dom';
// Componetns
import {Button} from '@components';

// Component's props
export interface Props {
  className?: string;
}

/**
 * @function Home
 * @param object className for styled component
 * @return Functional component
 */
const Home = ({className}: Props): React.ReactElement<Props> => {
  // Vars
  const navigate = useNavigate();

  // Render

  return (
    <div className={className}>
      <Button onClick={():void => navigate('/')}>Home</Button>
    </div>
  );
};

export default React.memo(Home);
