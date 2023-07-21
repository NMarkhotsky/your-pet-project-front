import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;
