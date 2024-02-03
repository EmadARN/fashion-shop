//Desk_button
export const Button_style = {
  backgroundColor: "#333",
  fontSize: "17px",
  "&:hover": { backgroundColor: "#777" },
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
