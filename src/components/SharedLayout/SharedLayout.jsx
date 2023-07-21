// import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';
import { Container } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <Container>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </Container>
  );
}

export default SharedLayout;
