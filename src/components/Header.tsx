import { useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import AddAccountModal from "./modals/AddAccountModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <AppBar position="relative" color="info">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Dashboard</Typography>
        <Button variant="outlined" color="inherit" onClick={handleOpen}>
          Add Account
        </Button>
      </Toolbar>
      <AddAccountModal isOpen={openModal} onClose={handleClose} />
    </AppBar>
  );
};

export default Header;
