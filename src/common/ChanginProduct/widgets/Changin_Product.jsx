import React, { useState } from "react";
import { Grid, Typography, Button, Box, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RTL from "@/common/rtl/Rtl";
import numeral from "numeral";
import { styled } from "@mui/material/styles";
import TextArea from "@/components/contactUs/widgets/TextArea";

import {
  FirstmainGrid,
  FirstBox,
  ImgStyle,
  ButtonStyle,
  SeccondMainGrid,
  InputStyle,
} from "../style";

import Img_carousel from "./Img_carousel";
const Changin_Product = () => {
  const [age, setAge] = React.useState("");


  const [PriceTextFieldValue, setPriceTextFieldValue] = useState();


const [StoreImg,setStoreImg] = useState()

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const HandleChange = (event) => {
    var newValue = numeral(event.target.value);
    var newValueFormat = newValue.format("0,0");
    setPriceTextFieldValue(newValueFormat);
  };


  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <>
      <Grid container mt={14} mb={7} justifyContent="center">
        <Grid xs={12} md={3} sx={FirstmainGrid}>
          <Box sx={FirstBox}>
            <Typography
              sx={{ borderBottom: "1px solid #ddd" }}
              mb={3}
              variant="h6"
              fontWeight="bold"
            >
              عکس محصول
            </Typography>
            <Img_carousel />
          </Box>

          
            <Button
              sx={ButtonStyle}
              variant="contained"
              component="label"
              role={undefined}
              endIcon={<CloudUploadIcon sx={{ mr: 2 }} />}
             
            >
              بارگذاری عکس
               <VisuallyHiddenInput
                  onChange={(e) => {
                    return setStoreImg(e.target.files[0]);
                  }}
                  type="file"
                /> 
            </Button>
        
        </Grid>

        <Grid sx={SeccondMainGrid} xs={12} md={5} item>
          <Box sx={FirstBox}>
            <Typography variant="h6" fontWeight="bold">
              اطلاعات محصول
            </Typography>
          </Box>

          <Box width="100%" mb={4}>
            <RTL>
              <TextField
                sx={InputStyle}
                fullWidth
                id="outlined-basic"
                label="نام محصول"
                variant="outlined"
              />
            </RTL>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            {" "}
            <RTL>
              <FormControl fullWidth sx={InputStyle}>
                <InputLabel id="demo-simple-select-label">نوع</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="نوع محصول"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>مردانه</MenuItem>
                  <MenuItem value={20}>زنانه</MenuItem>
                </Select>
              </FormControl>
            </RTL>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            <Box width="45%" ml={5}>
              <RTL>
                <TextField
                  sx={InputStyle}
                  value={PriceTextFieldValue}
                  onChange={HandleChange}
                  id="outlined-basic"
                  fullWidth
                  label=" قیمت"
                  variant="outlined"
                />
              </RTL>
            </Box>

            <Box width="45%">
              <RTL>
                <TextField
                  sx={InputStyle}
                  fullWidth
                  id="outlined-basic"
                  label=" لینک محصول"
                  variant="outlined"
                />
              </RTL>
            </Box>
          </Box>

          <Box>
            <RTL>
              {/* <TextField
                sx={InputStyle}
                fullWidth
                id="filled-multiline-static"
                label="توضیحات محصول"
                multiline
                rows={4}
                variant="filled"
              /> */}

              <TextArea />
            </RTL>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Changin_Product;
