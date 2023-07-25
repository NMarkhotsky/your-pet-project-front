import { useState } from 'react';
import { NewsList } from '../../components/NewsList/NewsList';
import { Title } from './NewsPage.styled';
import { SearchInput } from '../../shared/components/SearchInput/SearchInput';

function NewsPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = value => {
    setSearchValue(value);
    console.log('Input Value:', value);
  };

  const handleSearch = () => {
    console.log(searchValue);
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
      <NewsList />
    </>
  );
}

export default NewsPage;
