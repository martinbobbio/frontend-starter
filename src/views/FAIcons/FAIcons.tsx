import { Link } from 'react-router-dom';
import { Disclaimer, FAIcon } from '@/components';
import { SupportedIconsAnimations, SupportedPages } from '@/constants';
import { useCopyToClipboard } from '@/hooks';
import { FAIconsStyled, IconsContainer } from './FAIcons.styled';
import {
  fa0,
  fa4,
  faCat,
  faGear,
  faGhost,
  faLock,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Functional component that render component fortawesome icons.
 *
 * @return React.ReactElement <FAIcons/>
 */
const FAIcons = () => {
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

  const disclaimer = {
    title: `Frontend Starter - Icons`,
  };

  return (
    <FAIconsStyled>
      <Disclaimer title={disclaimer.title} />
      <IconsContainer className='box'>
        {icons.map(({ icon, name, animation }, index) => (
          <Link
            to={SupportedPages.FAIconsDetail.replace(':id', name)}
            key={index}
            onClick={() => copyToClipboard(name)}
          >
            <FAIcon
              color='primary'
              size='xl'
              icon={icon}
              animation={animation}
            />
          </Link>
        ))}
        <br />
        <Link to='/lorem ipsum'>
          <FAIcon color='primary' size='xl' icon={fa4} />
          <FAIcon color='primary' size='xl' icon={fa0} />
          <FAIcon color='primary' size='xl' icon={fa4} />
        </Link>
      </IconsContainer>
    </FAIconsStyled>
  );
};

export default FAIcons;
