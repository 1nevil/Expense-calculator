import { AppBar, Typography, Toolbar } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <AccountBalanceWalletIcon />
        <Typography variant="h6" ml={2} color="inherit" component="div">
          Expense calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
