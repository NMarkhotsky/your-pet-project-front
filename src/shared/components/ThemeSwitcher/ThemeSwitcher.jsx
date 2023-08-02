import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { setTheme } from '../../../redux/theme/themeSlice';
import { SwitcherWrapper } from './ThemeSwitcher.styled';

// eslint-disable-next-line react/prop-types
export const ThemeSwitcher = ({ size }) => {
  const currentTheme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const switchTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  return (
    <SwitcherWrapper>
      <DarkModeSwitch
        checked={currentTheme === 'dark'}
        onChange={switchTheme}
        size={size ? size : 25}
        moonColor="#FFC107"
        sunColor="#FFC107"
      />
    </SwitcherWrapper>
  );
};
