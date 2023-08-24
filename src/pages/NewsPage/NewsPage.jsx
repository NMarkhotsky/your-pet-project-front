import { useState, useEffect, useCallback } from 'react';
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

const PER_PAGE = 6;

function NewsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [searchValueSubmit, setSearchValueSubmit] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (page, search) => {
    try {
      const params = {
        search,
        page,
      };

      setIsLoading(true);
      const newsData = await getNews(params);
      setNews(newsData.data.data);
      setPageCount(Math.ceil(newsData.data.total / PER_PAGE));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = useCallback(event => {
    setCurrentPage(event.selected + 1);

    scrollToTop();
  }, []);

  const handleChange = value => {
    setSearchValue(value);
  };

  const handleSearch = e => {
    e.preventDefault();
    setSearchValueSubmit(searchValue);
  };

  const handleDelete = () => {
    setSearchValue('');
    setSearchValueSubmit('');
    getData();
  };

  useEffect(() => {
    getData(currentPage, searchValueSubmit);
  }, [currentPage, searchValueSubmit]);

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
      ) : (
        <NewsList
          list={news}
          pageCount={pageCount}
          handlePageChange={handlePageChange}
        />
      )}
      {pageCount > 1 && (
        <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
      )}
      {news.length === 0 && !isLoading && <NoInfoPart />}
      <ScrollToTopButton />
    </>
  );
}

export default NewsPage;
