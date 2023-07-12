// Styled components
import { FetchWrapperStyled } from './FetchWrapper.styled';
// Libreries
import { SWRConfig, SWRConfiguration } from 'swr';

// Component props
interface FetchWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render component swr wrapper with their logic.
 *
 * @return React.ReactElement <FetchWrapper/>
 */
const FetchWrapper = ({ children }: FetchWrapperProps) => {
  const swrOptions: SWRConfiguration = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  };

  return (
    <FetchWrapperStyled data-testid='FetchWrapper'>
      <SWRConfig value={swrOptions}>{children}</SWRConfig>
    </FetchWrapperStyled>
  );
};

export default FetchWrapper;
