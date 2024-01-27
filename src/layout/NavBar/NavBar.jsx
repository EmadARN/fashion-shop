import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import Searchbar from "@/common/searchBar/Searchbar";
import SearchBarSm from "@/common/searchBarSm/SearchBarSm";
import { AdbIconStyle } from "./style";
import ProfileOutSide from "./widgets/ProfileOutSide";
import MainMenuLg from "./widgets/MainMenuLg";
import HumbergerIcon from "./widgets/HumbergerIcon";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: "url(/images/rm218-bb-07.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        p: { xs: 0, md: 1 },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={AdbIconStyle} />

          {/* <HumbergerIcon
            setAnchorElNav={setAnchorElNav}
            anchorElNav={anchorElNav}
          /> */}

          <MainMenuLg setAnchorElNav={setAnchorElNav} />

          <SearchBarSm />
          <Searchbar />

          <ProfileOutSide
            anchorElUser={anchorElUser}
            setAnchorElUser={setAnchorElUser}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
