// Components
import { Header, Main } from '@/components';
// Styled components
import { AppStyled } from './App.styled';

function App() {
  return (
    <AppStyled>
      <Header />
      <Main title='Frontend Starter' />
    </AppStyled>
  );
}

export default App;
