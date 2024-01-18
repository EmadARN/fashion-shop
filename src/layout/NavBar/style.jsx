export const AdbIconStyle = { display: { xs: "none", md: "flex" }, mr: 1 };

export const MenuItemStyle = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    "& .icons": {
      color: "#222",
    },
  },
};
export const MenuStyle = {
  display: { xs: "block", md: "none" },
};
//start MenuBoxStyle1

export const MenuBoxStyle = { width: "100%", display: "flex" };
export const MenuBoxStyle1 = {
  width: "50%",
  display: "flex",
  justifyContent: "flex-end",
  pl: 1.5,
  py: 1.8,
  color: "#ddd",
  transition: "all .7s ease",
};
export const MenuBoxStyle2 = {
  width: "50%",
  py: 2,
  fontWeight: "bold",
  color: "#666",
};
//start ProfileInSide

export const ProfileInSideBox = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
};
export const ProfileInSideBox1 = {
  width: "100%",
  textAlign: "center",
};
export const ProfileInSideTypography1 = {
  p: 1,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  fontWeight: "bolder",
};
export const ProfileInSideTypography2 = {
  p: 1,
  display: "flex",
  alignItems: "center",
  "& .icon": {
    transition: "all .7s ease",
  },
  "&:hover": {
    bgcolor: "#ddd",
    width: "100%",
    color: "#444",
    "& .icon": {
      color: "#111",
    },
  },
};
export const ProfileInSideTypography3 = {
  p: 1,
  display: "flex",
  alignItems: "center",
  color: "red",
  "&:hover": {
    bgcolor: "#ddd",
    width: "100%",
  },
};

//start ProfileOutSide
export const ProfileOutSideMenuItemStyle = {
  p: 0,
  minWidth: "130px",
  width: "100%",
  "&:hover": { bgcolor: "#fff" },
};

//start MainMenuLg
export const MainMenuLgStyleBox = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
};
export const MainMenuLgStyle = (activeTab, activeTab2, page) => {
  const s1 = {
    mx: 2,
    color: "white",
    display: "block",
    height: "100%",
    minHeight: "60px !important",
    whiteSpace: "nowrap",
    fontWeight: "600",
    fontSize: "18px",
    borderBottom: activeTab === page.id ? "1px solid #DB4444 !important" : null,
    borderTop: activeTab2 === page.id ? "1px solid #DB4444 !important" : null,
    transition: "all .6s ease-out",
  };

  return s1;
};
//HumbergerIcon
export const HumbergerIconStyle = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};
