// Utils
import { firstLetterUppercase } from '@/utils';
// Styled components
import { MainStyled } from './Main.styled';

// Component props
interface MainProps {
  title: string;
}

/**
 * Functional component that render component Main.
 *
 * @return React.ReactElement <Main/>
 */
function Main({ title }: MainProps) {
  return (
    <MainStyled>
      <h1>{firstLetterUppercase(title)}</h1>
    </MainStyled>
  );
}

export default Main;
