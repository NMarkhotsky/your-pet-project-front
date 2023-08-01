/* eslint-disable react/prop-types */
import { t } from 'i18next';
import { petValues } from '../../constants';
import FieldRadio from '../FieldRadio/FieldRadio';

function ChooseOption({ formik }) {
  return (
    <>
      <FieldRadio
        onChange={formik.handleChange}
        text={t('addPet_form_chooseOption_radio_yourPet')}
        value={petValues.yourPet}
        checked={formik.values.option === petValues.yourPet}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text={t('addPet_form_chooseOption_radio_sell')}
        value={petValues.SELL}
        checked={formik.values.option === petValues.SELL}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text={t('addPet_form_chooseOption_radio_lost/found')}
        value={petValues.LOST_FOUND}
        checked={formik.values.option === petValues.LOST_FOUND}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text={t('addPet_form_chooseOption_radio_inGoodHands')}
        value={petValues.IN_GOOD_HANDS}
        // checked={formik.values.option === petValues.IN_GOOD_HANDS || option === petValues.IN_GOOD_HANDS}
        checked={formik.values.option === petValues.IN_GOOD_HANDS}
      />
    </>
  );
}

export default ChooseOption;
