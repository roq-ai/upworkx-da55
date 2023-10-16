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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useBidFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { bidValidationSchema } from 'validationSchema/bids';
import { BidInterface } from 'interfaces/bid';
import { FreelancerInterface } from 'interfaces/freelancer';
import { ProjectInterface } from 'interfaces/project';

function BidEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'bid',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useBidFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: BidInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.bid.update({
        data: values as RoqTypes.bid,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/bids');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<BidInterface>({
    initialValues: data,
    validationSchema: bidValidationSchema,
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
              label: 'Bids',
              link: '/bids',
            },
            {
              label: 'Update Bid',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Bid
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Amount"
            formControlProps={{
              id: 'amount',
              isInvalid: !!formik.errors?.amount,
            }}
            name="amount"
            error={formik.errors?.amount}
            value={formik.values?.amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="proposed_completion_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Proposed Completion Date
            </FormLabel>
            <DatePicker
              selected={
                formik.values?.proposed_completion_date ? new Date(formik.values?.proposed_completion_date) : null
              }
              onChange={(value: Date) => formik.setFieldValue('proposed_completion_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.message}
            label={'Message'}
            props={{
              name: 'message',
              placeholder: 'Message',
              value: formik.values?.message,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<FreelancerInterface>
            formik={formik}
            name={'freelancer_id'}
            label={'Select Freelancer'}
            placeholder={'Select Freelancer'}
            fetcher={() => roqClient.freelancer.findManyWithCount({})}
            labelField={'skills'}
          />
          <AsyncSelect<ProjectInterface>
            formik={formik}
            name={'project_id'}
            label={'Select Project'}
            placeholder={'Select Project'}
            fetcher={() => roqClient.project.findManyWithCount({})}
            labelField={'name'}
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
              onClick={() => router.push('/bids')}
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
    entity: 'bid',
    operation: AccessOperationEnum.UPDATE,
  }),
)(BidEditPage);