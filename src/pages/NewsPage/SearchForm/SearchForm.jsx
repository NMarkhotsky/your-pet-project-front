import PropTypes from 'prop-types';
import { Icon } from '../../../components/Icon/Icon';
import { SearchContainer, SearchInput, BtnSearch, BtnClose } from './SearchForm.styled';

const SearchForm = () => {

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                name="query"
                required
                value=''
                onChange=''
                placeholder="Search"
            />
            <BtnSearch
                type="submit"
                aria-label="submit"
            >
                <Icon
                    iconName={'icon-search'}
                    width={'24px'}
                    height={'24px'}
                    stroke={'#54ADFF'}
                    fill={'#54ADFF'}
                />
            </BtnSearch>
            <BtnClose type="button" aria-label="clear">
                <Icon
                    iconName={'icon-cross'}
                    width={'24px'}
                    height={'24px'}
                    stroke={'#54ADFF'}
                    fill={'#54ADFF'}
                />
            </BtnClose>
        </SearchContainer>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};

export default SearchForm;
