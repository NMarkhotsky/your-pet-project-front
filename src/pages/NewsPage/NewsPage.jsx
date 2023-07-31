// import { useState, useEffect, useCallback } from 'react';
// import { NewsList } from '../../components/NewsList/NewsList';
// import { Title } from './NewsPage.styled';
// import { SearchInput } from '../../shared/components/SearchInput/SearchInput';
// import { getNews } from '../../services/NewsApi';

// const PER_PAGE = 6;

// function NewsPage() {
//   const [searchValue, setSearchValue] = useState('');
//   const [pageCount, setPageCount] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [news, setNews] = useState([]);

//   const getData = async (page, search) => {
//     console.log("page--->" , page)
//     console.log('search--->', search);
//     try {
//       const params = {
//         search,
//         page,
//       };

//       const newsData = await getNews(params);
//       setNews(newsData.data.data);
//       setPageCount(Math.ceil(newsData.data.total / PER_PAGE));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlePageChange = useCallback(event => {
//     setCurrentPage(event.selected + 1);
//   }, []);

//   const handleChange = value => {
//     setSearchValue(value);
//   };

//   const handleSearch = () => {
//     getData(searchValue);
//   };

//   console.log('searchValue ===>', searchValue);

//   const handleDelete = () => {
//     setSearchValue('');
//     getData();
//   };

//   useEffect(() => {
//     getData(currentPage);
//   }, [currentPage]);

//   return (
//     <>
//       <Title>News</Title>
//       <SearchInput
//         value={searchValue}
//         onChange={handleChange}
//         onSubmit={handleSearch}
//         onDelete={handleDelete}
//       />
//       <NewsList
//         list={news}
//         pageCount={pageCount}
//         handlePageChange={handlePageChange}
//       />
//     </>
//   );
// }

// export default NewsPage;

import { useState, useEffect, useCallback } from 'react';
import { NewsList } from '../../components/NewsList/NewsList';
import { Title } from './NewsPage.styled';
import { SearchInput } from '../../shared/components/SearchInput/SearchInput';
import { getNews } from '../../services/NewsApi';
import { t } from 'i18next';

const PER_PAGE = 6;

function NewsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [searchValueSubmit, setSearchValueSubmit] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);

  const getData = async (page, search) => {
    try {
      const params = {
        search,
        page,
      };

      const newsData = await getNews(params);
      setNews(newsData.data.data);
      setPageCount(Math.ceil(newsData.data.total / PER_PAGE));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = useCallback(event => {
    setCurrentPage(event.selected + 1);
  }, []);

  const handleChange = value => {
    setSearchValue(value);
  };

  const handleSearch = () => {
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
      <NewsList
        list={news}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default NewsPage;
