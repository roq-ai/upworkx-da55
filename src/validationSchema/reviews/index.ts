import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().nullable(),
  feedback: yup.string().nullable(),
  project_id: yup.string().nullable().required(),
  reviewer_id: yup.string().nullable().required(),
  reviewee_id: yup.string().nullable().required(),
});
