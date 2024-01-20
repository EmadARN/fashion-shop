export const ListItemText1 = {
  "& .MuiListItemText-primary": {
    fontSize: "20px",
    fontWeight: "550",
  },
};

export const ListButton1 = {
  textAlign: "right",
  mb: 2,
  transition: "all 0.9s ease !important",
  "& .iconhover": {
    transition: "all 0.9s ease-in-out !important",
  },
  "& .iconhover3": {
    transition: "all 0.9s ease-in-out !important",
  },
  "&:hover": {
    backgroundColor: "#fff !important",
    "& .iconhover ": {
      color: "red!important",
      transform: "translateX(50%)",
    },
    "& .iconhover2 ": {
      color: "red!important",
    },
    "& .iconhover3 ": {
      color: "red!important",
      transform: "translateX(50%) rotate(90deg)",
    },
    "& .texthover": {
      color: "red",
    },
  },
};

export const ListButton2 = {
  textAlign: "right",
  mb: 2,
  pr: 4,
  width: "100%",
  transition: "all 0.9s ease !important",
  "&:hover": {
    "& .iconhover": {
      color: "red!important",
    },
    "& .texthover": {
      color: "red",
    },
  },
};

export const ListItemButton3 = {
  pl: 4,
  textAlign: "center",
};

export const ListItemText2 = {
  "& .MuiListItemText-primary": {
    fontSize: "17px",
    fontWeight: "550",
    color: "#666",
    "&:hover": { color: "red" },
  },
};
