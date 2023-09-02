import { Helmet } from 'react-helmet';

interface SEOWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render high order component seo with their logic.
 *
 * @return React.ReactElement <SEOWrapper/>
 */
const SEOWrapper = ({ children }: SEOWrapperProps) => {
  return (
    <>
      <Helmet>
        <title>Frontend Starter</title>
        <meta name='description' content='Descripción de la página' />
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
