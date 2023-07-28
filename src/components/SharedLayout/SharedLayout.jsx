// import { useState } from 'react';
import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';
import { Main } from './SharedLayout.styled';
import { Footer } from '../Footer/Footer';

function SharedLayout() {
  return (
    <>
      <Header />
      <Main>
        
        <AppRoutes />
        <Footer />
      </Main>
    </>
  );
}

export default SharedLayout;
