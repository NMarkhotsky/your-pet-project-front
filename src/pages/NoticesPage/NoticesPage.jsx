import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { SearchInput } from '../../shared/components/SearchInput/SearchInput';
import { getAllNotices, getSelfNotices, getFavoriteNotices, deleteNotice } from '../../services/NoticesApi';
import { CATEGORIES_RENDER } from '../../constants/globalConstants';
import { FilterNavBar, SectionNoticesPage, TitleWrap } from './NoticesPage.styled';
import { Pagination } from '../../components/Pagination/Pagination';
import { TitlePage } from '../../shared/components/TitlePage/TitlePage';
import { scrollToTop } from '../../utils/scrollToTop';
import { errorMessage, successMessage } from '../../utils/messages';
import { getErrorMessage } from '../../services/api';
import { NoInfoPart } from '../../components/NoInfoPart/NoInfoPart';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import NoticeCardSkeleton from '../../shared/components/Skeleton/NoticeCardSkeleton/NoticeCardSkeleton';
import { RequestError } from '../../shared/components/RequestError/RequestError';
import { useResource } from '../../hooks/useResource';
import { useAuth } from '../../hooks/useAuth/useAuth';

const categories = { sell: 'sell', 'lost-found': 'lost-or-found', 'for-free': 'in-good-hands', favorite: 'favorite', own: 'my-ads' };
const LIMIT = 12;
function NoticesPage() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  const category = categories[pathname.split('/').pop()];
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const [searchValue, setSearchValue] = useState(search);
  const [revision, setRevision] = useState(0);
  const requestedPage = Number(searchParams.get('page'));
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const params = { ...Object.fromEntries(searchParams), category, page, limit: LIMIT };
  const fetcher = category === 'favorite' ? getFavoriteNotices : category === 'my-ads' ? getSelfNotices : getAllNotices;
  const { data, isLoading, error } = useResource(fetcher, params, `${revision}:${isLoggedIn}`);
  const notices = (data?.data || []).map(item => ({ ...item, noticeType: CATEGORIES_RENDER[item.noticeType] || item.noticeType }));
  const pageCount = Math.ceil((data?.total || 0) / LIMIT);
  useEffect(() => setSearchValue(search), [search]);
  const updateParams = useCallback(values => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      Object.entries(values).forEach(([key, value]) => value ? next.set(key, value) : next.delete(key));
      return next;
    });
  }, [setSearchParams]);
  useEffect(() => {
    if (data && page > Math.max(1, pageCount)) updateParams({ page: Math.max(1, pageCount) });
  }, [data, page, pageCount, updateParams]);
  const getFilterParams = useCallback(filters => {
    updateParams({ young: null, middle: null, older: null, sex: null, ...filters, page: null });
  }, [updateParams]);
  const reload = () => setRevision(value => value + 1);
  const handleDeleteNotice = async id => {
    try {
      await deleteNotice(id);
      successMessage(t('notice_removed'));
      if (notices.length === 1 && page > 1) updateParams({ page: page - 1 });
      else reload();
    } catch (error) { errorMessage(getErrorMessage(error)); }
  };
  if (!category) return <Navigate to="/notices/sell" replace />;
  return <>
    <SectionNoticesPage aria-busy={isLoading}>
      <TitleWrap><TitlePage>{t('notices_title')}</TitlePage></TitleWrap>
      <SearchInput value={searchValue} onChange={setSearchValue}
        onSubmit={event => { event.preventDefault(); updateParams({ search: searchValue.trim(), page: null }); }}
        onDelete={() => { setSearchValue(''); updateParams({ search: null, page: null }); }} />
      <FilterNavBar>
        <NoticesCategoriesNav />
        <NoticesFilters getFilterParams={getFilterParams} />
      </FilterNavBar>
      {isLoading ? <NoticeCardSkeleton cards={12} /> : error ? <RequestError onRetry={reload} /> : <>
        <NoticesCategoriesList notices={notices} handleDeleteNotice={handleDeleteNotice}
          onFavoriteChange={category === 'favorite' ? reload : undefined} />
        {!notices.length && <NoInfoPart />}
        {pageCount > 1 && <Pagination pageCount={pageCount} currentPage={page}
          handlePageChange={event => { updateParams({ page: event.selected + 1 }); scrollToTop(); }} />}
      </>}
    </SectionNoticesPage>
    <ScrollToTopButton />
  </>;
}
export default NoticesPage;
