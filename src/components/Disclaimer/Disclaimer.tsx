// Assets
import { brandingReact, brandingVite } from '@/assets';
// Components
import { Text } from '@/components';
// Utils
import { firstLetterUppercase } from '@/utils';
// Styled components
import { DisclaimerStyled, TitleContainer } from './Disclaimer.styled';

// Component props
interface DisclaimerProps {
  title: string;
}

/**
 * Functional component that render component disclaimer.
 *
 * @return React.ReactElement <Disclaimer/>
 */
const Disclaimer = ({ title }: DisclaimerProps) => {
  return (
    <DisclaimerStyled>
      <a href='https://vitejs.dev' target='_blank'>
        <img src={brandingVite} />
      </a>
      <a href='https://react.dev' target='_blank'>
        <img src={brandingReact} />
      </a>
      <TitleContainer>
        <Text fontWeight='medium' size='xl'>
          {firstLetterUppercase(title)}
        </Text>
      </TitleContainer>
    </DisclaimerStyled>
  );
};

export default Disclaimer;
