export const handleOpenNavMenu = (event, setAnchorElNav) => {
  setAnchorElNav(event.currentTarget);
};
export const handleOpenUserMenu = (event, setAnchorElUser) => {
  setAnchorElUser(event.currentTarget);
};

export const handleCloseNavMenu = (setAnchorElNav, setActiveTab, page) => {
  setAnchorElNav(null);
  setActiveTab(page.id);
};
export const handleonMouseEnter = (setActiveTab2, page) => {
  setActiveTab2(page.id);
};
export const handleonMouseLeave = (activeTab, setActiveTab3, page) => {
  setActiveTab3(page.id);
};

export const handleCloseUserMenu = (setAnchorElUser) => {
  setAnchorElUser(null);
};
