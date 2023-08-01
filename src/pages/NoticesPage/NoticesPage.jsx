// import { Outlet } from 'react-router-dom';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { SearchInput } from '../../shared/components/SearchInput/SearchInput';
import { useEffect, useState, useCallback } from 'react';
import {getAllNotices, getSelfNotices, getFavoriteNotices} from '../../services/NoticesApi'
import { CATEGORIES_RENDER } from '../../constants/globalConstants';
import { FilterNavBar, SectionNoticesPage, TitleWrap } from './NoticesPage.styled'
import { Pagination } from '../../components/Pagination/Pagination';
import { TitlePage } from '../../shared/components/TitlePage/TitlePage';



function NoticesPage() {
  const [notices, setNotices] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [params, setParams] = useState({ category: 'sell', page: 1, search: '' })
  const [pageCount, setPageCount] = useState(0);

  const limit = 12

  useEffect(() => {
    (async () => {

      if (!params.category || params.category === 'sell' || params.category === 'in-good-hands' || params.category === 'lost-or-found') {
        const  data  = await getAllNotices(params);
        setPageCount(Math.ceil(data.total / limit))
        return setNotices(changeCategoryForRender(data))
      }

      if (params.category === 'my-ads') {
        const  data  = await getSelfNotices(params);
        setPageCount(Math.ceil(data.total/limit))
        return setNotices(changeCategoryForRender(data))
      }

      if (params.category === 'favorite') {
        const data = await getFavoriteNotices(params);
        setPageCount(Math.ceil(data.total/limit))
        return setNotices(changeCategoryForRender(data))
      }

    })()
  },[params])

  const changeCategoryForRender = (data) => {
    return data.data.map(item => ({...item, noticeType: CATEGORIES_RENDER[item.noticeType] || item.noticeType }))
  }

  const onSubmit = () => {
    setParams(prev => ({...prev, search: searchValue, page: 1}))
  }

  const onDelete = () => {
    setSearchValue('')
    setParams(prev => ({...prev, search: '', page: 1}))
  }

  const onChange = (value) => {
    setSearchValue(value)
  }

  const getCategoryParams = (categoryParams) => {
    setParams(prev => ({...prev, category: categoryParams}))
  }


  const getFilterParams = (filterParams) => {
    setParams((prev) => {

      const {category, page, search} = prev

      const updatedParams = {}

      Object.keys(filterParams).forEach((key) => {
      updatedParams[key] = filterParams[key];
    });

    return {category, page, search,...updatedParams};
    });
  };


  const handlePageChange = useCallback(event => {
    setParams(prev => ({...prev, page: event.selected + 1}));
  }, []);

  return (
    <SectionNoticesPage>
      <TitleWrap>
        <TitlePage>Find your favorite pet</TitlePage>
      </TitleWrap>
        <SearchInput onSubmit={onSubmit} onChange={onChange} onDelete={onDelete} value={searchValue}/>
        <FilterNavBar>
            <NoticesCategoriesNav getCategoryParams={getCategoryParams} />
            <NoticesFilters getFilterParams={getFilterParams} />
        </FilterNavBar>
        <NoticesCategoriesList notices={notices} pageCount={pageCount} handlePageChange={handlePageChange}/>
        <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
    </SectionNoticesPage>
  );
}

export default NoticesPage;

