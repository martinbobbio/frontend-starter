// Constants
import {
  SupportedColors,
  SupportedIconsAnimations,
  SupportedSizes,
} from '@/constants';
// Styled components
import { FAIconStyled } from './FAIcon.styled';
// Libreries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Component props
interface IconProps {
  icon: IconDefinition;
  animation?: `${SupportedIconsAnimations}`;
  size?: `${SupportedSizes}`;
  color?: `${SupportedColors}`;
}

/**
 * Functional component that render component font awesome icon.
 *
 * @return React.ReactElement <FAIcon/>
 */
const FAIcon = ({
  icon,
  animation,
  size = 'md',
  color = 'default',
}: IconProps) => {
  return (
    <FAIconStyled
      className='icon'
      _color={color}
      _size={size}
      data-testid='Icon'
    >
      <FontAwesomeIcon icon={icon} className={`fa-${animation}`} />
    </FAIconStyled>
  );
};

export default FAIcon;
