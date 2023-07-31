import { format } from 'date-fns';

export const initialStatePersonalDetails = {
  name: "",
  birthday: format(new Date(), 'yyyy-MM-dd'),
  type: "",
}

export const initialStatePersonalDetailsPlus = {
  ...initialStatePersonalDetails,
  title: "",
}
