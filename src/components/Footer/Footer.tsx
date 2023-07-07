// Components
import { Text } from '..';
// Constants
import { SupportedWeights } from '@/constants';
import { version } from '../../../package.json';
// Styled components
import { FooterStyled } from './Footer.styled';

/**
 * Functional component that render component footer.
 *
 * @return React.ReactElement <Footer/>
 */
const Footer = () => {
  return (
    <FooterStyled>
      <Text fontWeight={SupportedWeights.Medium}>
        Frontend Starter v{version}
      </Text>
      <Text fontWeight={SupportedWeights.Medium}>
        Powered by React and ViteJS
      </Text>
      <Text fontWeight={SupportedWeights.Medium}>
        Developed by Martin Bobbio
      </Text>
    </FooterStyled>
  );
};

export default Footer;
