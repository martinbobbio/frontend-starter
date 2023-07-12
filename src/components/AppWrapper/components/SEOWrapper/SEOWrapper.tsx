// Styled components
import { SEOWrapperStyled } from './SEOWrapper.styled';
import { Helmet } from 'react-helmet';

// Component props
interface SEOWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render component seo wrapper with their logic.
 *
 * @return React.ReactElement <SEOWrapper/>
 */
const SEOWrapper = ({ children }: SEOWrapperProps) => {
  return (
    <SEOWrapperStyled data-testid='SEOWrapper'>
      <Helmet>
        <title>Frontend Starter</title>
        <meta name='description' content='Descripción de la página' />
      </Helmet>
      {children}
    </SEOWrapperStyled>
  );
};

export default SEOWrapper;
