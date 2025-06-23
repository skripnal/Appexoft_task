import type { ReactNode } from "react";
import { Box, Modal } from "@mui/material";
import { styles } from "./stylesCustomModal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CustomModal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={styles.wrapper}>{children}</Box>
    </Modal>
  );
};

export default CustomModal;
