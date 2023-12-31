import { useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth/useAuth';
import { publicCategories, privateCategories } from './categories';

import {
  NoticeCategoriesNavList,
  NoticeCategoryItem,
  CategoriesWrap
} from './NoticesCategoriesNav.styled';

import PropTypes from 'prop-types';

export const NoticesCategoriesNav = ({ getCategoryParams }) => {
  const { isLoggedIn } = useAuth();
  const { search } = useLocation();

  return (
    <CategoriesWrap>
      <NoticeCategoriesNavList>
        {publicCategories.map(({ to, text, id, name }) => (
          <li key={id}>
            <NoticeCategoryItem to={{ pathname: to, search }} onClick={()=>getCategoryParams(name)}>
              {text}
            </NoticeCategoryItem>
          </li>
        ))}
      </NoticeCategoriesNavList>
      {isLoggedIn && (
        <NoticeCategoriesNavList>
          {privateCategories.map(({ to, text, id, name }) => (
            <li key={id}>
              <NoticeCategoryItem to={{ pathname: to, search }} onClick={()=>getCategoryParams(name)}>
                {text}
              </NoticeCategoryItem>
            </li>
          ))}
        </NoticeCategoriesNavList>
      )}
    </CategoriesWrap>
  );
};
NoticesCategoriesNav.propTypes = {
  getCategoryParams: PropTypes.func.isRequired,
};

