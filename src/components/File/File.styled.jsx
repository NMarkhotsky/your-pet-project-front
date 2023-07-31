import styled from 'styled-components';
import { selectTablet } from '../../utils';

export const AddPhoto = styled.div`
  width: 112px;
  height: 112px;
  background-color: ${props =>
    props.mistake === 'true' ? '#FBCCCC' : '#CCE4FB'};
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

  @media ${selectTablet} {
    width: 182px;
    height: 182px;
  }

  &:hover {
    background-color: ${props =>
      props.mistake === 'true' ? '#ff9898' : '#98ccff'};
  }

  &::before,
  &::after {
    content: '';
    position: ${props => (props.file ? '' : 'absolute')};
    top: 50%;
    left: 50%;
    border-radius: 100px;
    background-color: ${props =>
      props.mistake === 'true' ? '#ff5454' : '#54ADFF'};
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all 300ms ease;
  }

  &::before {
    width: 60px;
    height: 2px;
  }

  &::after {
    width: 2px;
    height: 60px;
  }
`;

export const LabelFile = styled.label`
  display: flex;
  position: relative;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: ${props => props.justify};
  gap: 16px;

  @media ${selectTablet} {
    flex-direction: ${props => (props.value === 'yourPet' ? 'row' : 'column')};
    justify-content: ${props =>
      props.value === 'yourPet' ? 'flex-start' : 'center'};
    align-items: ${props => (props.value === 'yourPet' ? 'center' : 'center')};
    gap: ${props => (props.value === 'yourPet' ? '16px' : '0')};
  }
`;

export const InputFile = styled.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`;

export const TextFile = styled.span`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  max-width: 80px;
  line-height: 1.35;

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.lg};
    max-width: ${props => (props.value === 'yourPet' ? '114px' : '100%')};
    line-height: 1.4;
    margin-bottom: 8px;
  }

  color: ${props => props.theme.colors.text};
`;
