/* eslint-disable react/prop-types */
import { t } from 'i18next';
import { createColor } from '../../utils';
import {
  Bar,
  FormPagination,
  Option,
  PaginationItem,
} from './FormPaginationList.styled';

function FormPaginationList({ currentPage }) {
  return (
    <>
      <FormPagination>
        <PaginationItem>
          <Option variant={currentPage === 0 ? 'current' : 'select'}>
            {t('addPet_formPaginationList_chooseOption')}
          </Option>
          <Bar variant={currentPage === 0 ? 'current' : 'select'} />
        </PaginationItem>
        <PaginationItem>
          <Option variant={createColor({ currentPage, type: 'text', num: 1 })}>
            {t('addPet_formPaginationList_personalDetails')}
          </Option>
          <Bar variant={createColor({ currentPage, type: 'bar', num: 1 })} />
        </PaginationItem>
        <PaginationItem>
          <Option variant={createColor({ currentPage, type: 'text', num: 2 })}>
            {t('addPet_formPaginationList_moreInfo')}
          </Option>
          <Bar variant={createColor({ currentPage, type: 'bar', num: 2 })} />
        </PaginationItem>
      </FormPagination>
    </>
  );
}

export default FormPaginationList;
