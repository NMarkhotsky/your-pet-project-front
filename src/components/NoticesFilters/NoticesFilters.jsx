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
import { Link } from 'react-router-dom';
import { AttentionModal } from '../AttentionModal/AttentionModal';
import { useAuth } from '../../hooks/useAuth/useAuth';

export const NoticesFilters = ({ getFilterParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const { user } = useAuth();

  const openAttentionModal = () => {
    if (user.name === null && user.email === null) {
      setShowAttentionModal(true);
    }
  };

  const closeAttentionModal = () => {
    setShowAttentionModal(false);
  };

  useEffect(() => {
    const updatedFilterParams = {
      younger: false,
      middle: false,
      older: false,
      sex: null,
    };

    if (filters.includes('0-12 m')) {
      updatedFilterParams.young = true;
    } else {
      updatedFilterParams.young = false;
    }

    if (filters.includes('1 year')) {
      updatedFilterParams.middle = true;
    } else {
      updatedFilterParams.middle = false;
    }

    if (filters.includes('2 years +')) {
      updatedFilterParams.older = true;
    } else {
      updatedFilterParams.older = false;
    }

    if (filters.includes('male') && filters.includes('female')) {
      updatedFilterParams.sex = null;
    } else if (filters.includes('male')) {
      updatedFilterParams.sex = 'male';
    } else if (filters.includes('female')) {
      updatedFilterParams.sex = 'female';
    } else {
      updatedFilterParams.sex = null;
    }

    Object.keys(updatedFilterParams).forEach(key => {
      if (
        updatedFilterParams[key] === false ||
        updatedFilterParams[key] === null
      ) {
        delete updatedFilterParams[key];
      }
    });

    getFilterParams(updatedFilterParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleBtnClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleAgeClick = () => {
    setAgeOpen(prevState => !prevState);
  };

  const handleGenderClick = () => {
    setGenderOpen(prevState => !prevState);
  };

  const handleCheckboxChange = e => {
    if (filters.includes(e.target.value)) {
      setFilters(prev => prev.filter(item => item !== e.target.value));
    } else {
      setFilters(prev => [...prev, e.target.value]);
    }
  };

  return (
    <ContainerFilter>
      <Wrapper>
        <OpenBtn
          onClick={handleBtnClick}
          type="button"
          aria-label="toggle filters"
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
      <Link to={user.email !== null && '/add-pet'} onClick={openAttentionModal}>
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
