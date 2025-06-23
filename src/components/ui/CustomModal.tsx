import type { ReactNode } from "react";
import { Box, Modal } from "@mui/material";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: `linear-gradient(135deg, #fff 80%, #abcdef 100%)`,
  boxShadow: 24,
  borderRadius: 4,
  minWidth: { xs: 320, sm: 400 },
  p: { xs: 3, sm: 5 },
  maxWidth: 440,
};

const CustomModal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default CustomModal;
