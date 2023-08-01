import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
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
} from './NoticesFilters.styled';

import { Icon } from '../Icon/Icon';

export const NoticesFilters = ({ getFilterParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [filters, setFilters] = useState([])

  useEffect(() => {
    const updatedFilterParams = {
      younger: false,
      middle: false,
      older: false,
      sex: null,
    }

  if (filters.includes('0-12 m')) {
    updatedFilterParams.young = true
  } else {
    updatedFilterParams.young = false
  }

  if (filters.includes('1 year')) {
    updatedFilterParams.middle = true
  } else {
    updatedFilterParams.middle = false
  }

  if (filters.includes('2 years +')) {
    updatedFilterParams.older = true
  } else {
    updatedFilterParams.older = false
    }
    
    
  if (filters.includes('male') && filters.includes('female')) {
    updatedFilterParams.sex = null
  } else if (filters.includes('male')) {
    updatedFilterParams.sex = 'male'
  } else if (filters.includes('female')) {
    updatedFilterParams.sex = 'female'
  } else {
    updatedFilterParams.sex = null
  }

      Object.keys(updatedFilterParams).forEach((key) => {
        if (updatedFilterParams[key] === false || updatedFilterParams[key] === null) {
          delete updatedFilterParams[key];
        }
      });

    getFilterParams(updatedFilterParams)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

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
      setFilters(prev => (prev.filter(item => item !== e.target.value)));
    } else {
      setFilters(prev => [...prev, e.target.value])
    }
    
  };

  return (
    <Wrapper>
      <OpenBtn
        onClick={handleBtnClick}
        type="button"
        aria-label="toggle filters"
      >
        <OpenBtnLabel>Filter</OpenBtnLabel>
        <IconWraper>
          <Icon iconName="icon-filters-3" stroke={'#FDF7F2'} />
        </IconWraper>
      </OpenBtn>
      {isOpen && (
        <DropDownContainer>
          <div>
            <Text>Filters</Text>
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
                <BtnLabel>By age</BtnLabel>
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
                    0-12 m
                  </Label>
                  <Label>
                    <Input
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="1 year"
                      checked={filters.includes('1 year')}
                    />
                    1 year
                  </Label>
                  <Label>
                    <Input
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="2 years +"
                      checked={filters.includes('2 years +')}
                    />
                    2 year +
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
                <BtnLabel>By gender</BtnLabel>
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
                    male
                  </Label>
                  <Label>
                    <Input
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="gender"
                      value="female"
                      checked={filters.includes('female')}
                    />
                    female
                  </Label>
                </Form>
              )}
            </SubMenu>
          </div>
        </DropDownContainer>
      )}
    </Wrapper>
  );
};

NoticesFilters.propTypes = {
  getFilterParams: PropTypes.func.isRequired,
};
