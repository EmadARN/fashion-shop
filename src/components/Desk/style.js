//Desk_button
export const Box_style = (backgroudColor) => {
  const s1 = {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    height: 60,
    width: 200,
    flexDirection:'column',
    justifyContent: "center",
    borderRadius: "7px",
    // backgroundColor: "#d3cbcb",
    display: "flex",
    alignItems: "center",
    ml:{xs:0,sm:0},

  };

  return s1;
};

//Desk_List
export const sectionDesk_List_style = {
  backgroundColor: "#fff",
  overflow: "hidden",
  maxWidth: "300px",
  width: "100%",
  // marginTop: "50px",
  marginRight: "10px",
  borderRadius: "12px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};
export const Box1Desk_List_style = {
  p: 1.5,
  bgcolor: "#DB4444",
  color: "#ddd",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
};
export const ArrowDesk_List_style = (isOpen) => {
  const s1 = {
    transition: "all .4s ease",
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  };

  return s1;
};
export const Box2Desk_List_style = (isOpen) => {
  const s1 = {
    display: !isOpen ? "block" : "none",
    "& .link1": {
      display: "block",
      py: 1.5,
      "&:hover": {
        backgroundColor: "#e38e8e",
        color: "#fff",
      },
      mb: 1,
      pr: 4,
      color: "#444",
    },
  };

  return s1;
};


export const MainGrid = {
   width:"100%", mt:13
}

export const ButtonGrid =(displayMd,displayXs) =>{
  const mystyle ={
    mb:3,
    mr:4,
    display:{xs:displayXs,md:displayMd},
    justifyContent:"center",
    width:"70%",
    alignItems:"center"
  }

  return mystyle
  
}


export const ButtonGrid2 =(displayMd1,displayXs1)=>{
  const myStyle1 ={
    mb:3,
    mr:4,
    display:{xs:displayXs1,md:displayMd1},
    justifyContent:"center",
    width:{xs:"100%",md:"70%"},
    alignItems:"center"
  }

  return myStyle1
}