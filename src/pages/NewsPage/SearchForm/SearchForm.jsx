import PropTypes from 'prop-types';
import { Icon } from '../../../components/Icon/Icon';
import { SearchContainer, SearchInput, BtnSearch, BtnClose } from './SearchForm.styled';

function SearchForm ({isShowBtn, showBtnClose, clearInput, inputValue}) {

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                name="query"
                required
                value={inputValue}
                onChange={showBtnClose}
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
            {isShowBtn && 
                <BtnClose
                    type="button"
                    aria-label="clear"
                    onClick={clearInput}
                >
                    <Icon
                        iconName={'icon-cross'}
                        width={'24px'}
                        height={'24px'}
                        stroke={'#54ADFF'}
                        fill={'#54ADFF'}
                    />
                </BtnClose>
            }
        </SearchContainer>
    );
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    isShowBtn: PropTypes.bool,
    showBtnClose: PropTypes.func,
    clearInput: PropTypes.func,
    inputValue: PropTypes.string,
};

export default SearchForm;
