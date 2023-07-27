import { useState, useEffect } from 'react';
import { NewsList } from '../../components/NewsList/NewsList';
import { Title } from './NewsPage.styled';
import { SearchInput } from '../../shared/components/SearchInput/SearchInput';
import { getNews } from '../../services/NewsApi';

function NewsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [news, setNews] = useState([]);
  const limit = 6;

  useEffect(() => {
    getData();
  }, []);

  const getData = async (search = '') => {
    try {
      const params = {
        search,
        page: 1,
        limit,
      };

      const newsData = await getNews(params);
      setNews(newsData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = value => {
    setSearchValue(value);
  };

  const handleSearch = () => {
    getData(searchValue);
  };

  const handleDelete = () => {
    setSearchValue('');
    getData();
  };

  return (
    <>
      <Title>News</Title>
      <SearchInput
        value={searchValue}
        onChange={handleChange}
        onSubmit={handleSearch}
        onDelete={handleDelete}
      />
      <NewsList list={news} />
    </>
  );
}

export default NewsPage;
