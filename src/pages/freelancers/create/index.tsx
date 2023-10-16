import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { freelancerValidationSchema } from 'validationSchema/freelancers';
import { UserInterface } from 'interfaces/user';
import { FreelancerInterface } from 'interfaces/freelancer';

function FreelancerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: FreelancerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.freelancer.create({ data: values as RoqTypes.freelancer });
      resetForm();
      router.push('/freelancers');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<FreelancerInterface>({
    initialValues: {
      skills: '',
      experience: 0,
      portfolio_url: '',
      hourly_rate: 0,
      availability: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: freelancerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Freelancers',
              link: '/freelancers',
            },
            {
              label: 'Create Freelancer',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Freelancer
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.skills}
            label={'Skills'}
            props={{
              name: 'skills',
              placeholder: 'Skills',
              value: formik.values?.skills,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Experience"
            formControlProps={{
              id: 'experience',
              isInvalid: !!formik.errors?.experience,
            }}
            name="experience"
            error={formik.errors?.experience}
            value={formik.values?.experience}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('experience', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.portfolio_url}
            label={'Portfolio Url'}
            props={{
              name: 'portfolio_url',
              placeholder: 'Portfolio Url',
              value: formik.values?.portfolio_url,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Hourly Rate"
            formControlProps={{
              id: 'hourly_rate',
              isInvalid: !!formik.errors?.hourly_rate,
            }}
            name="hourly_rate"
            error={formik.errors?.hourly_rate}
            value={formik.values?.hourly_rate}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('hourly_rate', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.availability}
            label={'Availability'}
            props={{
              name: 'availability',
              placeholder: 'Availability',
              value: formik.values?.availability,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/freelancers')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'freelancer',
    operation: AccessOperationEnum.CREATE,
  }),
)(FreelancerCreatePage);
