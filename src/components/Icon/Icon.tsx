// Constants
import {
  SupportedColors,
  SupportedIconsAnimations,
  SupportedSizes,
} from '@/constants';
// Styled components
import { IconStyled } from './Icon.styled';
// Libreries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Component props
interface IconProps {
  icon: IconDefinition;
  animation?: SupportedIconsAnimations;
  size?: SupportedSizes;
  color?: SupportedColors;
}

/**
 * Functional component that render component icon.
 *
 * @return React.ReactElement <Icon/>
 */
const Icon = ({
  icon,
  animation,
  size = SupportedSizes.MD,
  color = SupportedColors.Typography,
}: IconProps) => {
  return (
    <IconStyled className='icon' _color={color} _size={size} data-testid='Icon'>
      <FontAwesomeIcon icon={icon} className={`fa-${animation}`} />
    </IconStyled>
  );
};

export default Icon;
