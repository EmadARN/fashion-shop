export const ContainerStyle = ( displayxsHome) => {
  const s1 = {
    pt: 8,
    pb: 6,
    display: { xs: displayxsHome, md: "flex" },
  };

  return s1;
};
export const GallaryGrid1 = {
  justifyContent: "center",
  "& .imgScale": {
    transition: "all 0.9s",
    "&:hover": {
      transform: "scale(0.95)",
    },
  },
};
export const imgStyle = {
  maxWidth: "210px",
  maxHeight: "260px",
  width: "100%",
  height: "100%",
};
export const GridStyle = { p: { xs: 0.2, md: 0.08 } };
export const LinkStyle = {
  color: "#fff",
  padding: "3px",
};
