import React, {  useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SpeedDial,
  SpeedDialIcon,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilter,
} from "../redux/slices/filterData.slice";
import CloseIcon from "@mui/icons-material/Close";
import SidebarFilter from "./SidebarFilter";


const MobileFilter = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { isActive } = useSelector((state) => state.filterData);

  return (
    <>
      {!open && (
        <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1200 }}>
          <SpeedDial
            ariaLabel="Mobile Filter"
            icon={<SpeedDialIcon />}
            onClick={() => setOpen(true)}
          />
        </Box>
      )}

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle>Filters</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{
              mr: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent dividers>
         <SidebarFilter />
        </DialogContent>

        <DialogActions>
          {isActive && (
            <Button onClick={() => dispatch(resetFilter())}>Clear</Button>
          )}
          <Button variant="contained" onClick={() => setOpen(false)}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MobileFilter;
