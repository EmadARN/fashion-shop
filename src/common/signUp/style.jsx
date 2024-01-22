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
    maxWidth: "250px",
    width: "100%",
  },
  "& .character": {
    border: "none",
    fontSize: " 20px",
    borderRadius: "8px",
    outlineColor: "#DB4444",

    /* light theme */
    color: " #272729",
    backgroundColor: "#f6f5fa",
    boxShadow: " 0 2px 0 #e4e2f5",
    caretColor: "#DB4444",
  },
};
//Btn
export const BtnStyle = {
  color: "#bcbcbc",
  outline: "0",
  px: { xs: 0, md: 4 },
  fontWeight: "bold",
};

//SignupDesktop
export const DesktopBoxStyle1 = {
  backgroundImage: "url(/images/rm218-bb-07.jpg)",
  minHeight: "100vh !important",
  height: "auto !important",
  display: { xs: "none", md: "flex" },
  justifyContent: "center",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export const DesktopBoxStyle2 = {
  backgroundColor: "rgba(255,255,255,0.05)",
  WebkitBackdropFilter: "blur(7px) !important",
  backdropFilter: { xs: "blur(7px)", md: "blur(10px)" },
  boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
  border: "1px solid rgba(255,255,255,0.1)",
  maxWidth: "500px",
  width: "100%",

  mt: 20,
  borderRadius: "40px",
  maxHeight: "250px !important",
  height: "auto !important",
  position: "relative",
};
export const DesktopBoxStyle3 = {
  position: "absolute",
  left: "35%",
  top: "-100px",
};
export const DesktopIconStyle = { fontSize: "160px", color: "#722525" };

//SignupMobile
export const BoxStyle1 = {
  backgroundImage: "url(/images/rm218-bb-07.jpg)",
  width: "100%",
  minHeight: { xs: "553px !important", sm: "650px!important" },
  height: "auto !important",
  display: { xs: "flex", md: "none" },
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export const BoxStyle2 = {
  mt: { xs: 16, sm: 6 },
  backgroundColor: "rgba(255,255,255,0.09)",
  WebkitBackdropFilter: "blur(7px) !important",
  backdropFilter: { xs: "blur(7px)", md: "blur(10px)" },
  boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
  border: "1px solid rgba(255,255,255,0.1)",
  maxWidth: { xs: "270px", sm: "500px" },
  width: "100%",
  borderRadius: "40px",
  maxHeight: "160px !important",
  height: "auto !important",
  position: "relative",
};