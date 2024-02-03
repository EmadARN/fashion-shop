//RegistrForm_information
export const RegistrFormTextfieldStyle = {
  input: { color: "#efefef" },
  mb: 0,
  "& label.MuiFormLabel-root": {
    color: "#bcbcbc",
    fontSize: { xs: "14px", md: "16px" },
    fontWeight: { xs: "300", md: "bolder" },
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#DB4444",
  },
};

//TextArea
export const BoxStyleTextArea = {
  "& .textarea": {
    minWidth: { xs: "195px", sm: "400px" },
    width: "100% ",
    height: "100px",
    mr: { xs: 5, sm: 0 },
    lineHeight: "150%",
    resize: "none",
    bgcolor: "#1111",
    borderColor: "#1116",
    transition: "all 0.6s ease",
    color: "#fff",
    p: "8px 6px",
  },
};
//FormikErrorStyle
export const FormikErrorStyle = {
  color: "#DB4444",
  fontSize: { xs: "10px", md: "13px" },
};
//verify_number
export const BoxStyle = {
  display: "flex",
  alignItems: "flex-end",
  direction: "ltr",
};
export const IconStyle = { color: "#DB4444", mr: 1, my: 0.5 };
export const TextFieldStyle = {
  input: { color: "#efefef" },
  "& label.MuiFormLabel-root": {
    color: "#bcbcbc",
    fontSize: "16px",
    fontWeight: "bolder",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#DB4444",
  },
};
//verify_code
export const verifyCodeStyle = {
  direction: "ltr",
  "& .container": {
    minWidth: { xs: "160px", sm: "180px", md: "200px" },
    width: "100%",
  },
  "& .character": {
    border: "none",
    fontSize: { xs: "16px", md: "20px" },
    borderRadius: "8px",
    outlineColor: "#DB4444",

    /* light theme */
    color: " #efefef",
    backgroundColor: "#1112",
    boxShadow: " 0 2px 0 #ddd",
    caretColor: "#DB4444",
  },
};
//Btn
export const BtnStyle = {
  color: "#bcbcbc",
  outline: "0",
  px: { xs: 0, md: 4 },
  fontWeight: "bold",
  bgcolor: "#DB4444",
  "&:hover": {
    bgcolor: "#DB4444",
    opacity: "0.7",
    color: "#111",
  },
};

//SignupDesktop
export const DesktopBoxStyle1 = {
  backgroundImage: "url(/images/rm218-bb-07.jpg)",
  minHeight: "100vh !important",
  height: "auto !important",
  display: { xs: "none", md: "flex" },
  justifyContent: "center",
  width: "100vw",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
};
export const DesktopBoxStyle2 = (maxHeight) => {
  const s1 = {
    backgroundColor: "rgba(255,255,255,0.05)",
    WebkitBackdropFilter: "blur(7px) !important",
    backdropFilter: { xs: "blur(7px)", md: "blur(10px)" },
    boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255,255,255,0.1)",
    maxWidth: "500px",
    width: "100%",
    mt: 12,
    borderRadius: "40px",
    maxHeight: `${maxHeight} !important`,
    height: "auto !important",
    position: "relative",
    display: "flex",
    justifyContent: "Center",
    alignItems: "center",
  };

  return s1;
};

export const DesktopBoxStyle3 = {
  position: "absolute",
  left: "35%",
  top: "-100px",
};
export const DesktopBoxStyle4 = (page) => {
  const style = {
    position: "absolute",
    top: "30px",
    left: "20px",
    display: page === 0 ? "none" : "flex",
  };

  return style;
};
export const DesktopIconStyle = { fontSize: "160px", color: "#722525" };
export const DesktopIconStyle1 = {
  color: "#722519",
  cursor: "pointer",
  fontSize: "30px",
};

//SignupMobile
export const BoxStyle1 = {
  backgroundImage: "url(/images/rm218-bb-07.jpg)",
  width: "100vw",
  minHeight: { xs: "940px !important", sm: "1110px!important" },
  height: "auto !important",
  display: { xs: "flex", md: "none" },
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const BoxStyle2 = (maxHeight) => {
  const s1 = {
    mt: 2,
    backgroundColor: "rgba(255,255,255,0.09)",
    WebkitBackdropFilter: "blur(7px) !important",
    backdropFilter: { xs: "blur(7px)", md: "blur(10px)" },
    boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255,255,255,0.1)",
    maxWidth: { xs: "260px", sm: "500px" },
    width: "100%",
    borderRadius: "40px",
    maxHeight: `${maxHeight} !important`,
    height: "auto !important",
    position: "relative",
  };

  return s1;
};

export const BoxStyle3 = (page) => {
  const style = {
    position: "absolute",
    top: "20px",
    left: "10px",
    display: page === 0 ? "none" : "flex",
  };

  return style;
};
export const IconStyle1 = {
  color: "#722519",
  cursor: "pointer",
  fontSize: "20px",
};
