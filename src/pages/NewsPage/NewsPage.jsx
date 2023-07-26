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
    const getData = async () => {
      try {
        const params = {
          search: '',
          page: 1,
          limit,
        }

        const news = await getNews(params);

        setNews(news.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const getDataByName = async () => {
    try {
      const params = {
        search: searchValue,
        page: 1,
        limit,
      }

      const news = await getNews(params);

      setNews(news.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = value => {
    setSearchValue(value);
    console.log('Input Value:', value);
  };

  const handleSearch = () => {
    console.log(searchValue);
    getDataByName();
  };

  const handleDelete = () => {
    setSearchValue('');
    console.log(searchValue);
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
