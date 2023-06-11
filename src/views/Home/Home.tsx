// Components
import { Header, Main } from '@/components';
// Styled components
import { HomeStyled } from './Home.styled';

function Home() {
  return (
    <HomeStyled>
      <Header />
      <Main title='Frontend Starter' />
    </HomeStyled>
  );
}

export default Home;
