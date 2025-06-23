import { Box, Button, Typography } from "@mui/material";
import CustomModal from "./ui/CustomModal";
import { useDeleteAccountMutation } from "../service/socialMediaApi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const DeleteAccountModal: React.FC<Props> = ({ isOpen, onClose, id }) => {
  const [deleteAccount] = useDeleteAccountMutation();

  const handleDelete = () => {
    deleteAccount(id);
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
