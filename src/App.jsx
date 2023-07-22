import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import SharedLayout from './components/SharedLayout/SharedLayout';
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <SharedLayout />
      <UserPage/>
    </>
  );
}

export default App;
