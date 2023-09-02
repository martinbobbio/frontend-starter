import { Disclaimer } from '@/components';
import { HomeStyled } from './Home.styled';

/**
 * Functional component that render component home.
 *
 * @return React.ReactElement <Home/>
 */
const Home = () => {
  const disclaimer = {
    title: `Frontend Starter`,
  };
  return (
    <HomeStyled>
      <Disclaimer title={disclaimer.title} />
    </HomeStyled>
  );
};

export default Home;
