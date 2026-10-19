import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Btn } from '../Button/Btn';

export const RequestError = ({ onRetry }) => {
  const { t } = useTranslation();
  return <div role="alert" style={{ textAlign: 'center', padding: '32px 16px' }}>
    <p style={{ marginBottom: 16 }}>{t('request_error')}</p>
    <Btn onClick={onRetry}>{t('request_retry')}</Btn>
  </div>;
};
RequestError.propTypes = { onRetry: PropTypes.func.isRequired };
