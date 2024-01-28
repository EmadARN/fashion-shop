import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import RTL from "@/common/rtl/Rtl";
import { InputStyle2 } from "../style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ButtonStyle, InputStyle } from "@/common/ChanginProduct/style";
import CancelIcon from "@mui/icons-material/Cancel";
import InputLabel from "@mui/material/InputLabel";
import {
  Modalstyle,
  ButtonStyle2,
  ModalMainBox,
  FirstBox,
  seccondBox,
  RemaindBox,
  FormControlInput,
  ButtonStyle3,
} from "../style";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

const ModalMain = (props) => {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [age, setAge] = React.useState("");


  const handleClose = () => props.setOpen(false);
  
  return (
    <div>
      <Modal
        sx={{ width: "100%" }}
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
          <Box mb={6}>
            {" "}
            <Typography>مشخصات خود را واد کنید</Typography>
          </Box>

          <Box sx={ModalMainBox}>
            <Box mt={2} sx={FirstBox}>
              <RTL>
                <TextField
                  sx={InputStyle2}
                  id="standard-basic"
                  label="نام"
                  variant="outlined"
                />
              </RTL>
            </Box>

            <Box sx={seccondBox}>
              <RTL>
                <TextField
                  sx={InputStyle2}
                  id="standard-basic"
                  label=" اینستاگرام"
                  variant="outlined"
                />
              </RTL>
            </Box>
          </Box>

          <Box sx={ModalMainBox}>
            <Box sx={RemaindBox}>
              <RTL>
                <TextField
                  sx={InputStyle2}
                  id="standard-basic"
                  label="  شماره"
                  variant="outlined"
                />
              </RTL>
            </Box>

            <Box sx={RemaindBox}>
              <RTL>
                <TextField
                  sx={InputStyle2}
                  id="standard-basic"
                  label="آدرس"
                  variant="outlined"
                />
              </RTL>
            </Box>
          </Box>

          <Box sx={ModalMainBox}>
            <Box sx={RemaindBox}>
              <RTL>
                <TextField
                  sx={InputStyle2}
                  id="standard-basic"
                  label="ایمیل"
                  variant="outlined"
                />
              </RTL>
            </Box>

            <Box sx={FormControlInput} width="45%">
              <RTL>
                <FormControl fullWidth sx={InputStyle}>
                  <InputLabel id="demo-simple-select-label">
                    دسته بندی
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="نوع محصول"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>مردانه</MenuItem>
                    <MenuItem value={20}>زنانه</MenuItem>
                    <MenuItem value={20}>بچگانه</MenuItem>
                    <MenuItem value={20}>ورزشی</MenuItem>
                    <MenuItem value={20}>ساعت</MenuItem>
                  </Select>
                </FormControl>
              </RTL>
            </Box>
          </Box>

          <Box width="96%" display="flex" justifyContent="flex-end" mt={3}>
            <Button
              sx={ButtonStyle2}
              variant="contained"
              endIcon={<FileDownloadDoneIcon sx={{ mr: 2 }} />}
            >
              ثبت
            </Button>

            <Button
            onClick={handleClose}
              sx={ButtonStyle3}
              variant="contained"
              endIcon={<CancelIcon sx={{ mr: 2 }} />}
            >
              لغو
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalMain;
