import PropTypes from 'prop-types';
import {
  SearchContainer,
  Input,
  SearchButton,
  DeleteSearchButton,
  SearchIcon,
  ButtonWrapper,
} from './SearchInput.styled';
import { t } from 'i18next';

export const SearchInput = ({ value, onChange, onSubmit, onDelete }) => {
  return (
    <SearchContainer onSubmit={onSubmit}>
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={t('other_search')}
      />
      <ButtonWrapper>
        <SearchButton type="submit" value={value} onClick={onSubmit}>
          <SearchIcon iconName="icon-search" fill="#54ADFF" />
        </SearchButton>
        {value && (
          <DeleteSearchButton type="button" onClick={onDelete}>
            <SearchIcon iconName="icon-cross" stroke="#FFC107" />
          </DeleteSearchButton>
        )}
      </ButtonWrapper>
    </SearchContainer>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
