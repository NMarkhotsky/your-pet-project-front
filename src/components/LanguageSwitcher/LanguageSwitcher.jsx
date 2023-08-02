import { useTranslation } from 'react-i18next';
import { LanguageSwitcherContainer } from './LanguageSwitcher.styled';

const lngs = {
  en: { nativeName: 'UA' },
  uk: { nativeName: 'ENG' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <LanguageSwitcherContainer>
      {Object.keys(lngs).map(lng => (
        <button
          type="sumbit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
          style={{
            display: i18n.resolvedLanguage === lng ? 'none ' : 'flex',
          }}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
