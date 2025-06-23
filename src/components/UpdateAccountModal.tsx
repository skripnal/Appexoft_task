import { Box, Button, Typography, Stack, Divider } from "@mui/material";
import { Field, Form, Formik, type FormikHelpers } from "formik";
import { useUpdateAccountMutation } from "../service/socialMediaApi";
import CustomModal from "./ui/CustomModal";
import FormikTextField from "./FormikTextField";
import type { AccountType } from "../types/AccountType";
import {
  accountValidationSchema,
  type AccountFormValues,
} from "../validation/accountValidation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  account: AccountType;
}

const UpdateAccountModal: React.FC<Props> = ({ isOpen, onClose, account }) => {
  const initialValues: AccountFormValues = {
    username: account.username,
    followers: account.followers,
    engagement: account.engagement,
    recentPost: account.recentPost,
  };

  const [updateAccount] = useUpdateAccountMutation();

  const handleSubmit = (
    values: AccountFormValues,
    actions: FormikHelpers<AccountFormValues>
  ) => {
    updateAccount({
      id: account.id,
      username: values.username,
      followers: values.followers,
      engagement: values.engagement,
      recentPost: values.recentPost,
    });
    onClose();
    actions.setSubmitting(false);
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="center"
        sx={{
          mb: 1.5,
          letterSpacing: 0.5,
          color: "info.main",
        }}
      >
        Update Account
      </Typography>
      <Divider
        sx={{
          mb: 3,
          borderColor: "info.light",
          borderBottomWidth: 2,
        }}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={accountValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={2}>
              <Field
                name="username"
                label="Username"
                component={FormikTextField}
              />
              <Field
                name="followers"
                label="Followers"
                type="number"
                component={FormikTextField}
              />
              <Field
                name="engagement"
                label="Engagement Rate"
                type="number"
                component={FormikTextField}
              />
              <Field
                name="recentPost"
                label="Recent Post"
                component={FormikTextField}
              />
              <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
                <Button
                  variant="outlined"
                  color="info"
                  type="button"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Update
                </Button>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default UpdateAccountModal;
