import * as yup from 'yup';

export const bidValidationSchema = yup.object().shape({
  amount: yup.number().integer().nullable(),
  proposed_completion_date: yup.date().nullable(),
  message: yup.string().nullable(),
  freelancer_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
});
