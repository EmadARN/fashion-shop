import { red } from "@mui/material/colors";
//Card_item
export const BoxStyle1Card_item = (item) => {
  const s1 = {
    position: "relative",
    minHeight: "40vh !important",
    width: "100%",
    backgroundImage: `url(${item.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return s1;
};

export const FirstBoxStyle = {
  position: "absolute",
  top: "10px",
  left: "0",
  borderRadius: "10px",
  display: { xs: "none", md: "flex" },
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter: { xs: "blur(7px)", md: "blur(55px)" },
  width: "115px",
  padding: { xs: "5px" },
};

export const CardStyle = {
  width: "95%",
  // height: { md: 450, lg: 430, xl: 540 },
  borderRadius: "10px",
  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
  ml: 3,
};

export const SeccondBoxStyle = {
  position: "absolute",
  top: "5px",
  right: "0",
  borderRadius: "10px",
  display: { xs: "flex", md: "none" },
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter: { xs: "blur(7px)", md: "blur(55px)" },
  width: "100px",
  padding: { xs: "5px" },
};

export const ThirdBoxStyle = {
  position: "absolute",
  bottom: { md: "34%", lg: "35%", xl: "27%" },
  right: "0px",

  display: { xs: "none", md: "flex" },
  height: 30,
  borderRadius: 50,

  cursor: "pointer",
};

export const ProfileImgStyle = {
  width: 50,
  height: 50,
  borderRadius: 50,
};

export const ForthBoxStyle = {
  position: "absolute",
  top: { xs: "0" },
  left: "10px",
  width: 60,
  display: { xs: "flex", md: "none" },
  height: 60,
  borderRadius: 50,
  padding: "3px",
  width: "115px",
  padding: "7px",

  cursor: "pointer",
};

export const CardAction = {
  textAlign: "center",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
};

export const ButtonStyle = {
  whiteSpace: "nowrap",
  width: "100%",
  fontSize: { xs: "14px", md: "18px" },
  backgroundColor: "#ddd",
  textAlign: "center",

  color: "#111",
  "&:hover": { backgroundColor: "#e2d5d3" },
};

export const ShareIconStyle = {
  mr: 3,
  cursor: "pointer",
};

export const TypographyStyle = {
  fontSize: { xs: "18px", md: "21px" },
};

export const CardMediaStyle = {
  position: "relative",
  padding: "15px",
};

export const CardContentStyle = {
  textAlign: "right",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

export const TimeIcon = {
  fontSize: "15px",
  mt: 0.5,
};

export const ItemDescStyle = {
  fontSize: { xs: "17px", md: "18px" },
};

export const TimeTypoGraphy = {
  fontSize: "12px",
  whiteSpace: "nowrap",
};

export const xsTimeTypo = {
  fontSize: "10px",
  whiteSpace: "nowrap",
};

export const MdBox = {
  display: { xs: "none", sm: "flex" },
  py: 3,
};

export const xsBox = {
  display: { xs: "flex", sm: "none" },
  width: "100%",
  py: 3,
};

export const MainXsCard = {
  width: 445,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  mb: 2,
};

export const avatarStyle = {
  bgcolor: red[500],
  ml: 2,
};

export const Responsive_carouselimg2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 584 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
//SwipeableEdgeDrawer
export const TypographyStyleSwipeableEdgeDrawer = {
  color: "#555",
};
export const BoxStyle1SwipeableEdgeDrawer = (isOpen) => {
  const s1 = {
    bgcolor: isOpen ? "#999" : "transparent",
    transition: "backgroun-color 1s ease !important",
    py: 4,
  };

  return s1;
};
//Card_item_xs
export const BoxStyle1Card_item_xs = {
  minHeight: "45vh !important",
  width: "100%",
  backgroundImage: `url(https://www.bodenimages.com/productimages/r1aproductlarge/23waut_u0154_cam.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
};
export const ButtonStyle1Card_item_xs = (isOpen) => {
  const s1 = {
    position: "absolute",
    transition: "all .7s ease",
    textAlign: "center",
    bottom: "0px",
    bgcolor: isOpen ? "#ddd" : "#3331",
    px: 2,
    borderRadius: "13px  13px 0 0",
    "&:hover": {
      bgcolor: "#ddd",
    },
  };

  return s1;
};
