import { useDispatch, useSelector } from 'react-redux';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { setTheme } from '../../../redux/theme/themeSlice';
import { useEffect } from 'react';

export const ThemeSwitcher = () => {
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
    <DarkModeSwitch
      checked={currentTheme === 'dark'}
      onChange={switchTheme}
      size={25}
      moonColor="#FFC107"
      sunColor="#FFC107"
    />
  );
};
