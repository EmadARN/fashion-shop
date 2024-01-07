//MainBox
export const MainBox = {
  display: { xs: "none", md: "flex" },
  justifyContent: "space-around",
  backgroundColor: "#222",
  padding: "40px",
};
// QuickLinks
export const QuickLinksTypography1 = {
  color: "#fff",
  borderBottom: "2px solid #ddd",
  fontWeight: "bold",
  whiteSpace: "nowrap",
};
export const QuickLink = {
  color: "#fff",
  textDecoration: "none",
};
export const QuickLinksTypographys = {
  transition: "all 0.6s ease",
  py: "7px",
  "&:hover": {
    color: "#999 ",
  },
};
//Gallary
export const GallaryTypography1 = {
  color: "#fff",
  borderBottom: "2px solid #ddd",
  fontWeight: "bold",
  whiteSpace: "nowrap",
};
export const GallaryGrid1 = {
  mt: 2,
  display: "grid",
  placeItems: "center",
  "& .imgScale": {
    transition: "all 0.9s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
};
//AboutUs
export const AboutUsTypography1 = {
  color: "#fff",
  borderBottom: "2px solid #ddd",
  maxWidth: "50px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
};
