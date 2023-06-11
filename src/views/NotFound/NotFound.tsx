// Components
import { Header, Main } from '@/components';
// Styled components
import { NotFoundStyled } from './NotFound.styled';

function NotFound() {
  return (
    <NotFoundStyled>
      <Header />
      <Main title='Not Found' />
    </NotFoundStyled>
  );
}

export default NotFound;
