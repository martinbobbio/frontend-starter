// React
import React from 'react';
// Style
import withStyle from './SEOWrapper.styled';
// Utils
import {firstLetterUppercase} from '@utils';
// Libreries
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Component's props
export interface Props {
  tag?: string;
}

/**
 * Functional component that render component button.
 *
 * @param tag for identify view.
 * @return React.ReactElement <SEOWrapper/>
 */
const SEOWrapper = ({tag}: Props): React.ReactElement<Props> => {
  // Render

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Frontend Starter ${tag && `- ${firstLetterUppercase(tag)}`}`}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default React.memo(withStyle(SEOWrapper));
