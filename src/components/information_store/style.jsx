export const MainGrid = {
  justifyContent: "space-evenly",
  width: "100%",
  alignItems: "center",
  margin: "auto",
};

export const ContainerStyle =(mt)=>{
  const ConStyle ={
    marginTop:mt
  }

  return ConStyle
}

export const grid_item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: "auto",

  boxShadow: "rgba(0, 0, 0, 0.24) 0px 1.5px 3px ",
  mt: 2,
  mr: 2,
};

export const img_style = {
  width: 100,
  height: 100,
  borderRadius: 50,
  padding: "3px",
  border: "1px solid #fff",
  cursor: "pointer",
};

export const Typography_style = {
  color: "#555",
  fontSize: { xs: "12px", md: "17px" },
  fontWeight: "600",
  whiteSpace: { xs: "wrap", md: "nowrap" },
};

export const category_Typography = {
  fontSize: { xs: "12px", md: "25px" },
  color: "#445",
  fontWeight: "600",
  whiteSpace: { xs: "wrap", md: "nowrap" },
};

export const store_name_typhography = {
  fontSize: { xs: "20px", md: "25px" },
  fontWeight: "600",
};

export const box_item = {
  mr: 2,
  width: { xs: "90%" },
  display: "flex",
  alignItems: "center",

  mb: 3.9,
};

export const boxes_style = {
  flexWrap: { xs: "wrap", sm: "nowrap" },
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  alignItems: "center",
};

export const InputStyle2 = {
  input: { color: "#111", direction: "rtl", pr: 2 },
  label: { color: "#111", fontSize: "13px" },
  "& label.Mui-focused": {
    color: "#DB4444",
    fontWeight: "bold",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#DB4444ff !important",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#111",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#111",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#DB4444",
    },
  },
  mt: -4,
  width: "100%",
};

export const Modalstyle = {
  position: "absolute",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: { xs: "75%", sm: "70%", md: "70%", lg: "75%", xl: "74%" },
  bgcolor: "background.paper",
  border: "2px solid #ddd",
  borderRadius: "17px",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  p: 3,
};

export const ButtonStyle2 = {
  display: "flex",
  justifyContent: "center",
  ml: 2,
  
  fontSize: "18px",
  backgroundColor: "#099951",
  color: "#111",
  "&:hover": { backgroundColor: "#57d697" },
};

export const ButtonStyle3 = {
  display: "flex",
  justifyContent: "center",
  
  fontSize: "18px",
  backgroundColor: "#DB4444",
  color: "#111",
  "&:hover": { backgroundColor: "#d85b5b" },
};

export const ModalMainBox = {
  flexDirection: { xs: "column", sm: "row" },
  display: "flex",
  justifyContent: { xs: "flex-end", sm: "space-evenly" },
  alignItems: "center",
  width: "100%",
};

export const FirstBox = {
  width: { xs: "100%", sm: "45%" },
};

export const seccondBox = {
  mt: { xs: 6, sm: 2 },
  width: { xs: "100%", sm: "45%" },
};

export const RemaindBox = {
  mt: { xs: 6, sm: 8 },
  width: { xs: "100%", sm: "45%" },
};

export const FormControlInput = {
  mt: { xs: 3, sm: 5 },
  width: { xs: "100%", sm: "45%" },
};
