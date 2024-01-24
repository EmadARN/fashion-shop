export const responsive_MarketList = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export const ImgStyle = {
  width: 85,
  height: 85,
  borderRadius: 50,
  padding: "3px",
  border: "1px solid #fff",
  position: "absolute",
  top: 3,
  right: 1.9,

};

export const ImageGridStyle = {
  background: "linear-gradient(90deg, #FEC736 0%, #bf22b4 100%)",
  width: 90,
  height: 90,
 
  borderRadius: 50,
  position: "relative",
  cursor: "pointer",

};


export const RedButtonBox ={
  mt: { xs: "5%", md: "2%" }
}