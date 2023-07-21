import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';
import NoticesPage from './pages/NoticesPage/NoticesPage';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import UserPage from './pages/UserPage/UserPage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import NewsPage from './pages/NewsPage/NewsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
      </Route>

      <Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route>
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
      </Route>

      <Route path="/news" element={<NewsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
