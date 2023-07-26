import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';
import { Main } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
}

export default SharedLayout;
