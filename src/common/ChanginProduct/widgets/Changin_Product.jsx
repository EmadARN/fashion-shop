import React from "react";
import { Grid, Typography, Button, Box, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RTL from "@/common/rtl/Rtl";
import {
  FirstmainGrid,
  FirstBox,
  ImgStyle,
  ButtonStyle,
  SeccondMainGrid,
} from "../style";
const Changin_Product = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container>
      <Grid xs={12} md={3} sx={FirstmainGrid}>
        <Box sx={FirstBox}>
          <Typography variant="h6" fontWeight="bold">
            عکس محصول
          </Typography>
        </Box>

        <Box mb={2}>
          <img
            src="https://twicpics.celine.com/product-prd/images/large/2W799611T.02KK_1_FW23_P2_W.jpg?twic=v1/cover=1:1/resize-max=480"
            alt=""
            style={ImgStyle}
          />
        </Box>

        <Box width="100%">
          <Button
            sx={ButtonStyle}
            variant="contained"
            endIcon={<CloudUploadIcon sx={{ mr: 2 }} />}
          >
            بارگذاری عکس
          </Button>
        </Box>
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
              fullWidth
              id="outlined-basic"
              label="نام محصول"
              variant="outlined"
            />
          </RTL>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
          <Box width="45%" ml={5}>
            {" "}
            <RTL>
              <FormControl fullWidth>
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

          <Box width="45%">
            {" "}
            <RTL>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">رنگ بندی</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="رنگ بندی"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>مشکی</MenuItem>
                  <MenuItem value={20}>سفید</MenuItem>
                  <MenuItem value={20}>شیری</MenuItem>
                  <MenuItem value={20}>طوسی</MenuItem>
                </Select>
              </FormControl>
            </RTL>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
          <Box width="45%" ml={5}>
            <RTL>
              <TextField
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
            <TextField
              fullWidth
              id="filled-multiline-static"
              label="توضیحات محصول"
              multiline
              rows={4}
              variant="filled"
            />
          </RTL>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Changin_Product;
