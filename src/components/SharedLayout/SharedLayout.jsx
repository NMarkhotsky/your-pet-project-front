import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';
import { Main } from './SharedLayout.styled';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { useAddPet } from '../../hooks';
import { Loader } from '../../shared/components/Loader/Loader';

function SharedLayout() {
  const { isRefreshing } = useAuth();
  const { moreInfo } = useAddPet();

  return (
    <>
      {isRefreshing || moreInfo.isLoad ? <Loader /> : null}
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
}

export default SharedLayout;
