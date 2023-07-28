import { useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth/useAuth';
import { publicCategories, privateCategories } from './categories';

import {
  NoticeCategoriesNavList,
  NoticeCategoryItem,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  const { search } = useLocation();

  return (
    <>
      <NoticeCategoriesNavList>
        {publicCategories.map(({ to, text, id }) => (
          <li key={id}>
            <NoticeCategoryItem to={{ pathname: to, search }}>
              {text}
            </NoticeCategoryItem>
          </li>
        ))}
      </NoticeCategoriesNavList>
      {isLoggedIn && (
        <NoticeCategoriesNavList>
          {privateCategories.map(({ to, text, id }) => (
            <li key={id}>
              <NoticeCategoryItem to={{ pathname: to, search }}>
                {text}
              </NoticeCategoryItem>
            </li>
          ))}
        </NoticeCategoriesNavList>
      )}
    </>
  );
};
