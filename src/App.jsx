import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { fetchCurrentUser } from './redux/auth/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <SharedLayout />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
