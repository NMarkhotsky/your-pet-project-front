// import { useLocation, Link } from 'react-router-dom';

// import { useAuth } from '../../hooks/useAuth/useAuth';
// import { publicCategories, privateCategories } from './categories';

import {
  Wrapper,
  NoticeCategoriesNavList,
  NoticeCategoryItem,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  // const { isLoggedIn } = useAuth();
  // const { pathname, search } = useLocation();

  return (
    <Wrapper>
      <NoticeCategoriesNavList>
        <NoticeCategoryItem>sell</NoticeCategoryItem>
        <NoticeCategoryItem>lost/found</NoticeCategoryItem>
        <NoticeCategoryItem>in good hands</NoticeCategoryItem>
        <NoticeCategoryItem>favorite ads</NoticeCategoryItem>
        <NoticeCategoryItem>my ads</NoticeCategoryItem>
      </NoticeCategoriesNavList>
    </Wrapper>

    // <div>
    //   <ul>
    //     {publicCategories.map(({ to, text, id }) => (
    //       <li key={id}>
    //         <Link to={{ pathname: to, search }}>{text}</Link>
    //       </li>
    //     ))}
    //   </ul>
    //   {isLoggedIn && (
    //     <ul>
    //       {privateCategories.map(({ to, text, id }) => (
    //         <li key={id}>
    //           <Link to={{ pathname: to, search }}>{text}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
};
