import { useTranslation } from 'react-i18next';
import {
  LanguageSelect,
  LanguageSwitcherContainer,
} from './LanguageSwitcher.styled';
import { t } from 'i18next';

const lngs = {
  en: { nativeName: 'English' },
  uk: { nativeName: 'Українська' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = event => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <LanguageSwitcherContainer>
      {t('other_language')}:
      <LanguageSelect value={i18n.language} onChange={handleLanguageChange}>
        {Object.keys(lngs).map(lng => (
          <option
            key={lng}
            value={lng}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </option>
        ))}
      </LanguageSelect>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
