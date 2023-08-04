import { Outlet } from 'react-router-dom';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { SearchInput } from '../../shared/components/SearchInput/SearchInput';
import { useEffect, useState, useCallback } from 'react';
import {
  getAllNotices,
  getSelfNotices,
  getFavoriteNotices,
  deleteNotice,
  getNoticeById,
} from '../../services/NoticesApi';
import { CATEGORIES_RENDER } from '../../constants/globalConstants';
import {
  FilterNavBar,
  SectionNoticesPage,
  TitleWrap,
} from './NoticesPage.styled';
import { Pagination } from '../../components/Pagination/Pagination';
import { TitlePage } from '../../shared/components/TitlePage/TitlePage';
import { scrollToTop } from '../../utils/scrollToTop';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { errorMessage, successMessage } from '../../utils/messages';

import { t } from 'i18next';
import { NoInfoPart } from '../../components/NoInfoPart/NoInfoPart';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import NoticeCardSkeleton from '../../shared/components/Skeleton/NoticeCardSkeleton/NoticeCardSkeleton';

function NoticesPage() {
  const [notices, setNotices] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [params, setParams] = useState({
    category: 'sell',
    page: 1,
    search: '',
  });
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const limit = 12;

  const handleDeleteNotice = async id => {
    const response = await getNoticeById(id);

    if (response.data.notice.ownerEmail !== user.email) {
      errorMessage('It is not your pet and you cannot remove it');
      return;
    }

    await deleteNotice(id);
    successMessage('The card was successfully removed');

    setNotices(prevCards => prevCards.filter(cardItem => cardItem.id !== id));
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (
          !params.category ||
          params.category === 'sell' ||
          params.category === 'in-good-hands' ||
          params.category === 'lost-or-found'
        ) {
          const data = await getAllNotices(params);
          setPageCount(Math.ceil(data.total / limit));
          return setNotices(changeCategoryForRender(data));
        }

        if (params.category === 'my-ads') {
          const data = await getSelfNotices(params);
          setPageCount(Math.ceil(data.total / limit));
          return setNotices(changeCategoryForRender(data));
        }

        if (params.category === 'favorite') {
          const data = await getFavoriteNotices(params);
          setPageCount(Math.ceil(data.total / limit));
          return setNotices(changeCategoryForRender(data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params]);

  const changeCategoryForRender = data => {
    return data.data.map(item => ({
      ...item,
      noticeType: CATEGORIES_RENDER[item.noticeType] || item.noticeType,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    setParams(prev => ({ ...prev, search: searchValue, page: 1 }));
    setPageCount(1)
  };

  const onDelete = () => {
    setSearchValue('');
    setParams(prev => ({ ...prev, search: '', page: 1 }));
  };

  const onChange = value => {
    setSearchValue(value);
  };

  const getCategoryParams = categoryParams => {
    setParams(prev => ({ ...prev, category: categoryParams, page: 1 }));
    setPageCount(1)
  };

  const getFilterParams = filterParams => {
    setPageCount(1)
    setParams(prev => {
      const { category, search } = prev;

      const updatedParams = {};

      Object.keys(filterParams).forEach(key => {
        updatedParams[key] = filterParams[key];
      });

      return { category, page: 1, search, ...updatedParams };
    });
  };

  const handlePageChange = useCallback(event => {
    setParams(prev => ({ ...prev, page: event.selected + 1 }));
    scrollToTop();
  }, []);

  return (
    <>
      <SectionNoticesPage>
        <TitleWrap>
          <TitlePage>{t('notices_title')}</TitlePage>
        </TitleWrap>
        <SearchInput
          onSubmit={onSubmit}
          onChange={onChange}
          onDelete={onDelete}
          value={searchValue}
        />
        <FilterNavBar>
          <NoticesCategoriesNav getCategoryParams={getCategoryParams} />
          <NoticesFilters getFilterParams={getFilterParams} />
        </FilterNavBar>
        {isLoading ? (
          <NoticeCardSkeleton cards={12} />
        ) : (
          <NoticesCategoriesList
            notices={notices}
            pageCount={pageCount}
            handlePageChange={handlePageChange}
            handleDeleteNotice={handleDeleteNotice}
          />
        )}
        {pageCount > 1 && (
          <Pagination
            pageCount={pageCount}
            handlePageChange={handlePageChange}
          />
        )}

        {notices.length === 0 && !isLoading && <NoInfoPart />}
      </SectionNoticesPage>
      <ScrollToTopButton />
      <Outlet />
    </>
  );
}

export default NoticesPage;
