// import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default SharedLayout;
