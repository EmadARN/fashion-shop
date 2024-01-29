//MainBox
export const MainBox = {
  display: { xs: "none", md: "flex" },
  justifyContent: "space-around",
  backgroundImage: "url(/images/rm218-bb-07.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
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
export const LinkStyle = {
  color: "#fff",
  padding: "3px",
};
export const imgStyle = {
  width: "55px",
  height: "60px",
};
//AboutUs
export const AboutUsTypography1 = {
  color: "#fff",
  borderBottom: "2px solid #ddd",
  maxWidth: "50px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
};
export const AboutUsTypography2 = {
  color: "#fff",
  textAlign: "justify",
  mt: 2,
};
export const MainBoxXs = {
  display: { xs: "flex", md: "none" },
  position: "fixed",
  bottom: "0px",
  backgroundImage: "url(/images/rm218-bb-07.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  justifyContent: "center",
  "& .MuiTabs-indicator": {
    bgcolor: "red",
  },
  zIndex: 1300,
};
