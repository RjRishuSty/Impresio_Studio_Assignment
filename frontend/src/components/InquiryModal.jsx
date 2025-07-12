import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

const InquiryModal = ({ openModal, setOpenModal }) => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleClose = () => setOpenModal(false);
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleValidate = () => {
    if (!formData.name) {
      enqueueSnackbar("Name field is required", { variant: "error" });
      return false;
    }
    if (!formData.message) {
      enqueueSnackbar("Write you query.", { variant: "error" });
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidate()) return;
    enqueueSnackbar("Inquiry submit successfully", { variant: "success" });
    handleClose();
  };

  return (
    <Dialog
      component="form"
      onSubmit={handleSubmit}
      open={openModal}
      onClose={handleClose}
    >
      <DialogTitle>Send Inquiry</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          name="name"
          label="Your Name"
          value={formData.name}
          onChange={handleFormChange}
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleFormChange}
          sx={{ mt: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InquiryModal;
