import React from "react";
import SearchAppBar from "../../../Search/Search";
import avatar from "../../../../assets/images/avatar.png";
import styles from "./DashboardHeader.module.css";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  LogoutOutlined,
  PersonOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import Upload from "../../../Upload/Upload";
import useAuth from "../../../../Hooks/useAuth";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const user = useSelector((state) => state.user.user);
  const { handleLogout } = useAuth();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={styles.Wrapper}>
      <SearchAppBar />
      <Upload />
      <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
        <div className={styles.UserMenu} onClick={handleOpenUserMenu}>
          <Typography variant="h5">{user.name}</Typography>
          <Tooltip title="Settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="user" src={avatar} />
            </IconButton>
          </Tooltip>
        </div>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography className={styles.MenuItem} textAlign="center">
              <PersonOutlined />
              Profile
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography className={styles.MenuItem} textAlign="center">
              <SettingsOutlined />
              Settings
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Typography className={styles.MenuItem} textAlign="center">
              <LogoutOutlined />
              Log out
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

export default DashboardHeader;
