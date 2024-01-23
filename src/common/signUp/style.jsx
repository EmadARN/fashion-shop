import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

//TextArea
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `

  box-sizing: border-box;
  width: 400px !important;
  height:100px !important;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : "#fff"};
  background: ${theme.palette.mode === "dark" ? grey[900] : "transparent"};
  border-color: #111;
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[600]
  };

  &:hover {
    border:  2px solid #111;
  }

  &:focus {
    border-color: #DB4444;
    box-shadow: 0 0 0 1px ${
      theme.palette.mode === "dark" ? blue[600] : "#DB4444"
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
  `
);

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

  mt: 15,
  borderRadius: "40px",
  maxHeight: "400px !important",
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
