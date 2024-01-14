export const style1 = (bgColor, item) => {
  const s1 = {
    minWidth: "130px",
    maxHeight: { xs: "160px", md: "180px" },
    width: "95%",
    height: "100%",
    backgroundColor: bgColor(item),
    p: 6,
    borderRadius: "15px",
  };

  return s1;
};

export const style2 = (colorText, item) => {
  const s2 = {
    fontSize: "60px",
    display: "flex",
    justifyContent: "center",
    color: colorText(item),
  };
  return s2;
};
export const style3 = (colorText, item) => {
  const s3 = {
    fontWeight: "bold",
    textAlign: "center",
    color: colorText(item),
    paddingTop: "15px",
    whiteSpace: "nowrap",
  };
  return s3;
};

export const responsive_CardProductView_List = {
  desktop: {
    autoplay: false,
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    autoplay: false,
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    autoplay: true,
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
