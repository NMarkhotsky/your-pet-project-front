import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Loader } from '../shared/components/Loader/Loader';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage/AddPetPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const NoticesCategoriesList = lazy(() =>
  import('../components/NoticesCategoriesList/NoticesCategoriesList')
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route index element={<Navigate to="sell" replace />} />
          <Route path=":categoryName" element={<NoticesPage />} />
          <Route
            path="favorite"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<NoticesCategoriesList />}
              />
            }
          />
          <Route
            path="own"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<NoticesCategoriesList />}
              />
            }
          />
        </Route>

        <Route path="/friends" element={<OurFriendsPage />} />

        <Route
          path="/add-pet"
          element={
            <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
          }
        />

        <Route
          path="/login"
          element={<PublicRoute redirectTo="/user" component={<LoginPage />} />}
        />

        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
