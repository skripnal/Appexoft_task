import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Field, Form, Formik, type FormikHelpers } from "formik";
import { useAddAccountMutation } from "@/service/socialMediaApi";
import CustomModal from "@components/ui/CustomModal/CustomModal";
import FormikTextField from "@components/FormikTextField";
import { accountValidationSchema, type AccountFormValues } from "../schema";
import { styles } from "../stylesModals";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddAccountModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const initialValues: AccountFormValues = {
    username: "",
    followers: 0,
    engagement: 0,
  };

  const [addAccount] = useAddAccountMutation();

  const handleSubmit = (
    values: AccountFormValues,
    actions: FormikHelpers<AccountFormValues>
  ) => {
    addAccount({
      username: values.username,
      followers: values.followers,
      engagement: values.engagement,
      recentPost: "",
    });
    onClose();
    actions.setSubmitting(false);
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <Typography variant="h5" sx={styles.modalHeader}>
        Add Account
      </Typography>
      <Divider sx={styles.separator} />
      <Formik
        initialValues={initialValues}
        validationSchema={accountValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }: { isSubmitting: boolean }) => (
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
            </Stack>
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
                Create
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default AddAccountModal;
