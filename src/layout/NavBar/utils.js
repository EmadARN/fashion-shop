export const handleOpenNavMenu = (event, setAnchorElNav) => {
  setAnchorElNav(event.currentTarget);
};
export const handleOpenUserMenu = (event, setAnchorElUser) => {
  setAnchorElUser(event.currentTarget);
};

export const handleCloseNavMenu = (setAnchorElNav) => {
  setAnchorElNav(null);
};

export const handleCloseUserMenu = (setAnchorElUser) => {
  setAnchorElUser(null);
};
