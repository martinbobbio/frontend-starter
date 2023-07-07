// Constants
import { SupportedColors, SupportedSizes, SupportedWeights } from '@/constants';
// Styled components
import { TextStyled } from './Text.styled';

// Component props
interface TextProps {
  children: React.ReactNode;
  size?: SupportedSizes;
  fontWeight?: SupportedWeights;
  color?: SupportedColors;
}

/**
 * Functional component that render component text.
 *
 * @return React.ReactElement <Text/>
 */
const Text = ({
  children,
  size = SupportedSizes.MD,
  fontWeight = SupportedWeights.Low,
  color = SupportedColors.Default,
}: TextProps) => {
  return (
    <TextStyled
      className='text'
      _color={color}
      _size={size}
      _weight={fontWeight}
      data-testid='Text'
    >
      {children}
    </TextStyled>
  );
};

export default Text;
