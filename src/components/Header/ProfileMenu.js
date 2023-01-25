import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./NavBar.css";
import { Divider } from "@mui/material";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        className="profile"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
        <AccountCircleIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        // sx={{ "&.MuiPaper-root": { borderRadius: "2rem", padding: "0.5rem" } }}
      >
        <MenuItem className="menu-tems" onClick={handleClose}>
          SignUp
        </MenuItem>
        <MenuItem className="menu-tems" onClick={handleClose}>
          Log In
        </MenuItem>
        <Divider />
        <MenuItem className="menu-tems" onClick={handleClose}>
          Airbnb our home
        </MenuItem>
        <MenuItem className="menu-tems" onClick={handleClose}>
          Host and experience
        </MenuItem>
        <MenuItem className="menu-tems" onClick={handleClose}>
          Help
        </MenuItem>
      </Menu>
    </div>
  );
}
