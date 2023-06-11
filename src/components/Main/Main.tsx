// React
import { Link } from 'react-router-dom';
// Utils
import { firstLetterUppercase } from '@/utils';
// Styled components
import { MainStyled } from './Main.styled';
// Libreries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faCat,
  faGhost,
  faSpinner,
  faLock,
  fa4,
  fa0,
} from '@fortawesome/free-solid-svg-icons';

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
  const icons = [
    { icon: faGear, name: 'gear', animation: 'spin' },
    { icon: faCat, name: 'cat', animation: 'bounce' },
    { icon: faGhost, name: 'ghost', animation: 'flip' },
    { icon: faSpinner, name: 'spinner', animation: 'spin' },
    { icon: faLock, name: 'spinner', animation: 'shake' },
  ];

  return (
    <MainStyled>
      <h1>{firstLetterUppercase(title)}</h1>
      {icons.map(({ icon, name, animation }, index) => (
        <Link to={`/detail/${name}`} key={index}>
          <FontAwesomeIcon icon={icon} className={`fa-${animation}`} />
        </Link>
      ))}
      <br />
      <Link to='/lorem ipsum'>
        <FontAwesomeIcon icon={fa4} />
        <FontAwesomeIcon icon={fa0} />
        <FontAwesomeIcon icon={fa4} />
      </Link>
    </MainStyled>
  );
}

export default Main;
