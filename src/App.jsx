import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { fetchCurrentUser } from './redux/auth/operations';
import { useTheme } from './hooks/useTheme/useTheme';
import { darkTheme, lightTheme } from './theme/theme';

function App() {
  const currentTheme = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <SharedLayout />
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  );
}

export default App;
