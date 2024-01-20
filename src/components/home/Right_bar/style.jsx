import { all } from "axios";

export const ListItemText1 = {
  "& .MuiListItemText-primary": {
    fontSize: "20px",
    fontWeight: "550",
  },
};

export const ListButton1 = {
  textAlign: "right",
  mb: 3,
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

export const ListButton2 = {
  textAlign: "right",
  mb: 3,
  pr: 4,
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
