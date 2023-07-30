import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { fetchCurrentUser } from './redux/auth/operations';
import { useTheme } from './hooks/useTheme/useTheme';
import { darkTheme, lightTheme } from './theme/theme';
import { useFont } from './hooks/useFonts';
import { fonts } from './constants/fonts';
import { Loader } from './shared/components/Loader/Loader';
import { googleAuth } from './redux/auth/authSlice';

function App() {
  const fontsLoaded = useFont(fonts);
  const currentTheme = useTheme();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      dispatch(googleAuth(token));
      setSearchParams('');
    }

    dispatch(fetchCurrentUser());
  }, [dispatch, setSearchParams, token]);

  return fontsLoaded ? (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <SharedLayout />
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  ) : (
    <Loader />
  );
}

export default App;
