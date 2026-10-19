import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth/useAuth';
import { publicCategories, privateCategories } from './categories';

import {
  NoticeCategoriesNavList,
  NoticeCategoryItem,
  CategoriesWrap
} from './NoticesCategoriesNav.styled';


export const NoticesCategoriesNav = () => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  params.delete('page');
  const search = params.toString();

  return (
    <CategoriesWrap>
      <NoticeCategoriesNavList>
        {publicCategories.map(({ to, text, id }) => (
          <li key={id}>
            <NoticeCategoryItem to={{ pathname: to, search }}>
              {t(`category_${text}`)}
            </NoticeCategoryItem>
          </li>
        ))}
      </NoticeCategoriesNavList>
      {isLoggedIn && (
        <NoticeCategoriesNavList>
          {privateCategories.map(({ to, text, id }) => (
            <li key={id}>
              <NoticeCategoryItem to={{ pathname: to, search }}>
                {t(`category_${text}`)}
              </NoticeCategoryItem>
            </li>
          ))}
        </NoticeCategoriesNavList>
      )}
    </CategoriesWrap>
  );
};
