// React
import { Link } from 'react-router-dom';
// Components
import { Icon, Text } from '..';
// Constants
import {
  SupportedColors,
  SupportedIconsAnimations,
  SupportedSizes,
  SupportedWeights,
} from '@/constants';
// Hooks
import { useCopyToClipboard } from '@/hooks';
// Utils
import { firstLetterUppercase } from '@/utils';
// Styled components
import { IconsContainer, MainStyled, TitleContainer } from './Main.styled';
// Libreries
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
 * Functional component that render component main.
 *
 * @return React.ReactElement <Main/>
 */
const Main = ({ title }: MainProps) => {
  const { copyToClipboard } = useCopyToClipboard();

  const icons = [
    { icon: faGear, name: 'gear', animation: SupportedIconsAnimations.Spin },
    { icon: faCat, name: 'cat', animation: SupportedIconsAnimations.Bounce },
    { icon: faGhost, name: 'ghost', animation: SupportedIconsAnimations.Flip },
    {
      icon: faSpinner,
      name: 'spinner',
      animation: SupportedIconsAnimations.Spin,
    },
    {
      icon: faLock,
      name: 'spinner',
      animation: SupportedIconsAnimations.Shake,
    },
  ];

  return (
    <MainStyled>
      <TitleContainer onClick={() => copyToClipboard(title)}>
        <Text fontWeight={SupportedWeights.Medium} size={SupportedSizes.XL}>
          {firstLetterUppercase(title)}
        </Text>
      </TitleContainer>
      <IconsContainer>
        {icons.map(({ icon, name, animation }, index) => (
          <Link to={`/detail/${name}`} key={index}>
            <Icon
              color={SupportedColors.Primary}
              size={SupportedSizes.XL}
              icon={icon}
              animation={animation}
            />
          </Link>
        ))}
        <br />
        <Link to='/lorem ipsum'>
          <Icon
            color={SupportedColors.Primary}
            size={SupportedSizes.XL}
            icon={fa4}
          />
          <Icon
            color={SupportedColors.Primary}
            size={SupportedSizes.XL}
            icon={fa0}
          />
          <Icon
            color={SupportedColors.Primary}
            size={SupportedSizes.XL}
            icon={fa4}
          />
        </Link>
      </IconsContainer>
    </MainStyled>
  );
};

export default Main;
