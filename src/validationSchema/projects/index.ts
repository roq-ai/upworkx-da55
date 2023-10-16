import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  budget: yup.number().integer().nullable(),
  deadline: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
