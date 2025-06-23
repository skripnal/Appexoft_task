import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import DeleteAccountModal from "./modals/DeleteAccountModal";
import UpdateAccountModal from "./modals/UpdateAccountModal";
import type { AccountType } from "../types/AccountType";

interface Props {
  account: AccountType;
}

const MediaCard: React.FC<Props> = ({ account }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  return (
    <Card variant="outlined" sx={{ minWidth: 275, boxShadow: 4 }}>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 0.5, color: "info.main", letterSpacing: 0.5 }}
        >
          {account.username}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          ID: {account.id}
        </Typography>
        <Box display="flex" gap={2} mb={1.5}>
          <Typography variant="body2" color="text.secondary">
            Followers:
            <Box component="span" fontWeight={600} color="info.main" ml={0.5}>
              {account.followers.toLocaleString()}
            </Box>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Engagement:
            <Box
              component="span"
              fontWeight={600}
              color="success.main"
              ml={0.5}
            >
              {account.engagement}%
            </Box>
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", color: "text.primary", mb: 1 }}
        >
          {!!account.recentPost
            ? `Recent Post: "${account.recentPost}"`
            : "No posts available"}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box display="flex" gap={1}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => {
              setOpenUpdateModal(true);
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => setOpenDeleteModal(true)}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
      <DeleteAccountModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        id={account.id}
      />
      <UpdateAccountModal
        isOpen={openUpdateModal}
        onClose={() => setOpenUpdateModal(false)}
        account={account}
      />
    </Card>
  );
};

export default MediaCard;
