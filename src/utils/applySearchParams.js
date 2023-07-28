export const applySearchParams = (target, searchParams, setSearchParams) => {
  const { name, value, checked } = target;

  if (name === 'gender') {
    if (checked) {
      searchParams.set('gender', value);
      setSearchParams(searchParams);
      return;
    }

    searchParams.delete('gender');
    setSearchParams(searchParams);
    return;
  }

  if (checked) {
    searchParams.set('age', value);
    setSearchParams(searchParams);
    return;
  }

  searchParams.delete('age');
  setSearchParams(searchParams);
};
