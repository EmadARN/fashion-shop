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
//ExploreXs
export const ResponsiveXs = {
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
};
export const ExploreXsimgStyle = {
  display: "block",
  height: "100%",
  margin: "auto",
  width: "100%",
};
