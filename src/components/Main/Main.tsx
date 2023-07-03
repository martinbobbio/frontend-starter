// React
import { Link } from 'react-router-dom';
// Utils
import { firstLetterUppercase } from '@/utils';
// Styled components
import { IconsContainer, MainStyled, Title } from './Main.styled';
import { useCopyToClipboard } from '@/hooks';
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
import { Typography } from '@mui/material';
// Hooks

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
  const { copyToClipboard } = useCopyToClipboard();

  const icons = [
    { icon: faGear, name: 'gear', animation: 'spin' },
    { icon: faCat, name: 'cat', animation: 'bounce' },
    { icon: faGhost, name: 'ghost', animation: 'flip' },
    { icon: faSpinner, name: 'spinner', animation: 'spin' },
    { icon: faLock, name: 'spinner', animation: 'shake' },
  ];

  return (
    <MainStyled>
      <Title onClick={() => copyToClipboard(title)}>
        <Typography variant='h3'>{firstLetterUppercase(title)}</Typography>
      </Title>
      <IconsContainer>
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
      </IconsContainer>
    </MainStyled>
  );
}

export default Main;
