import { useParams } from 'react-router-dom';
import { Disclaimer } from '@/components';
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
