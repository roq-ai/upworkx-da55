import * as yup from 'yup';

export const freelancerValidationSchema = yup.object().shape({
  skills: yup.string().nullable(),
  experience: yup.number().integer().nullable(),
  portfolio_url: yup.string().nullable(),
  hourly_rate: yup.number().integer().nullable(),
  availability: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
