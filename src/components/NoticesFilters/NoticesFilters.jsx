import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ContainerFilter,
  Wrapper,
  OpenBtn,
  OpenBtnLabel,
  IconWraper,
  DropDownContainer,
  Text,
  SubMenu,
  FilterBtn,
  BtnLabel,
  Form,
  Label,
  Input,
  Button,
  ButtonSpan,
} from './NoticesFilters.styled';

import { Icon } from '../Icon/Icon';
import { t } from 'i18next';
import { Link, useSearchParams } from 'react-router-dom';
import { AttentionModal } from '../AttentionModal/AttentionModal';
import { useAuth } from '../../hooks/useAuth/useAuth';

export const NoticesFilters = ({ getFilterParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [params] = useSearchParams();
  const [filters, setFilters] = useState([]);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const { isLoggedIn } = useAuth();

  const openAttentionModal = event => {
    if (!isLoggedIn) {
      event.preventDefault();
      setShowAttentionModal(true);
    }
  };

  const closeAttentionModal = () => {
    setShowAttentionModal(false);
  };

  useEffect(() => {
    const next = [];
    if (params.get('young') === 'true') next.push('0-12 m');
    if (params.get('middle') === 'true') next.push('1 year');
    if (params.get('older') === 'true') next.push('2 years +');
    if (params.get('sex')) next.push(params.get('sex'));
    setFilters(next);
  }, [params]);

  const handleBtnClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleAgeClick = () => {
    setAgeOpen(prevState => !prevState);
  };

  const handleGenderClick = () => {
    setGenderOpen(prevState => !prevState);
  };

  const handleCheckboxChange = event => {
    const value = event.target.value;
    const next = filters.includes(value) ? filters.filter(item => item !== value) : [...filters, value];
    setFilters(next);
    getFilterParams({
      young: next.includes('0-12 m') || null,
      middle: next.includes('1 year') || null,
      older: next.includes('2 years +') || null,
      sex: next.includes('male') === next.includes('female') ? null : next.includes('male') ? 'male' : 'female',
    });
  };

  return (
    <ContainerFilter>
      <Wrapper>
        <OpenBtn
          onClick={handleBtnClick}
          type="button"
          aria-label="toggle filters"
          aria-expanded={isOpen}
        >
          <OpenBtnLabel>{t('notices_filterBnt')}</OpenBtnLabel>
          <IconWraper>
            <Icon iconName="icon-filters-3" stroke={'#FDF7F2'} />
          </IconWraper>
        </OpenBtn>
        {isOpen && (
          <DropDownContainer>
            <div>
              <Text>{t('notices_filterBnt_filters')}</Text>
              <SubMenu>
                <FilterBtn
                  type="button"
                  onClick={handleAgeClick}
                  aria-label="toggle age options"
                >
                  {ageOpen ? (
                    <Icon iconName="icon-chevron-down" stroke={'#54ADFF'} />
                  ) : (
                    <Icon iconName="icon-chevron-up" stroke={'#54ADFF'} />
                  )}
                  <BtnLabel>{t('notices_filterBnt_filters_byAge')}</BtnLabel>
                </FilterBtn>
                {ageOpen && (
                  <Form>
                    <Label>
                      <Input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="age"
                        value="0-12 m"
                        checked={filters.includes('0-12 m')}
                      />
                      {t('notices_filterBnt_filters_byAge_lt1')}
                    </Label>
                    <Label>
                      <Input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="age"
                        value="1 year"
                        checked={filters.includes('1 year')}
                      />
                      {t('notices_filterBnt_filters_byAge_gt1')}
                    </Label>
                    <Label>
                      <Input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="age"
                        value="2 years +"
                        checked={filters.includes('2 years +')}
                      />
                      {t('notices_filterBnt_filters_byAge_gt2')}
                    </Label>
                  </Form>
                )}
              </SubMenu>
              <SubMenu>
                <FilterBtn
                  type="button"
                  onClick={handleGenderClick}
                  aria-label="toggle gender options"
                >
                  {genderOpen ? (
                    <Icon iconName="icon-chevron-down" stroke={'#54ADFF'} />
                  ) : (
                    <Icon iconName="icon-chevron-up" stroke={'#54ADFF'} />
                  )}
                  <BtnLabel>{t('notices_filterBnt_filters_byGender')}</BtnLabel>
                </FilterBtn>
                {genderOpen && (
                  <Form>
                    <Label>
                      <Input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="gender"
                        value="male"
                        checked={filters.includes('male')}
                      />
                      {t('notices_filterBnt_filters_male')}
                    </Label>
                    <Label>
                      <Input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="gender"
                        value="female"
                        checked={filters.includes('female')}
                      />
                      {t('notices_filterBnt_filters_female')}
                    </Label>
                  </Form>
                )}
              </SubMenu>
            </div>
          </DropDownContainer>
        )}
      </Wrapper>
      <Link to='/add-pet' onClick={openAttentionModal}>
        <Button type="button">
          <ButtonSpan>{t('user_mypets_addBtn')}</ButtonSpan>
          <Icon
            iconName={'icon-plus-small'}
            width={'24px'}
            height={'24px'}
            stroke={'#FEF9F9'}
            fill={'#FEF9F9'}
          />
        </Button>
      </Link>
      {showAttentionModal && <AttentionModal onClose={closeAttentionModal} />}
    </ContainerFilter>
  );
};

NoticesFilters.propTypes = {
  getFilterParams: PropTypes.func.isRequired,
};
