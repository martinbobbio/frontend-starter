import { Disclaimer } from '@/components';
import { NotFoundStyled } from './NotFound.styled';

/**
 * Functional component that render component not found.
 *
 * @return React.ReactElement <NotFound/>
 */
const NotFound = () => {
  const disclaimer = {
    title: `Frontend Starter - Not Found`,
  };
  return (
    <NotFoundStyled>
      <Disclaimer title={disclaimer.title} />
    </NotFoundStyled>
  );
};

export default NotFound;
