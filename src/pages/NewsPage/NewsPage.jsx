import { useState, useCallback } from 'react';
import { NewsList } from '../../components/NewsList/NewsList';
import { Title } from './NewsPage.styled';
import { SearchInput } from '../../shared/components/SearchInput/SearchInput';
import { getNews } from '../../services/NewsApi';
import { t } from 'i18next';
import { scrollToTop } from '../../utils/scrollToTop';
import { NoInfoPart } from '../../components/NoInfoPart/NoInfoPart';
import NewsCardSkeleton from '../../shared/components/Skeleton/NewsCardSkeleton/NewsCardSkeleton';
import { Pagination } from '../../components/Pagination/Pagination';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

import { useResource } from '../../hooks/useResource';
import { RequestError } from '../../shared/components/RequestError/RequestError';
const fetchNews = async (params, options) => (await getNews(params, options)).data;
const PER_PAGE = 6;

function NewsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [searchValueSubmit, setSearchValueSubmit] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [revision, setRevision] = useState(0);
  const { data, isLoading, error } = useResource(fetchNews, { page: currentPage, search: searchValueSubmit, limit: PER_PAGE }, revision);
  const news = data?.data || [];
  const pageCount = Math.ceil((data?.total || 0) / PER_PAGE);

  const handlePageChange = useCallback(event => {
    setCurrentPage(event.selected + 1);

    scrollToTop();
  }, []);

  const handleChange = value => {
    setSearchValue(value);
  };

  const handleSearch = e => {
    e.preventDefault();
    setCurrentPage(1);
    setSearchValueSubmit(searchValue.trim());
  };

  const handleDelete = () => {
    setSearchValue('');
    setSearchValueSubmit('');
    setCurrentPage(1);
  };

  return (
    <>
      <Title>{t('news_title')}</Title>
      <SearchInput
        value={searchValue}
        onChange={handleChange}
        onSubmit={handleSearch}
        onDelete={handleDelete}
      />
      {isLoading ? (
        <NewsCardSkeleton cards={6} />
      ) : error ? <RequestError onRetry={() => setRevision(value => value + 1)} /> : (
        <NewsList
          list={news}
          pageCount={pageCount}
          handlePageChange={handlePageChange}
        />
      )}
      {pageCount > 1 && (
        <Pagination currentPage={currentPage} pageCount={pageCount} handlePageChange={handlePageChange} />
      )}
      {news.length === 0 && !isLoading && !error && <NoInfoPart />}
      <ScrollToTopButton />
    </>
  );
}

export default NewsPage;
