
export const FirstBoxStyle = {
  position: "absolute",
  top: "15px",
  left: "0",
  borderRadius: "10px",
  display: {xs:"none",md:"flex"},
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter: { xs: "blur(7px)", md: "blur(55px)" },
  width:"115px",
  padding:"7px"
};

export const CardStyle ={
  maxWidth:{lg:300,xl:385} , height:{lg:520,xl:500},borderRadius:"10px"
} 





  export const SeccondBoxStyle ={
    position: "absolute",
    top: "15px",
    right: "0",
    borderRadius: "10px",
    display: {xs:"flex",md:"none"},
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: { xs: "blur(7px)", md: "blur(55px)" },
    width:"115px",
    padding:"7px"
  }

  export const ThirdBoxStyle= {
    position: "absolute",
    bottom: {xs:"115px",sm:"120px",md:"110px",lg:"140px",xl:"105px"},
    right: "10px",
    width: 60,
    display:{xs:"none",md:"flex"},
    height: 60,
    borderRadius: 50,
    padding: "3px",
    width:"115px",
    padding:"7px",

    cursor: "pointer",
  }


  export const ForthBoxStyle ={
    position: "absolute",
    top: {xs:"0"},
    left: "10px",
    width: 60,
    display:{xs:"flex",md:"none"},
    height: 60,
    borderRadius: 50,
    padding: "3px",
    width:"115px",
    padding:"7px",

    cursor: "pointer",
  }


  export const CardAction ={
    mt:2,textAlign: "center", display: "flex", justifyContent: "space-around"
  }


  export const ButtonStyle ={
    whiteSpace:'nowrap',width:"50%",fontSize:"18px",backgroundColor:"#ddd",color:"#111",'&:hover':{backgroundColor:'#e2d5d3'}
  }


  export const ShareIconStyle ={
    ml:2,cursor:'pointer'
  }

  export const TypographyStyle= {
    fontSize:{xs:"20px",md:"25px"}
  }


  export const ProfileImgStyle ={
    width: 60, height: 60, borderRadius: 50
  }

  export const CardMediaStyle ={
    position: "relative", padding: "15px"
  }


  export const CardContentStyle ={
    textAlign: "right",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  }


  export const Responsive_carouselimg2 ={
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }