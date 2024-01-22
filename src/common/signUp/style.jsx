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
