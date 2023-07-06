// React
import { useParams } from 'react-router-dom';
// Components
import { Main } from '@/components';
// Styled components
import { DetailStyled } from './Detail.styled';

function Home() {
  const { id } = useParams();
  return (
    <DetailStyled>
      <Main title={`Page ${id}`} />
    </DetailStyled>
  );
}

export default Home;
