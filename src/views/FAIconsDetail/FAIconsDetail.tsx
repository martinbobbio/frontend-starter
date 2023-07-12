// React
import { useParams } from 'react-router-dom';
// Components
import { Disclaimer } from '@/components';
// Styled components
import { FAIconsDetailStyled } from './FAIconsDetail.styled';

/**
 * Functional component that render component font awesome icon detail.
 *
 * @return React.ReactElement <FAIconsDetail/>
 */
const FAIconsDetail = () => {
  const { id } = useParams();
  const disclaimer = {
    title: `Frontend Starter - Icons > ${id}`,
  };
  return (
    <FAIconsDetailStyled>
      <Disclaimer title={disclaimer.title} />
    </FAIconsDetailStyled>
  );
};

export default FAIconsDetail;
