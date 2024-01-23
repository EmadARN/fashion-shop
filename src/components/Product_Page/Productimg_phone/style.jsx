//ExploreXs
export const Responsive_Productimg = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export const imgStyle = {
  display: "block",
  height: "100% ",
  margin: "auto",
  width: "100%",
};

export const ModelNameXsGrid = {
  display: { xs: "inline-block", md: "none", lg: "none" },
  mt: "25%",
};
export const ContainerGridXs = {
  "@media (min-width: 900px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BoxImageDesktop = {
  display: { xs: "none", md: "flex" },
};

export const BoxProductimg_phone = {
  display: { xs: "block", md: "none", lg: "none", xl: "none" },
};

export const GridInformation_Product = {
  "@media (max-width: 1190px)": {
    mr: "2% !important",
  },
};
