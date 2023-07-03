// Assets
import { brandingReact, brandingVite } from '@/assets';
// Styled components
import { DisclaimerStyled } from './Disclaimer.styled';

/**
 * Functional component that render component disclaimer.
 *
 * @return React.ReactElement <Disclaimer/>
 */
const Disclaimer = () => {
  return (
    <DisclaimerStyled data-testid='Disclaimer'>
      <a href='https://vitejs.dev' target='_blank'>
        <img src={brandingVite} />
      </a>
      <a href='https://react.dev' target='_blank'>
        <img src={brandingReact} />
      </a>
    </DisclaimerStyled>
  );
};

export default Disclaimer;
