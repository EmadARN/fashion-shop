import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import ProfileInSide from "./ProfileInSide";

import { ProfileOutSideMenuItemStyle } from "../style";
import { handleCloseUserMenu, handleOpenUserMenu } from "../utils";
import Link from "next/link";

const ProfileOutSide = ({ setAnchorElUser, anchorElUser }) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="ثبت نام">
        <Link href="/signIn">
          <Button
            variant="contained"
            sx={{
              fontFamily: "Yekan",
              bgcolor: "#00345C",
              "&:hover": { bgcolor: "#001131" },
              whiteSpace: "nowrap",
            }}
          >
            ورود | ثبت نام
          </Button>
        </Link>
      </Tooltip>
      {/* <Tooltip title="Open settings">
        <IconButton
          onClick={(e) => handleOpenUserMenu(e, setAnchorElUser)}
          sx={{ p: 0 }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
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
        onClose={() => handleCloseUserMenu(setAnchorElUser)}
      >
        <MenuItem
          sx={ProfileOutSideMenuItemStyle}
          onClick={() => handleCloseUserMenu(setAnchorElUser)}
        >
          <ProfileInSide />
        </MenuItem>
      </Menu> */}
    </Box>
  );
};

export default ProfileOutSide;
