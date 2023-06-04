// Utils
import { firstLetterUppercase } from '@/utils';
// Styled components
import { MainStyled } from './Main.styled';
// Libreries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faCat, faGhost } from '@fortawesome/free-solid-svg-icons'

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
      <FontAwesomeIcon icon={faFaceSmile} />
      <FontAwesomeIcon icon={faCat} />
      <FontAwesomeIcon icon={faGhost} />
    </MainStyled>
  );
}

export default Main;
