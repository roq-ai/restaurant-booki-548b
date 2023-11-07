import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_date: yup.date().required(),
  number_of_people: yup.number().integer().required(),
  special_request: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
