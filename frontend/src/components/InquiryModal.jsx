import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const InquiryModal = ({ openModal, setOpenModal }) => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleClose = () => setOpenModal(false);
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted", formData);
    handleClose();
  };
  console.log(formData)
  return (
    <Dialog component="form" onSubmit={handleSubmit} open={openModal} onClose={handleClose}>
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
        <Button variant="contained" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InquiryModal;
