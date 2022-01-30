import { AppBar, Button, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          LUFFY
        </Typography>
        <Button variant="text" color="inherit" startIcon={<LoginIcon />}>
          Login
        </Button>
        <Button variant="text" color="inherit" endIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
