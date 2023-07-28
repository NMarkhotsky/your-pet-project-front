import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';
import { Main } from './SharedLayout.styled';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { Loader } from '../../shared/components/Loader/Loader';

function SharedLayout() {
  const { isRefreshing } = useAuth();
  return (
    <>
      {isRefreshing ? <Loader /> : null}
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
}

export default SharedLayout;
