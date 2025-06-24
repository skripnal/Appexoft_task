import { Box, Button, Typography } from "@mui/material";
import CustomModal from "@components/ui/CustomModal/CustomModal";
import { useDeleteAccountMutation } from "@/service/socialMediaApi";
import { styles } from "../stylesModals";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const DeleteAccountModal: React.FC<Props> = ({ isOpen, onClose, id }) => {
  const [deleteAccount] = useDeleteAccountMutation();

  const handleDelete = async () => {
    await deleteAccount(id);
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <Typography variant="h5" sx={styles.modalHeader}>
        Delete account?
      </Typography>
      <Box mt={3} display="flex" justifyContent="space-around">
        <Button variant="outlined" color="info" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="outlined"
          color="error"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Box>
    </CustomModal>
  );
};

export default DeleteAccountModal;
