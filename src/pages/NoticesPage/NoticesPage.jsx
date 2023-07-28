import { Outlet } from 'react-router-dom';

function NoticesPage() {
  return (
    <>
      <h1>NoticesPage</h1>
      <Outlet />
    </>
  );
}

export default NoticesPage;
// import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
// import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
// // import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

// import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
// import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';

// import { useAuth } from '../../hooks/useAuth/useAuth';
// import { applySearchParams, getFilterValues } from '../../utils';

// import { FilterWrapper } from './NoticesPage.styled';
// import { TitlePage } from '../../shared/components/TitlePage/TitlePage';

// const PER_PAGE = 12;

// function NoticesPage() {
//   const [items, setItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   // const [isLoading, setIsLoading] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const { isLoggedIn, user } = useAuth();
//   // const dispatch = useDispatch();

//   const { pathname } = useLocation();
//   const prevPathname = useRef(pathname);

//   const search = searchParams.get('search');
//   const gender = searchParams.get('gender');
//   const age = searchParams.get('age');
//   const page = searchParams.get('page');

//   const resetPage = useCallback(() => {
//     searchParams.set('page', 1);
//     setSearchParams(searchParams);
//   }, [searchParams, setSearchParams]);

//   const handleFilterChange = target => {
//     applySearchParams(target, searchParams, setSearchParams);
//     resetPage();
//   };

//   const handleFilterReset = value => {
//     if (value === 'male' || value === 'female') {
//       searchParams.delete('gender');
//     } else {
//       searchParams.delete('age');
//     }

//     setSearchParams(searchParams);
//     resetPage();
//   };

//   const handleSubmit = ({ search }) => {
//     searchParams.set('search', search);
//     setSearchParams(searchParams);
//     resetPage();
//   };

//   // const handlePageClick = e => {
//   //   searchParams.set('page', e.selected + 1);
//   //   setSearchParams(searchParams);
//   // };

//   const handleClear = () => {
//     searchParams.delete('search', search);
//     setSearchParams(searchParams);
//     resetPage();
//   };

//   const getApiNotices = useCallback(async () => {
//     const path = pathname.split('/');
//     const category = path[path.length - 1];

//     try {
//       const { pets, total } = await getNotices({
//         category,
//         search,
//         gender,
//         page,
//         limit: PER_PAGE,
//         age,
//       });

//       if (pets.length === 0 && total) {
//         // for cases when there is no more cards for current page
//         // return and trigger next render
//         searchParams.set('page', page - 1);
//         setSearchParams(searchParams);
//         return;
//       }

//       if (total === 0) {
//         setItems([]);
//         resetPage();
//         setSearchParams(searchParams);
//         // setIsLoading(false);
//         return;
//       }

//       setPageCount(Math.ceil(total / PER_PAGE));
//       setItems(pets);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       // setIsLoading(false);
//     }
//   }, [
//     age,
//     gender,
//     page,
//     pathname,
//     search,
//     resetPage,
//     searchParams,
//     setSearchParams,
//   ]);

//   const filters = useMemo(() => getFilterValues(searchParams), [searchParams]);

//   return (
//     <>
//       <TitlePage>Find your favorite pet</TitlePage>
//       <FilterWrapper>
//         <NoticesCategoriesNav searchParams={searchParams} />
//         <NoticesFilters filters={filters} onFilter={handleFilterChange} />
//       </FilterWrapper>
//       <Outlet />
//     </>
//   );
// }

// export default NoticesPage;
